import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import AIAgents from './components/AIAgents';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <AIAgents />
      <HowItWorks />
      <Pricing />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
