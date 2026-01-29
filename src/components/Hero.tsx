import { useEffect, useState } from 'react';
import { MessageCircle, Mail, Globe as GlobeIcon, TrendingUp, Sparkles } from 'lucide-react';

export default function Hero() {
  const [statusIndex, setStatusIndex] = useState(0);
  const statuses = ['Lead Captured', 'Intent Detected', 'Follow-Up Sent', 'Deal Closed'];

  const [chatIndex, setChatIndex] = useState(0);
  const chats = [
    "Hi! Can I help you choose the right plan?",
    "Based on your needs, this is the best option.",
    "You're all set — welcome onboard!"
  ];

  useEffect(() => {
    const statusTimer = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 3000);
    return () => clearInterval(statusTimer);
  }, []);

  useEffect(() => {
    const chatTimer = setInterval(() => {
      setChatIndex((prev) => (prev + 1) % chats.length);
    }, 4000);
    return () => clearInterval(chatTimer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-[#020617] to-[#020617]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-sm text-[#38BDF8] font-medium">Powered by Advanced AI</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Sales Agents That{' '}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                Close Deals
              </span>{' '}
              in Real Time.
            </h1>

            <p className="text-xl text-[#94A3B8] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Capture leads, qualify prospects, handle objections, and convert conversations into revenue—automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                Book a Free Demo
              </button>
              <button className="px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] font-semibold rounded-lg hover:bg-[#2563EB] hover:text-white transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>

          <div className="relative h-[600px] flex items-center justify-center">
            <div className="globe-container">
              <div className="ai-globe">
                <div className="globe-core"></div>
                <div className="globe-ring ring-1"></div>
                <div className="globe-ring ring-2"></div>
                <div className="globe-ring ring-3"></div>
                <div className="energy-pulse"></div>
              </div>
            </div>

            <div className="absolute top-20 left-0 chat-bubble animate-float-1">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 max-w-xs">
                <p className="text-white text-sm">{chats[chatIndex]}</p>
              </div>
            </div>

            <div className="absolute top-40 right-0 animate-float-2">
              <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm font-medium">{statuses[statusIndex]}</span>
              </div>
            </div>

            <div className="absolute bottom-32 left-10 animate-float-3">
              <div className="flex items-center gap-3 bg-blue-500/10 backdrop-blur-md border border-blue-500/30 rounded-xl p-3">
                <MessageCircle className="w-5 h-5 text-[#38BDF8]" />
                <Mail className="w-5 h-5 text-[#38BDF8]" />
                <GlobeIcon className="w-5 h-5 text-[#38BDF8]" />
              </div>
            </div>

            <div className="absolute bottom-20 right-10 animate-float-1">
              <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-xl px-4 py-3">
                <TrendingUp className="w-5 h-5 text-[#38BDF8]" />
                <span className="text-[#38BDF8] font-semibold">+127% ROI</span>
              </div>
            </div>

            <div className="light-ray ray-1"></div>
            <div className="light-ray ray-2"></div>
            <div className="light-ray ray-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
