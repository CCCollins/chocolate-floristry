"use client";

import Header from "./components/header"
import Hero from "./components/hero"
import Features from "./components/features"
import Curriculum from "./components/curriculum"
import Instructor from "./components/instructor"
import ProductCarousel from "./components/products"
import Pricing from "./components/pricing"
import FAQ from "./components/faq"
import CTA from "./components/cta"
import Footer from "./components/footer"

export default function CourseLandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Curriculum />
        <Instructor />
        <ProductCarousel />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

