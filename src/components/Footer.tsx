import { Zap, LinkedinIcon, TwitterIcon, GithubIcon, Lock, Shield, CheckCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#38BDF8] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-lg">AI Sales</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              AI That Sells. Automatically.
            </p>
            <p className="text-[#94A3B8] text-xs leading-relaxed">
              We build intelligent AI sales agents that help businesses convert more leads, close more deals, and scale revenue without increasing headcount.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  AI Sales Agent
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-3 group">
              <Shield className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5 group-hover:drop-shadow-lg group-hover:drop-shadow-blue-500 transition-all duration-300" />
              <div>
                <div className="text-white font-semibold text-sm mb-1">Enterprise-Grade Security</div>
                <div className="text-[#94A3B8] text-xs">Military-grade encryption and compliance</div>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <CheckCircle className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5 group-hover:drop-shadow-lg group-hover:drop-shadow-blue-500 transition-all duration-300" />
              <div>
                <div className="text-white font-semibold text-sm mb-1">GDPR Compliant</div>
                <div className="text-[#94A3B8] text-xs">Full data privacy and regulation compliance</div>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <Lock className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5 group-hover:drop-shadow-lg group-hover:drop-shadow-blue-500 transition-all duration-300" />
              <div>
                <div className="text-white font-semibold text-sm mb-1">SOC 2 Ready</div>
                <div className="text-[#94A3B8] text-xs">Audited infrastructure and controls</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-white/10">
            <div className="text-[#94A3B8] text-xs">
              © {currentYear} AI Sales Agent. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-[#94A3B8] hover:text-white transition-colors duration-300 group"
              >
                <LinkedinIcon className="w-5 h-5 group-hover:drop-shadow-lg group-hover:drop-shadow-blue-500 transition-all duration-300" />
              </a>
              <a
                href="#"
                className="text-[#94A3B8] hover:text-white transition-colors duration-300 group"
              >
                <TwitterIcon className="w-5 h-5 group-hover:drop-shadow-lg group-hover:drop-shadow-blue-500 transition-all duration-300" />
              </a>
              <a
                href="#"
                className="text-[#94A3B8] hover:text-white transition-colors duration-300 group"
              >
                <GithubIcon className="w-5 h-5 group-hover:drop-shadow-lg group-hover:drop-shadow-blue-500 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
