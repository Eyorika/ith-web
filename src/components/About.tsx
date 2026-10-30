import { useState } from 'react';
import { ArrowRight, Shield, Award, Zap, Check, HeartHandshake } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

const About = () => {
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fafbfc] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Tag */}
        <div className="mb-4">
          <span className="text-xs font-bold text-[#f37021] uppercase tracking-widest bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
            ABOUT US
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Bio & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              We're more than a tech company—{' '}
              <span className="text-[#f37021]">we're your digital growth partner.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Inspire Tech Hub (ITH) is an Ethiopian-based technology company focused on building business systems, platforms, and digital solutions for modern organizations. We combine technical expertise, business analysis, and long-term support to help you operate efficiently, serve your customers, and scale with confidence.
            </p>

            <div className="pt-2">
              <Button
                onClick={() => setStoryOpen(true)}
                className="bg-[#f37021] hover:bg-[#e06214] text-white font-semibold px-6 py-6 rounded-lg shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center gap-2 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column: Image & Vision/Values */}
          <div className="lg:col-span-6 space-y-6">
            {/* Workspace Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 aspect-[16/10] bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Inspire Tech Hub Workspace & Engineering Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to local asset if network is unavailable
                  e.currentTarget.src = "/ith-imgs/gugu-connect-dashboard.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  Addis Ababa Engineering Center
                </span>
              </div>
            </div>

            {/* Vision & Values Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Our Vision Card */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f37021]" />
                    Our Vision
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To create technology solutions that build stronger businesses, communities and opportunities across Ethiopia and beyond.
                  </p>
                </div>
              </div>

              {/* Our Values Card */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f37021]" />
                    Our Values
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-orange-50 border border-orange-100/70 rounded-lg p-2 text-center">
                      <Shield className="w-4 h-4 mx-auto text-[#f37021] mb-1" />
                      <span className="text-[11px] font-bold text-slate-800 block">Integrity</span>
                    </div>

                    <div className="bg-orange-50 border border-orange-100/70 rounded-lg p-2 text-center">
                      <Award className="w-4 h-4 mx-auto text-[#f37021] mb-1" />
                      <span className="text-[11px] font-bold text-slate-800 block">Excellence</span>
                    </div>

                    <div className="bg-orange-50 border border-orange-100/70 rounded-lg p-2 text-center">
                      <Zap className="w-4 h-4 mx-auto text-[#f37021] mb-1" />
                      <span className="text-[11px] font-bold text-slate-800 block">Impact</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Learn More / Full Company Story Dialog */}
      <Dialog open={storyOpen} onOpenChange={setStoryOpen}>
        <DialogContent className="sm:max-w-xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-900">
              About Inspire Tech Hub (ITH)
            </DialogTitle>
            <DialogDescription className="text-slate-600">
              Our journey, leadership, and commitment to technological innovation.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-2 text-sm text-slate-700 leading-relaxed">
            <p>
              Born in Ethiopia with a vision of world-class software craftsmanship, Inspire Tech Hub specializes in bespoke digital infrastructure: from mission-critical ERP systems to high-concurrency SaaS platforms.
            </p>
            
            <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-100 text-slate-800">
              <h4 className="font-bold text-[#f37021] mb-1 text-sm">Our Philosophy</h4>
              <p className="text-xs sm:text-sm">
                "Some journeys aren't made in the spotlight — they're forged in silence, far from the noise. Inspire Tech Hub was built on the mindset that real innovation comes from focus and purpose: tech for those who were never meant to be left behind."
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>— Eyob Ayalew, Founder & CEO</span>
                <span className="text-[#f37021]">Addis Ababa, Ethiopia</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900">What Sets Us Apart</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Business-Aligned Architecture:</strong> We don't just write code; we solve bottom-line business bottlenecks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Continuous Maintenance:</strong> Proactive SLA monitoring, security patching, and server optimization.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Global Standards, Local Insight:</strong> Built to compete globally while deeply tuned to African market dynamics.</span>
                </li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default About;
