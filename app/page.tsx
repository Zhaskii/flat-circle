"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import GrowthEngine from "@/components/GrowthEngine";
import RoiCalculator from "@/components/RoiCalculator";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>();
  const [initialNote, setInitialNote] = useState<string | undefined>();

  const openContact = (service?: string, note?: string) => {
    setPreselectedService(service);
    setInitialNote(note);
    setModalOpen(true);
  };

  const closeContact = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenContactModal={() => openContact()} />

      {/* Main Landing Content */}
      <main className="flex-1">
        {/* Hero Section with GSAP Kinetic Elements */}
        <Hero onOpenContactModal={() => openContact()} />

        {/* Infinite Brand Partners Marquee */}
        <Marquee />

        {/* Dummy Digital Marketing Services */}
        <Services onOpenContactModal={(srv) => openContact(srv)} />

        {/* "Work that's worked" Case Studies */}
        <Work />

        {/* 4-Step Growth Flywheel Methodology */}
        <GrowthEngine />

        {/* Interactive Growth & ROI Simulator */}
        <RoiCalculator onOpenContactModal={(note) => openContact(undefined, note)} />

        {/* Client Reviews & 5.0 Star Ratings */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Bottom Direct Inquiry & Contact Form */}
        <ContactSection />
      </main>

      {/* Global Agency Footer */}
      <Footer />

      {/* Interactive Project Inquiry Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={closeContact}
        preselectedService={preselectedService}
        initialNote={initialNote}
      />
    </div>
  );
}
