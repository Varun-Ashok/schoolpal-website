import type { Route } from "./+types/home";
import { ArrowRight, BookOpen, Wifi, Shield } from "lucide-react";

import Header from "@/components/Header/Header";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer/Footer";

import "./home.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Schoolpal AI Home Page" },
    { name: "description", content: "Home page for Schoolpal AI" },
  ];
}

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light text-black mb-8 tracking-tight leading-none">
            AI-Powered
            {/* <br /> */}
            <span className="block text-gray-600">Offline Tutor</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Free AI-powered conversation-based learning for K-12 students. Works
            offline, stays focused on your curriculum, and helps build strong
            study skills for everyone.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex items-center space-x-2 text-gray-700">
              <Wifi className="w-5 h-5" />
              <span className="font-normal">Works Offline</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <BookOpen className="w-5 h-5" />
              <span className="font-normal">Curriculum Focused</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Shield className="w-5 h-5" />
              <span className="font-normal">Safe & Controlled</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              // size="lg"
              className=""
              onClick={() =>
                document
                  .querySelector("#contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              // variant="outline"
              // size="lg"
              className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-4 text-lg"
              onClick={() =>
                document
                  .querySelector("#how-it-works")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              See How It Works
            </button>
          </div>

          {/* Free Access Highlight */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-2">
              100% Free for All Students
            </p>
            <div className="text-4xl font-light text-black">
              No Cost<span className="text-lg text-gray-500"> • Ever</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Non-profit initiative to democratize education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
