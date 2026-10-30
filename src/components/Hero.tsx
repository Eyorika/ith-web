import { useState } from 'react';
import { ArrowRight, Layers, ShieldCheck, Wrench, Sparkles, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { QuoteDialog } from './QuoteDialog';

const Hero = () => {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      role="banner"
      aria-label="Welcome to Inspire Tech Hub"
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-24 flex items-center bg-[#080f1e] text-white overflow-hidden"
    >
      {/* Background radial ambient glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#f37021]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] bg-[#2e3a87]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f37021]/10 border border-[#f37021]/20 text-[#f37021] text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f37021] animate-pulse" />
              <span>INSPIRE TECH HUB</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-white leading-[1.12]">
              Business Systems <br />
              That Work. <br />
              <span className="text-[#f37021] relative inline-block">
                For Real Growth.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              We build and maintain web and software systems that help Ethiopian and global businesses work smarter, serve their customers better, and grow sustainably.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                onClick={() => setQuoteDialogOpen(true)}
                className="w-full sm:w-auto bg-[#f37021] hover:bg-[#e06214] text-white font-semibold px-7 py-6 text-base rounded-lg shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 group flex items-center justify-center gap-2"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={scrollToPortfolio}
                variant="outline"
                className="w-full sm:w-auto border-slate-700 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium px-7 py-6 text-base rounded-lg transition-colors"
              >
                View Our Work
              </Button>
            </div>

            {/* 3 Trust Features in a row */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#f37021] flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200">Custom Systems</h4>
                  <p className="text-[11px] text-slate-400">& Platforms</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#f37021] flex-shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200">System Maintenance</h4>
                  <p className="text-[11px] text-slate-400">& Support</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#f37021] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200">Scalable & Secure</h4>
                  <p className="text-[11px] text-slate-400">Solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Laptop Dashboard Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#f37021]/20 via-[#2e3a87]/30 to-blue-500/20 rounded-3xl blur-2xl transform scale-95" />

            {/* Laptop Body */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-2 sm:p-3 shadow-2xl border border-slate-700/60 ring-1 ring-white/10">
                
                {/* Laptop Camera dot */}
                <div className="flex justify-center mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900 ring-1 ring-slate-600" />
                </div>

                {/* Dashboard Screen */}
                <div className="relative rounded-xl overflow-hidden bg-[#0d1527] border border-slate-800 text-slate-200 shadow-inner font-sans text-xs">
                  {/* Dashboard Top Header Bar */}
                  <div className="h-9 bg-[#111c33] border-b border-slate-800/80 px-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-300 ml-2">ITH Portal OS</span>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-slate-400 bg-slate-800/70 px-2.5 py-0.5 rounded-md border border-slate-700/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Production Live</span>
                    </div>
                  </div>

                  {/* Dashboard Content Grid */}
                  <div className="p-3 sm:p-4 space-y-3">
                    {/* Top Stat Cards */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {/* Metric 1 */}
                      <div className="bg-[#14223d] border border-slate-700/50 rounded-lg p-2.5 sm:p-3">
                        <div className="flex justify-between items-start">
                          <span className="text-[11px] text-slate-400">Total Revenue</span>
                          <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded">+18.4%</span>
                        </div>
                        <div className="text-lg sm:text-2xl font-bold text-white mt-1">12,480</div>
                        <div className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-[#f37021]" />
                          <span>Active transactions</span>
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div className="bg-[#14223d] border border-slate-700/50 rounded-lg p-2.5 sm:p-3">
                        <div className="flex justify-between items-start">
                          <span className="text-[11px] text-slate-400">Active Users</span>
                          <span className="text-[10px] text-[#f37021] font-semibold bg-[#f37021]/10 px-1.5 py-0.5 rounded">+24.2%</span>
                        </div>
                        <div className="text-lg sm:text-2xl font-bold text-white mt-1">2,867</div>
                        <div className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
                          <Users className="w-3 h-3 text-cyan-400" />
                          <span>Connected systems</span>
                        </div>
                      </div>
                    </div>

                    {/* Chart Box */}
                    <div className="bg-[#14223d] border border-slate-700/50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[11px] font-semibold text-slate-300">System Throughput & Scalability</span>
                        <div className="flex gap-2 text-[10px]">
                          <span className="flex items-center gap-1 text-slate-400">
                            <span className="w-2 h-2 rounded-full bg-[#f37021]" /> Speed
                          </span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" /> Uptime
                          </span>
                        </div>
                      </div>

                      {/* Stylized SVG Chart */}
                      <div className="h-24 sm:h-28 w-full relative">
                        <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="glowOrange" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#f37021" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#f37021" stopOpacity="0.0" />
                            </linearGradient>
                            <linearGradient id="glowBlue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>

                          {/* Grid lines */}
                          <line x1="0" y1="25" x2="300" y2="25" stroke="#1e293b" strokeDasharray="3 3" />
                          <line x1="0" y1="50" x2="300" y2="50" stroke="#1e293b" strokeDasharray="3 3" />
                          <line x1="0" y1="75" x2="300" y2="75" stroke="#1e293b" strokeDasharray="3 3" />

                          {/* Blue area & curve */}
                          <path
                            d="M0,80 Q40,65 80,70 T160,40 T240,55 T300,20 L300,100 L0,100 Z"
                            fill="url(#glowBlue)"
                          />
                          <path
                            d="M0,80 Q40,65 80,70 T160,40 T240,55 T300,20"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="2.5"
                          />

                          {/* Orange area & curve */}
                          <path
                            d="M0,60 Q50,45 100,50 T180,25 T250,35 T300,10 L300,100 L0,100 Z"
                            fill="url(#glowOrange)"
                          />
                          <path
                            d="M0,60 Q50,45 100,50 T180,25 T250,35 T300,10"
                            fill="none"
                            stroke="#f37021"
                            strokeWidth="2.5"
                          />

                          {/* Active points */}
                          <circle cx="180" cy="25" r="3.5" fill="#f37021" className="animate-pulse" />
                          <circle cx="240" cy="55" r="3" fill="#38bdf8" />
                          <circle cx="300" cy="10" r="4" fill="#ffffff" stroke="#f37021" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>

                    {/* Mini Process Bar */}
                    <div className="bg-[#14223d] border border-slate-700/50 rounded-lg p-2.5 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="font-medium text-slate-300">Automated Pipeline</span>
                      </div>
                      <span className="text-[#f37021] font-semibold text-[10px]">99.98% Uptime SLA</span>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Lip */}
                <div className="mt-1 h-3 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 rounded-b-xl border-t border-slate-900 flex justify-center items-center">
                  <div className="w-16 h-1 bg-slate-900/80 rounded-full" />
                </div>
              </div>

              {/* Floating Marker Badge ("Better systems, bigger possibilities.") */}
              <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-4 z-20 transform rotate-[-4deg] hover:rotate-0 transition-transform duration-300">
                <div className="bg-[#0b1326]/90 backdrop-blur-md border border-[#f37021]/40 text-white px-4 py-2 rounded-xl shadow-xl shadow-black/50">
                  <p className="font-caveat text-xl sm:text-2xl text-slate-100 font-bold tracking-wide flex items-center gap-2">
                    <span className="text-[#f37021]">✦</span>
                    Better systems, bigger possibilities.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </section>
  );
};

export default Hero;
