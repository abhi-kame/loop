import { useEffect, useState } from 'react';

export default function TrustBar() {
  const [counts, setCounts] = useState({ conversion: 0, coverage: 0, costs: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        conversion: Math.floor(progress * 3),
        coverage: Math.floor(progress * 24),
        costs: Math.floor(progress * 60),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#020617] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">
              {counts.conversion}
              <span className="text-[#38BDF8]">×</span>
            </div>
            <div className="text-[#94A3B8] font-medium">Higher Conversion Rates</div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">
              {counts.coverage}
              <span className="text-[#38BDF8]">/7</span>
            </div>
            <div className="text-[#94A3B8] font-medium">Sales Coverage</div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">
              {counts.costs}
              <span className="text-[#38BDF8]">%</span>
            </div>
            <div className="text-[#94A3B8] font-medium">Lower Sales Costs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
