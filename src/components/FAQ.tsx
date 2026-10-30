import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from 'lucide-react';

const leftFaqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with startups, growing SMEs, and established enterprises across retail, logistics, healthcare, education, construction, and hospitality both in Ethiopia and internationally."
  },
  {
    q: "How do you handle project pricing?",
    a: "We offer transparent milestone-based fixed pricing for custom developments, as well as monthly retainer subscriptions for ongoing engineering support, maintenance, and DevOps."
  },
  {
    q: "What is your typical project timeline?",
    a: "Depending on system scope, typical web applications take between 4 to 8 weeks, while complex multi-tenant ERP or SaaS systems take 2 to 4 months with continuous sprint releases."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes! Every platform we deploy includes warranty support, uptime monitoring, security patching, and dedicated SLA maintenance packages to ensure zero downtime."
  },
  {
    q: "Can you integrate with third-party services?",
    a: "Absolutely. We routinely integrate local and international payment gateways (Telebirr, Chapa, CBE Birr, Stripe), CRM tools, SMS gateways, ERPs, and cloud storage providers."
  }
];

const rightFaqs = [
  {
    q: "What tech stack/technologies do you use?",
    a: "Our core stack includes React, Next.js, TypeScript, TailwindCSS, Node.js, Python, PostgreSQL, Supabase, Redis, and cloud infrastructure on AWS, Google Cloud, and Cloudflare."
  },
  {
    q: "How do you ensure data security?",
    a: "We implement industry-standard encryption (AES-256 at rest, TLS 1.3 in transit), strict Role-Based Access Controls (RBAC), automated vulnerability scanning, and daily backups."
  },
  {
    q: "Can you upgrade our existing systems?",
    a: "Yes, we specialize in modernizing legacy architectures, migrating databases to the cloud, redesigning user interfaces, and rebuilding slow monolithic tools into high-speed web apps."
  },
  {
    q: "What is the first step to get started?",
    a: "Simply request a free consultation through our form. We schedule a 30-minute discovery session to understand your business objectives, followed by a detailed roadmap and estimate."
  },
  {
    q: "Do you work with international clients?",
    a: "Yes! While proud of our Ethiopian roots in Addis Ababa, we collaborate with partners and diaspora founders across North America, Europe, the Middle East, and East Africa."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-xs font-bold text-[#f37021] uppercase tracking-widest bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-[#f37021]">Questions</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Common questions about our services, process, and ongoing support.
          </p>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* Left Column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {leftFaqs.map((faq, idx) => (
                <AccordionItem
                  key={`left-${idx}`}
                  value={`left-${idx}`}
                  className="border border-slate-200/90 rounded-xl px-5 bg-white shadow-sm hover:border-orange-200 transition-colors"
                >
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-[#f37021] text-base py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-4 pt-1">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {rightFaqs.map((faq, idx) => (
                <AccordionItem
                  key={`right-${idx}`}
                  value={`right-${idx}`}
                  className="border border-slate-200/90 rounded-xl px-5 bg-white shadow-sm hover:border-orange-200 transition-colors"
                >
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-[#f37021] text-base py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-4 pt-1">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
