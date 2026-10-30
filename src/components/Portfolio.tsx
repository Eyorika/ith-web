import { useState } from 'react';
import { ArrowRight, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

const featuredProjects = [
  {
    id: "ith-dashboard",
    title: "ITH Management Dashboard",
    category: "Enterprise System",
    description: "Enterprise system to manage systems, clients and operations.",
    image: "/ith-imgs/gugu-connect-dashboard.png",
    fallbackImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Web App", "Dashboard", "React"],
    details: "A comprehensive enterprise operations platform designed for automated client management, analytics ingestion, billing workflows, and role-based access control."
  },
  {
    id: "beta-gas",
    title: "Beta-gas - Rental Platform",
    category: "SaaS Platform",
    description: "A modern car & machine rental platform built for swift and ease payments.",
    image: "/ith-imgs/mandela education academy website.png",
    fallbackImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    tags: ["Web App", "SaaS", "Supabase"],
    details: "High-performance booking, fleet telemetry, automated lease contracts, and real-time payment gateway integration built for equipment and vehicle fleet owners."
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking Platform (Concept)",
    category: "Reservation System",
    description: "Omnichannel reservation system for hotels and resorts.",
    image: "/ith-imgs/furniture showroom web.png",
    fallbackImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    tags: ["Web App", "UI/UX", "Strapi"],
    details: "An elegant, lightning-fast guest reservation engine featuring real-time room availability, calendar booking synchronization, multi-currency support, and guest concierge portal."
  }
];

const allProjects = [
  ...featuredProjects,
  {
    id: "ith-construction",
    title: "ITH Construction ERP System",
    category: "Enterprise ERP",
    description: "Comprehensive resource planning, materials tracking, and site management for contractors.",
    image: "/ith-imgs/ITH construction ERP System new and ours.png",
    tags: ["ERP", "React", "Node.js"],
    details: "Manages heavy equipment tracking, daily labor reporting, vendor invoicing, and project phase costing."
  },
  {
    id: "gym-erp",
    title: "ETH Fitness & Gym Management",
    category: "Management Software",
    description: "Modern fitness facility management system with biometric attendance and subscription billing.",
    image: "/ith-imgs/d8d5615e-597b-45b9-bad8-b436f476e0cd.png",
    tags: ["Fitness", "SaaS", "TailwindCSS"],
    details: "Membership management, automated SMS notifications, POS billing, and trainer scheduling."
  },
  {
    id: "mandela-academy",
    title: "Mandela Education Academy",
    category: "Educational Portal",
    description: "Modern academic web platform for student admissions, parent notices, and digital learning.",
    image: "/ith-imgs/mandela education academy website.png",
    tags: ["Education", "Next.js", "CMS"],
    details: "Interactive school portal with student grade reporting, news feed, and secure tuition processing."
  },
  {
    id: "furniture-showroom",
    title: "Modern Furniture Showroom",
    category: "E-Commerce",
    description: "High-end catalog showcase and quote generation system for interior furnishings.",
    image: "/ith-imgs/furniture showroom web.png",
    tags: ["Showroom", "Catalog", "React"],
    details: "Interactive 3D view simulations, custom furniture sizing calculators, and direct WhatsApp sales handoff."
  }
];

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null);

  const openProjectDetail = (proj: typeof featuredProjects[0]) => {
    setSelectedProject(proj);
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#fafbfc] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header with "View All Projects" on the right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-block">
              <span className="text-xs font-bold text-[#f37021] uppercase tracking-widest bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                OUR PORTFOLIO
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Real Projects. <span className="text-[#f37021]">Real Results.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg">
              A selection of systems we've built and supported for our clients.
            </p>
          </div>

          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#f37021] hover:text-[#e06214] transition-colors py-2 px-1 border-b border-orange-200 hover:border-[#f37021] group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectDetail(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      if (project.fallbackImage) {
                        e.currentTarget.src = project.fallbackImage;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#f37021] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="px-6 pb-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-[#f37021] pt-4">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Single Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <div className="inline-block mb-1">
                <span className="text-xs font-bold text-[#f37021] bg-orange-50 px-2.5 py-0.5 rounded">
                  {selectedProject.category}
                </span>
              </div>
              <DialogTitle className="text-2xl font-bold text-slate-900">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-slate-600">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 pt-2">
              <div className="rounded-xl overflow-hidden aspect-video bg-slate-900 border border-slate-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (selectedProject.fallbackImage) {
                      e.currentTarget.src = selectedProject.fallbackImage;
                    }
                  }}
                />
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedProject.details}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-[#f37021] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* View All Projects Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-900">
              All Client Systems & Platforms
            </DialogTitle>
            <DialogDescription className="text-slate-600">
              Browse our complete catalog of enterprise web applications and tools delivered in Ethiopia and internationally.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {allProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-4 rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-slate-800 mb-3">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/ith-imgs/gugu-connect-dashboard.png";
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-[#f37021] uppercase tracking-wider block mb-1">
                    {proj.category}
                  </span>
                  <h4 className="font-bold text-slate-900 text-base mb-1">{proj.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{proj.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
