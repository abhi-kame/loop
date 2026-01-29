import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Sales',
    company: 'TechCorp',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Our sales team closed 3x more deals in the first month. The AI handles objections better than our junior reps.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder & CEO',
    company: 'StartupXYZ',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Game-changer for our SaaS business. We went from 5% to 18% conversion rate overnight. ROI was positive in week one.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Head of Growth',
    company: 'ScaleNow',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'The AI never sleeps. We are closing deals at 3 AM from prospects in different time zones. Incredible.',
    rating: 5,
  },
];

const companies = [
  'TechCorp',
  'StartupXYZ',
  'ScaleNow',
  'InnovateLab',
  'GrowthCo',
  'CloudSync',
];

export default function SocialProof() {
  return (
    <div className="bg-[#020617] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trusted by Sales Teams Worldwide
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Join thousands of companies closing more deals with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#2563EB]/50 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-[#2563EB] mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#38BDF8] text-[#38BDF8]" />
                ))}
              </div>

              <p className="text-[#94A3B8] leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-[#94A3B8]">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-12">
          <p className="text-center text-[#94A3B8] mb-8">Trusted by leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-40">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-center font-bold text-white text-lg hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
