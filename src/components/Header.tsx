import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Product', href: '#product' },
    { label: 'AI Agents', href: '#agents' },
    { label: 'How It Works', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-blue-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#38BDF8] rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-xl hidden sm:inline">AI Sales Agent</span>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[#94A3B8] hover:text-white transition-colors duration-300 relative group text-sm font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2 text-white text-sm font-medium hover:text-[#38BDF8] transition-colors duration-300">
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
              Book a Demo
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-[#38BDF8] transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden bg-black/95 border-t border-white/10 py-4 space-y-2 animate-fade-in">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2.5 text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 text-sm font-medium opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <button className="w-full px-4 py-2.5 text-[#38BDF8] text-sm font-medium hover:bg-white/5 rounded-lg transition-all duration-300">
                Sign In
              </button>
              <button className="w-full px-4 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                Book a Demo
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
