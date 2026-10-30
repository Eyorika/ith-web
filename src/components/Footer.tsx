import { useState } from 'react';
import { 
  Linkedin, 
  Send, 
  Github, 
  Twitter, 
  Instagram, 
  ArrowRight, 
  CheckCircle2, 
  ArrowUp,
  Mail
} from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    });
    setSubscribed(true);
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll to Top floating button */}
      <button
        onClick={scrollToTop}
        className="fixed left-6 bottom-6 w-11 h-11 rounded-full bg-[#f37021] text-white shadow-xl hover:bg-[#e06214] transition-all z-40 flex items-center justify-center hover:scale-105"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <footer className="bg-[#080f1e] text-white pt-20 pb-12 border-t border-slate-800/80 relative overflow-hidden">
        {/* Subtle ambient light */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f37021]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-800/80">
            
            {/* Column 1: Brand Info (col-span-4) */}
            <div className="lg:col-span-4 space-y-5">
              <a href="#home" className="flex items-center gap-3 group inline-flex">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f37021] to-[#e06214] flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
                  <span className="font-extrabold text-white text-lg tracking-tight font-sans">[ / ]</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-white tracking-wider leading-none">ITH</span>
                  <span className="text-[10px] uppercase font-medium text-slate-400 tracking-widest mt-0.5">Inspire Tech Hub</span>
                </div>
              </a>

              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Building systems. Creating opportunities. Empowering Ethiopian and global businesses with scalable digital engineering.
              </p>

              {/* Social Icons */}
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="https://www.linkedin.com/company/inspire-tech-hub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#f37021] hover:bg-white/10 hover:border-orange-500/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://t.me/InspireTech_Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#f37021] hover:bg-white/10 hover:border-orange-500/30 transition-all"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/go_ith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#f37021] hover:bg-white/10 hover:border-orange-500/30 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#f37021] hover:bg-white/10 hover:border-orange-500/30 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (col-span-2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#home" className="text-slate-400 hover:text-[#f37021] transition-colors">Home</a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-[#f37021] transition-colors">Services</a>
                </li>
                <li>
                  <a href="#portfolio" className="text-slate-400 hover:text-[#f37021] transition-colors">Portfolio</a>
                </li>
                <li>
                  <a href="#about" className="text-slate-400 hover:text-[#f37021] transition-colors">About</a>
                </li>
                <li>
                  <a href="#why-us" className="text-slate-400 hover:text-[#f37021] transition-colors">Why Choose Us</a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-[#f37021] transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Services (col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Our Services
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a href="#services" className="hover:text-[#f37021] transition-colors">Custom Web Applications</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#f37021] transition-colors">System Maintenance & Support</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#f37021] transition-colors">Process Automation & APIs</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#f37021] transition-colors">Cloud & Infrastructure</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#f37021] transition-colors">AI & Data Solutions</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#f37021] transition-colors">Consulting & Digital Strategy</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter (col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Get updates on our latest projects, tech insights, and digital growth news.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Thanks for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="bg-[#101b33] border-slate-700/80 text-white placeholder:text-slate-500 text-xs h-10 rounded-lg pr-24 focus:border-[#f37021]"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="absolute right-1 top-1 h-8 bg-[#f37021] hover:bg-[#e06214] text-white text-xs px-3 rounded-md font-semibold"
                    >
                      Subscribe
                    </Button>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>
              © 2025 Inspire Tech Hub (ITH). All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
