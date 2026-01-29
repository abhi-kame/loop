import { Bot, MessageSquare, Target, Zap, TrendingUp, Users } from 'lucide-react';

const agents = [
  {
    icon: Bot,
    title: 'AI Sales Agent',
    description: 'Qualifies leads, sends follow-ups, and closes deals automatically with human-like conversations.',
  },
  {
    icon: MessageSquare,
    title: 'Conversation Intelligence',
    description: 'Understands intent, detects objections, and responds with perfect timing to move deals forward.',
  },
  {
    icon: Target,
    title: 'Lead Qualification',
    description: 'Instantly identifies high-value prospects and prioritizes opportunities based on buying signals.',
  },
  {
    icon: Zap,
    title: 'Automated Follow-ups',
    description: 'Never miss a follow-up. AI reaches out at the perfect moment with personalized messaging.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Optimization',
    description: 'Analyzes patterns and optimizes sales strategies to maximize conversion and deal size.',
  },
  {
    icon: Users,
    title: 'Multi-Channel Engagement',
    description: 'Engages prospects across email, chat, SMS, and web with consistent, intelligent responses.',
  },
];

export default function AIAgents() {
  return (
    <div className="bg-gradient-to-b from-[#020617] to-[#0f172a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Intelligent AI Agents Working{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
              For You
            </span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Our AI agents handle every stage of your sales process with precision and scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#2563EB]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/0 to-[#38BDF8]/0 group-hover:from-[#2563EB]/10 group-hover:to-[#38BDF8]/5 rounded-2xl transition-all duration-300"></div>

              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#38BDF8] rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  <agent.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{agent.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{agent.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
