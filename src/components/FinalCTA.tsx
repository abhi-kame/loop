export default function FinalCTA() {
  return (
    <div className="relative bg-gradient-to-b from-[#020617] to-[#0f172a] py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          <div className="mini-globe">
            <div className="mini-globe-core"></div>
            <div className="mini-globe-ring"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Let AI{' '}
          <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
            Sell for You?
          </span>
        </h2>

        <p className="text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto">
          Join thousands of sales teams using AI to close more deals, faster.
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-5 bg-[#2563EB] text-white text-lg font-semibold rounded-lg hover:bg-[#1d4ed8] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
            Book Your Demo
          </button>
          <button className="px-10 py-5 border-2 border-white/20 text-white text-lg font-semibold rounded-lg hover:border-[#2563EB] hover:bg-[#2563EB]/10 transition-all duration-300">
            Start Free Trial
          </button>
        </div>

        <p className="mt-8 text-sm text-[#94A3B8]">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </div>
  );
}
