"use client";

import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Curriculum from "./components/curriculum";
import Instructor from "./components/instructor";
import ProductCarousel from "./components/products";
import Pricing from "./components/pricing";
import FAQ from "./components/faq";
import CTA from "./components/cta";
import Footer from "./components/footer";
import Modal from "./components/modal";
import SignUpForm from "./components/signup-form";

export default function CourseLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header onOpenModal={handleOpenModal} />
      <main className="flex-1">
        <Hero onOpenModal={handleOpenModal} />
        <Features />
        <Curriculum />
        <Instructor />
        <ProductCarousel />
        <Pricing onOpenModal={handleOpenModal} />
        <FAQ />
        <CTA onOpenModal={handleOpenModal} />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <SignUpForm onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}