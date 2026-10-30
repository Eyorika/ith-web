import { useState } from 'react';
import { ArrowDownRight, ArrowRight, Blocks, Workflow, ShieldCheck, Wrench, ChartNoAxesCombined, Check, CircleDot } from 'lucide-react';
import { Button } from './ui/button';
import { QuoteDialog } from './QuoteDialog';

const Hero = () => {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" aria-label="Inspire Tech Hub introduction" className="relative isolate overflow-hidden bg-[#080f1e] pt-32 pb-20 text-white sm:pt-36 lg:min-h-[780px] lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_32%,rgba(243,112,33,0.16),transparent_27%),radial-gradient(circle_at_12%_82%,rgba(46,58,135,0.38),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/[0.08] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f37021] shadow-[0_0_12px_rgba(243,112,33,0.9)]" />
              Inspire Tech Hub · Digital systems partner
            </div>

            <h1 className="text-[2.65rem] font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.35rem]">
              Make your business run on{' '}
              <span className="relative inline-block text-[#ff8a43]">
                better systems.
                <span className="absolute -bottom-2 left-0 h-[3px] w-2/3 rounded-full bg-gradient-to-r from-[#f37021] to-transparent" />
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
              We design, build and support the software and workflows that help teams reduce manual work, connect operations and serve customers with confidence.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button onClick={() => setQuoteDialogOpen(true)} className="group h-12 rounded-lg bg-[#f37021] px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(243,112,33,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#e86417] hover:shadow-[0_16px_34px_rgba(243,112,33,0.28)]">
                Talk through a project
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button onClick={() => scrollTo('portfolio')} variant="outline" className="h-12 rounded-lg border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-slate-100 transition-colors hover:border-white/30 hover:bg-white/[0.09] hover:text-white">
                Explore our work
                <ArrowDownRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-11 border-t border-white/10 pt-6">
              <p className="mb-4 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">What we help businesses do</p>
              <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-[#ff8a43]"><Blocks className="h-4 w-4" /></span>
                  <span className="text-xs font-medium leading-5 text-slate-200">Build business systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-[#ff8a43]"><Workflow className="h-4 w-4" /></span>
                  <span className="text-xs font-medium leading-5 text-slate-200">Connect workflows</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-[#ff8a43]"><Wrench className="h-4 w-4" /></span>
                  <span className="text-xs font-medium leading-5 text-slate-200">Maintain and improve</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
            <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#f37021]/20 via-[#2e3a87]/20 to-transparent blur-3xl" />
            <div className="absolute -right-5 top-12 h-24 w-24 rounded-full border border-orange-300/20 bg-orange-300/[0.04] blur-[1px]" />
            <div className="relative rounded-2xl border border-white/10 bg-[#101a2d]/95 p-2 shadow-[0_35px_100px_rgba(0,0,0,0.48)] sm:p-3">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-3 py-3 sm:px-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-rose-400/80" /><span className="h-2 w-2 rounded-full bg-amber-300/80" /><span className="h-2 w-2 rounded-full bg-emerald-400/80" /></div>
                  <span className="ml-2 text-[11px] font-semibold tracking-wide text-slate-300">BUSINESS WORKSPACE</span>
                </div>
                <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[9px] font-medium uppercase tracking-wider text-slate-400">Illustrative view</span>
              </div>

              <div className="grid grid-cols-[104px_1fr] gap-3 p-3 sm:grid-cols-[132px_1fr] sm:gap-4 sm:p-5">
                <aside className="space-y-2 border-r border-white/[0.07] pr-3 sm:pr-4">
                  <div className="mb-5 flex items-center gap-2 px-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f37021] text-[10px] font-black text-white">I</span>
                    <span className="text-[10px] font-bold text-white sm:text-xs">Workspace</span>
                  </div>
                  {[
                    ['Overview', true],
                    ['Operations', false],
                    ['Customers', false],
                    ['Workflows', false],
                    ['Reports', false],
                  ].map(([label, active]) => (
                    <div key={String(label)} className={'flex items-center gap-2 rounded-md px-2 py-2 text-[9px] sm:text-[10px] ' + (active ? 'bg-[#f37021]/15 font-semibold text-orange-300' : 'text-slate-500')}>
                      <span className={'h-1.5 w-1.5 rounded-full ' + (active ? 'bg-[#f37021]' : 'bg-slate-700')} />
                      {label}
                    </div>
                  ))}
                  <div className="mt-8 rounded-lg border border-white/[0.07] bg-white/[0.025] p-2">
                    <div className="mb-2 text-[8px] uppercase tracking-wider text-slate-500">Need assistance?</div>
                    <div className="h-1.5 w-4/5 rounded-full bg-slate-700" />
                    <div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-slate-800" />
                  </div>
                </aside>

                <div className="min-w-0 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div><p className="text-[9px] uppercase tracking-[0.16em] text-slate-500">Your operations</p><h2 className="mt-1 text-sm font-semibold text-white sm:text-lg">One connected workspace</h2></div>
                    <span className="rounded-md border border-emerald-400/20 bg-emerald-400/[0.08] px-2 py-1 text-[8px] font-medium text-emerald-300">System overview</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: 'Business processes', value: 'Connected', icon: Workflow },
                      { label: 'Customer records', value: 'Organized', icon: Blocks },
                    ].map((item) => {
                      const Icon = item.icon;
                      return <div key={item.label} className="rounded-xl border border-white/[0.08] bg-[#16243b] p-3"><Icon className="mb-3 h-4 w-4 text-[#ff8a43]" /><div className="text-[9px] text-slate-500">{item.label}</div><div className="mt-1 text-xs font-semibold text-slate-100">{item.value}</div></div>;
                    })}
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#142139] p-3 sm:p-4">
                    <div className="mb-3 flex items-center justify-between"><span className="text-[10px] font-semibold text-slate-200">A clearer way to work</span><ChartNoAxesCombined className="h-4 w-4 text-[#ff8a43]" /></div>
                    <div className="space-y-3">
                      {[
                        { title: 'Customer request received', detail: 'Information captured in one place', width: 'w-full' },
                        { title: 'Team workflow assigned', detail: 'The next step is visible to the team', width: 'w-4/5' },
                        { title: 'Progress reviewed', detail: 'Work can be tracked and improved', width: 'w-3/5' },
                      ].map((item, index) => (
                        <div key={item.title} className="flex gap-3">
                          <div className="flex flex-col items-center"><span className={'mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ' + (index === 0 ? 'bg-[#f37021]/20 text-orange-300' : 'bg-white/[0.07] text-slate-400')}>{index === 0 ? <CircleDot className="h-3 w-3" /> : <Check className="h-3 w-3" />}</span>{index !== 2 && <span className="mt-1 h-7 w-px bg-slate-700" />}</div>
                          <div className="min-w-0 flex-1 pb-1"><div className="text-[10px] font-medium text-slate-200 sm:text-xs">{item.title}</div><div className="mt-1 text-[8px] leading-4 text-slate-500 sm:text-[9px]">{item.detail}</div><div className={'mt-2 h-1 rounded-full bg-slate-800 ' + item.width} /></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-orange-400/15 bg-orange-400/[0.06] px-3 py-2.5">
                    <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-orange-300" /><span className="text-[9px] font-medium text-slate-300">Built around your business</span></div>
                    <span className="text-[8px] uppercase tracking-wider text-orange-300">Designed · Built · Supported</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/10 bg-[#111c30] px-4 py-3 shadow-xl sm:block lg:-left-8">
              <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-400/10 text-[#ff8a43]"><Wrench className="h-4 w-4" /></span><div><p className="text-[10px] font-semibold text-white">Long-term technical support</p><p className="mt-0.5 text-[9px] text-slate-500">Not just launch-day delivery</p></div></div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 lg:mt-24">
          <span className="h-px w-8 bg-slate-700" />Thoughtful engineering. Practical business impact.<span className="h-px w-8 bg-slate-700" />
        </div>
      </div>
      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </section>
  );
};

export default Hero;
