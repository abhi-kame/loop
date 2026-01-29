import { MousePointer, Brain, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MousePointer,
    title: 'Capture Leads',
    description: 'AI automatically captures and engages every visitor across your website, chat, email, and forms.',
  },
  {
    icon: Brain,
    title: 'AI Understands Intent',
    description: 'Our AI analyzes conversations, detects buying signals, and personalizes responses in real-time.',
  },
  {
    icon: CheckCircle,
    title: 'Deals Are Closed',
    description: 'AI handles objections, nurtures prospects, and closes deals automatically while you focus on strategy.',
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-[#0f172a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Three simple steps to transform your sales process
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2563EB]/50 to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#2563EB]/20 blur-2xl rounded-full"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#38BDF8] rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block w-8 h-8 bg-[#2563EB]/20 text-[#38BDF8] rounded-full font-bold flex items-center justify-center mb-4">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-[#94A3B8] leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5">
                    <div className="h-full bg-gradient-to-r from-[#2563EB] to-transparent animate-flow"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
