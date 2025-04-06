
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import ServersSection from "@/components/ServersSection";
import GallerySection from "@/components/GallerySection";
import CommunitySection from "@/components/CommunitySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <ServersSection />
      <GallerySection />
      <CommunitySection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
