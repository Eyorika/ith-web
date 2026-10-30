import { LifeBuoy, Briefcase, Sliders, Globe, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: LifeBuoy,
    title: "End-to-End Support",
    description: "From idea to maintenance, we're with you every step of the way."
  },
  {
    icon: Briefcase,
    title: "Business-First Approach",
    description: "We understand real business problems, not just isolated technical tasks."
  },
  {
    icon: Sliders,
    title: "Tailored Solutions",
    description: "Built for your exact operational goals with zero generic templates."
  },
  {
    icon: Globe,
    title: "Local & Global Expertise",
    description: "Proudly based in Ethiopia, engineered to stringent international standards."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#080f1e] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#f37021]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#2e3a87]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-xs font-bold text-[#f37021] uppercase tracking-widest bg-[#f37021]/10 border border-[#f37021]/20 px-3 py-1 rounded-full">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            More Than Code, <br className="hidden sm:inline" />
            <span className="text-[#f37021]">Real Partnership.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            We work closely with you, from planning to support, to make sure your system delivers real business value.
          </p>
        </div>

        {/* 2-Column Content: 4 Pillars & Developer Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 4 Key Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0f1a30]/80 border border-slate-800/80 hover:border-[#f37021]/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f37021] mb-4 group-hover:bg-[#f37021] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f37021] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Tech Developer Workspace Visual with Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1000&q=80"
                alt="Inspire Tech Hub Software Engineer"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                onError={(e) => {
                  e.currentTarget.src = "/ith-imgs/mandela education academy website.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e] via-[#080f1e]/30 to-transparent" />

              {/* Technology with purpose badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#080f1e]/90 backdrop-blur-md border border-[#f37021]/40 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#f37021] animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f37021]">Engineering Ethos</span>
                  </div>
                  <div className="text-lg font-extrabold text-white">
                    Technology with purpose.
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Building robust software that scales businesses and empowers human potential.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyUs;
