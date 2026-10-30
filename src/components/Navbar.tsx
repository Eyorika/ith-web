import { useEffect, useState } from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { QuoteDialog } from './QuoteDialog';

const navLinks = [
  { name: 'Solutions', href: '#services' },
  { name: 'Our work', href: '#portfolio' },
  { name: 'How we work', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Logo = () => (
    <a href="#home" aria-label="Inspire Tech Hub home" className="group flex items-center gap-3">
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#ff914d] to-[#e85e12] shadow-lg shadow-orange-500/20 transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105">
        <span className="text-sm font-black tracking-tight text-white">ITH</span>
      </span>
      <span className="flex flex-col">
        <span className="text-[15px] font-extrabold leading-none tracking-[0.12em] text-white">INSPIRE</span>
        <span className="mt-1 text-[9px] font-semibold uppercase leading-none tracking-[0.2em] text-slate-400">Tech Hub</span>
      </span>
    </a>
  );

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={'fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ' + (
          isScrolled
            ? 'border-white/[0.09] bg-[#080f1e]/95 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl'
            : 'border-white/[0.06] bg-[#080f1e]/75 py-4 backdrop-blur-md'
        )}
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="relative py-2 text-[13px] font-medium text-slate-300 transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#f37021] after:transition-all after:duration-200 hover:after:w-full">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button onClick={() => setQuoteDialogOpen(true)} className="h-10 rounded-lg bg-[#f37021] px-4 text-xs font-semibold text-white shadow-md shadow-orange-500/15 transition-all hover:-translate-y-0.5 hover:bg-[#e86417]">
              Start a conversation
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation menu" className="text-white hover:bg-white/10 hover:text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[310px] border-white/10 bg-[#080f1e] p-6 text-white">
                <div className="mt-7 flex h-full flex-col justify-between">
                  <div>
                    <Logo />
                    <div className="my-6 h-px bg-white/10" />
                    <div className="flex flex-col">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.name}>
                          <a href={link.href} className="border-b border-white/[0.06] py-4 text-sm font-medium text-slate-300 transition-colors hover:text-[#ff8a43]">
                            {link.name}
                          </a>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                  <Button onClick={() => setQuoteDialogOpen(true)} className="mt-8 h-12 w-full rounded-lg bg-[#f37021] font-semibold text-white hover:bg-[#e86417]">
                    Start a conversation
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </>
  );
};

export default Navbar;
