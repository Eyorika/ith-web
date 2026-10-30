import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { QuoteDialog } from './QuoteDialog';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const Logo = () => (
    <a href="#home" className="flex items-center gap-3 group">
      {/* Geometric ITH Badge */}
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f37021] to-[#e06214] flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
        <span className="font-extrabold text-white text-lg tracking-tight font-sans">[ / ]</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-extrabold text-white tracking-wider leading-none">ITH</span>
        <span className="text-[10px] uppercase font-medium text-slate-400 tracking-widest mt-0.5">Inspire Tech Hub</span>
      </div>
    </a>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080f1e]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3'
            : 'bg-[#080f1e]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-[#f37021] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#f37021] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={() => setQuoteDialogOpen(true)}
                className="bg-[#f37021] hover:bg-[#e06214] text-white rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02] flex items-center gap-1.5"
              >
                <span>Get a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Navigation Sheet */}
            <div className="flex items-center md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-[#080f1e] border-slate-800 text-white p-6">
                  <div className="flex flex-col h-full justify-between mt-6">
                    <div className="space-y-6">
                      <Logo />
                      <div className="h-px bg-slate-800 my-4" />
                      <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                          <SheetClose asChild key={link.name}>
                            <a
                              href={link.href}
                              className="text-base font-medium text-slate-200 hover:text-[#f37021] transition-colors py-2"
                            >
                              {link.name}
                            </a>
                          </SheetClose>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-slate-800">
                      <Button
                        onClick={() => {
                          setQuoteDialogOpen(true);
                        }}
                        className="w-full bg-[#f37021] hover:bg-[#e06214] text-white rounded-lg py-3 font-semibold flex items-center justify-center gap-2"
                      >
                        <span>Get a Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Quote Request Dialog */}
      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </>
  );
};

export default Navbar;
