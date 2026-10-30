import { useState } from 'react';
import { 
  Laptop, 
  Wrench, 
  Zap, 
  Cloud, 
  BrainCircuit, 
  Compass, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { QuoteDialog } from './QuoteDialog';

const services = [
  {
    icon: Laptop,
    title: "Custom Web & Business Systems",
    description: "Modern web applications, portals and platforms tailored to your business needs.",
    details: ["Custom Enterprise Portals", "Responsive Web Apps", "Database Architecture", "Secure Authentication"]
  },
  {
    icon: Wrench,
    title: "System Maintenance & Support",
    description: "Keep your systems secure, updated and seamlessly running.",
    details: ["24/7 SLA Monitoring", "Bug Fixes & Security Patches", "Performance Tuning", "Backup & Recovery"]
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Save time, reduce manual work, boost productivity.",
    details: ["Workflow Digitization", "API & ERP Integrations", "Automated Billing & Reporting", "CRM Synchronization"]
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Scalable, reliable and secure cloud solutions for your business.",
    details: ["AWS, GCP & Cloudflare Setup", "Containerization & Docker", "High Availability & CDN", "Cost Optimization"]
  },
  {
    icon: BrainCircuit,
    title: "AI & Data Solutions",
    description: "Turn your data into insights and intelligent automation.",
    details: ["Predictive Analytics", "AI Assistant & Chatbots", "Business Intelligence Dashboards", "Data Pipelines"]
  },
  {
    icon: Compass,
    title: "Consulting & Digital Strategy",
    description: "Business analysis, system design and technology advisory.",
    details: ["Architecture Audits", "Digital Transformation Roadmaps", "Technical Feasibility", "Team Mentorship"]
  }
];

const Services = () => {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setQuoteDialogOpen(true);
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-xs font-bold text-[#f37021] uppercase tracking-widest bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solutions for Every Stage of Your Business
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From custom platforms to ongoing support, we provide the right technology and expertise to keep your business running and growing.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => handleServiceClick(service.title)}
                className="group relative bg-white border border-slate-200/90 hover:border-[#f37021]/50 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#f37021] mb-6 group-hover:bg-[#f37021] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#f37021] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Arrow Action */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[#f37021] pt-2">
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </section>
  );
};

export default Services;
