import { Calendar, Layers, Users, ShieldCheck } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: "4+",
    label: "Years in Business",
    detail: "Proven track record"
  },
  {
    icon: Layers,
    value: "20+",
    label: "Projects Delivered",
    detail: "Web apps & platforms"
  },
  {
    icon: Users,
    value: "5+",
    label: "Happy Clients",
    detail: "Businesses & startups"
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Focus on High-Tech Impact",
    detail: "Engineered for scalability"
  }
];

const StatsBar = () => {
  return (
    <section className="bg-white border-b border-slate-200/80 py-8 sm:py-10 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-3 sm:p-4 rounded-xl hover:bg-slate-50/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#f37021] flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
