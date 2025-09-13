import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import HowItWorks from "./components/HowItWorks";
import Community from "./components/Community";
import StreamerForm from "./components/StreamerForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Mission />
      <HowItWorks />
      <Community />
      <StreamerForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
