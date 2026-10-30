import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import ImageProtection from "@/components/ImageProtection";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for in-page anchors
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const elem = document.querySelector(anchor.hash);
        if (elem) {
          e.preventDefault();
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#f37021]/20 selection:text-[#f37021]">
      <ImageProtection />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section (Dark Navy) */}
        <Hero />

        {/* 2. Key Metrics Stats Bar (Light) */}
        <StatsBar />

        {/* 3. About Section (Light) */}
        <About />

        {/* 4. Services Solutions Section (Light) */}
        <Services />

        {/* 5. Why Choose Us Section (Dark Navy) */}
        <WhyUs />

        {/* 6. Portfolio Showcase Section (Light) */}
        <Portfolio />

        {/* 7. Process Step Workflow (Light) */}
        <Process />

        {/* 8. Client Testimonials (Light) */}
        <Testimonials />

        {/* 9. Frequently Asked Questions (Light) */}
        <FAQ />

        {/* 10. Contact / Project Inquiry (Card Split) */}
        <Contact />
      </main>

      {/* Footer (Dark Navy) */}
      <Footer />

      {/* Interactive AI Assistant */}
      <ChatBot />
    </div>
  );
};

export default Index;
