import React from "react";
import { Play, TrendingUp, ExternalLink, BarChart3 } from "lucide-react";
import { formatCurrency } from "../services/gecko";
import { useGeckoStats } from "../hooks/useGeckoStats";

const DEV_PUMP_STREAM_URL =
  "https://pump.fun/coin/Fzpo8vGJRRB9d8h9hv5FdNuvskTSXc55GGFvNpZupump";
const Hero: React.FC = () => {
  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const {
    data: marketData,
    loading: isLoading,
    lastUpdated,
    error,
  } = useGeckoStats({
    network: "solana",
    pool: "55phhPtxJxejweNFVjv9zYgDTnkbbXDFPWVyVTcUfugh",
    hours: 24,
    limit: 200,
    intervalMs: 30000,
    staleMs: 15000,
  });

  const stats = [
    {
      label: "Market Cap",
      value: isLoading
        ? "Loading..."
        : marketData
        ? formatCurrency(marketData.marketCapUsd)
        : "—",
      icon: <TrendingUp className="w-5 h-5 text-purple-300 mr-2" />,
      trend: isLoading
        ? "Fetching latest pool data..."
        : marketData
        ? `Latest ${marketData.tradesConsidered} trades`
        : "Unavailable",
    },
    {
      label: "Trading Volume",
      value: isLoading
        ? "Loading..."
        : marketData
        ? formatCurrency(marketData.tradingVolumeUsdPeriod)
        : "—",
      icon: <BarChart3 className="w-5 h-5 text-purple-300 mr-2" />,
      trend: isLoading
        ? "Collecting trade history..."
        : marketData
        ? `${marketData.periodHours}h period`
        : "Unavailable",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239146FF" fill-opacity="0.4"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]`}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src="/onboarding(coin).avif"
                alt="StreamCoin"
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-2xl ring-4 ring-white/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent"></div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Streamers,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white pb-4">
              Building Communities
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect small Twitch streamers and underserved individuals with
            opportunities on Pump.fun. Generate revenue, build communities, and
            create lasting impact together.
          </p>

          {/* Dynamic Stats */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center min-w-[140px]">
                <div className="flex items-center justify-center mb-2">
                  {s.icon}
                  <span className="text-2xl lg:text-3xl font-bold text-white">
                    {s.value}
                  </span>
                </div>
                <p className="text-purple-200 text-sm lg:text-base">
                  {s.label}
                </p>
                {s.trend && (
                  <p className="text-purple-400 text-xs mt-1">{s.trend}</p>
                )}
              </div>
            ))}
          </div>
          {error && (
            <p className="text-xs text-red-300 mb-6">API error: {error}</p>
          )}
          {lastUpdated && (
            <p className="text-xs text-purple-300 mb-6">
              Updated {new Date(lastUpdated).toLocaleTimeString()} • Source:
              GeckoTerminal
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("apply")}
              className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                Start Streaming Now
                <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                Learn More
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a
              href="https://x.com/OnboardingFun"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1"
              aria-label="Follow OnboardingFun on X"
            >
              <span className="flex items-center">
                Follow us on X
                <img
                  src="/twitter-x-white.svg"
                  alt="X logo"
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  loading="lazy"
                  draggable="false"
                />
              </span>
            </a>
            <a
              href={DEV_PUMP_STREAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                Join Dev's Live Pump Stream
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
  return null; // unreachable placeholder (should not hit) - kept to satisfy TS if mis-merged
};

export default Hero;
