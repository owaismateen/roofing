import React from "react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Materials from "@/components/Materials";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import WarrantyFinancing from "@/components/WarrantyFinancing";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <Hero />

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. SERVICES */}
      <Services />

      {/* 4. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 5. HOW IT WORKS */}
      <HowItWorks />

      {/* 6. MATERIALS GUIDE */}
      <Materials />

      {/* 7. PROJECT GALLERY */}
      <Gallery />

      {/* 8. REVIEWS */}
      <Reviews />

      {/* 9. WARRANTY AND FINANCING */}
      <WarrantyFinancing />

      {/* 10. SERVICE AREAS */}
      <ServiceAreas />

      {/* 11. FAQ */}
      <FAQ />

      {/* 12. FINAL CTA */}
      <FinalCTA />

      {/* 13. FOOTER */}
      <Footer />
    </>
  );
}
