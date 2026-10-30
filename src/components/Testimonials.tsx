import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ITH helped us build a reliable platform that made our operations smoother and more efficient. Their team is professional, responsive, and truly understands business needs.",
    author: "Team, ADDIS FLOW",
    role: "Operations & Logistics Partner",
    rating: 5,
    tag: "Enterprise System"
  },
  {
    quote: "From our first consultation to final deployment, Inspire Tech Hub delivered beyond expectations. The system has drastically reduced administrative overhead and improved parent satisfaction.",
    author: "Administration, Mandela Education Academy",
    role: "Academic Leadership",
    rating: 5,
    tag: "Education Portal"
  },
  {
    quote: "Finding an engineering team in Ethiopia that adheres to modern engineering standards, security practices, and clean UI architecture is rare. ITH is that partner.",
    author: "Product Lead, GUGU Connect",
    role: "SaaS Ecosystem",
    rating: 5,
    tag: "Cloud Platform"
  },
  {
    quote: "Their business-first approach transformed how we rent and track our machinery. Uptime has been solid, and payments are seamless.",
    author: "Operations Director, Beta-gas",
    role: "Equipment Fleet Management",
    rating: 5,
    tag: "Machinery SaaS"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#fafbfc] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-xs font-bold text-[#f37021] uppercase tracking-widest bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              TESTIMONIALS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our <span className="text-[#f37021]">Clients Say</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We're proud to work with ambitious businesses and organizations across Ethiopia and globally.
          </p>
        </div>

        {/* Large Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl shadow-slate-200/40">
            
            {/* Top decorative quotation mark */}
            <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#f37021] mb-8 shadow-sm">
              <Quote className="w-7 h-7" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote Body */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-800 leading-relaxed mb-8">
              "{current.quote}"
            </blockquote>

            {/* Author and Controls Row */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900">
                  {current.author}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  {current.role}
                </div>
              </div>

              {/* Prev / Next Buttons & Dots */}
              <div className="flex items-center gap-4">
                {/* Dots */}
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentIndex ? 'w-6 bg-[#f37021]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow Nav Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

