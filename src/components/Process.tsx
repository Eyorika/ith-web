import { Search, Compass, Code2, HeartHandshake, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description: "Understand your goals, business bottlenecks, and core challenges.",
    subpoints: ["Requirement Analysis", "User Research", "Technical Audit"]
  },
  {
    number: "02",
    title: "Plan",
    icon: Compass,
    description: "Design the architecture, database models, and strategic business approach.",
    subpoints: ["System Architecture", "UI/UX Wireframing", "Roadmap & Milestones"]
  },
  {
    number: "03",
    title: "Build",
    icon: Code2,
    description: "Develop, thoroughly test, and deploy with security best practices.",
    subpoints: ["Agile Sprints", "Continuous CI/CD", "Quality Assurance"]
  },
  {
    number: "04",
    title: "Support",
    icon: HeartHandshake,
    description: "Keep your system running smoothly, performant, and growing with your team.",
    subpoints: ["SLA Monitoring", "System Enhancements", "Scale Advisory"]
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-xs font-bold text-[#f37021] uppercase tracking-widest bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              OUR PROCESS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Idea to <span className="text-[#f37021]">Impact</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We follow a clear and transparent process to deliver the right solution on time.
          </p>
        </div>

        {/* 4 Steps Row / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#fafbfc] border border-slate-200/80 hover:border-orange-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-[#f37021]/80 group-hover:text-[#f37021] transition-colors">
                      {step.number}.
                    </span>

                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#f37021] group-hover:bg-[#f37021] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#f37021] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Subpoints */}
                <div className="pt-4 border-t border-slate-200/60 space-y-1.5 mt-auto">
                  {step.subpoints.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f37021]" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;

