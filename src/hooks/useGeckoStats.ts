import { useEffect, useRef, useState } from "react";
import { getStats, type StatsResponse } from "../services/gecko";

interface UseGeckoStatsOptions {
  network?: string;
  pool?: string;
  hours?: number;
  limit?: number;
  intervalMs?: number; // polling interval
  staleMs?: number; // don't refetch if cached data newer than this
  pauseWhenHidden?: boolean;
}

interface GeckoStatsState {
  data: StatsResponse | null;
  loading: boolean;
  error: string | null;
  lastUpdated: number | null;
}

const LS_KEY = "geckoStatsCacheV1";

interface CachedPayload {
  timestamp: number;
  params: { network: string; pool: string; hours: number; limit: number };
  data: StatsResponse | null;
}

export function useGeckoStats(
  options: UseGeckoStatsOptions = {}
): GeckoStatsState {
  const {
    network = "solana",
    pool = "55phhPtxJxejweNFVjv9zYgDTnkbbXDFPWVyVTcUfugh",
    hours = 24,
    limit = 200,
    intervalMs = 30000,
    staleMs = 15000,
    pauseWhenHidden = true,
  } = options;

  const [state, setState] = useState<GeckoStatsState>({
    data: null,
    loading: true,
    error: null,
    lastUpdated: null,
  });
  const timerRef = useRef<number | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const schedule = () => {
    clearTimer();
    timerRef.current = window.setTimeout(tick, intervalMs);
  };

  const loadFromCache = (): CachedPayload | null => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return null;
      const parsed: CachedPayload = JSON.parse(raw);
      if (
        parsed.params.network === network &&
        parsed.params.pool === pool &&
        parsed.params.hours === hours &&
        parsed.params.limit === limit
      ) {
        return parsed;
      }
      return null;
    } catch {
      return null;
    }
  };

  const saveToCache = (payload: CachedPayload) => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(payload));
    } catch {
      /* ignore quota issues */
    }
  };

  const tick = async () => {
    if (pauseWhenHidden && document.hidden) {
      schedule();
      return;
    }

    const cached = loadFromCache();
    if (cached && Date.now() - cached.timestamp < staleMs) {
      // Use fresh cached data and defer network call
      setState((s) => ({
        ...s,
        data: cached.data,
        loading: false,
        lastUpdated: cached.timestamp,
      }));
      schedule();
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const data = await getStats(network, pool, hours, limit);
      const ts = Date.now();
      saveToCache({
        timestamp: ts,
        params: { network, pool, hours, limit },
        data,
      });
      setState({ data, loading: false, error: null, lastUpdated: ts });
    } catch (e: any) {
      setState((s) => ({
        ...s,
        loading: false,
        error: e?.message || "Fetch failed",
      }));
    } finally {
      schedule();
    }
  };

  useEffect(() => {
    // initial use of cache if present
    const cached = loadFromCache();
    if (cached) {
      setState({
        data: cached.data,
        loading: false,
        error: null,
        lastUpdated: cached.timestamp,
      });
    }
    tick();
    return () => {
      clearTimer();
      abortRef.current?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network, pool, hours, limit, intervalMs, staleMs, pauseWhenHidden]);

  return state;
}
