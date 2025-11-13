import type { Route } from "./+types/home";
import {
  useId,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  ArrowRight,
  BookOpen,
  Wifi,
  Shield,
  Send,
  MessageCircle,
  Heart,
  FileText,
  Upload,
  Brain,
  MessageSquare,
  TrendingUp,
  Check,
  Star,
  Quote,
} from "lucide-react";
import { Button } from "react-aria-components";

import {
  features,
  howItWorksSteps,
  pricingPlans,
  testimonials,
} from "@/mock/data";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./home.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Schoolpal AI Home Page" },
    { name: "description", content: "Home page for Schoolpal AI" },
  ];
}

function Hero({ ids }: { ids: Record<string, string> }) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
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
            <Button
              // size="lg"
              className="var-inverted grow"
              onPress={() => {
                const el = document.querySelector(`#${ids["contactId"]}`);
                if (el !== null) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              // variant="outline"
              // size="lg"
              // className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-4 text-lg"
              className=""
              onPress={() => {
                const el = document.querySelector(`#${ids["howItWorksId"]}`);
                if (el !== null) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See How It Works
            </Button>
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
}

function Contact({ ids }: { ids: Record<string, string> }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mock form submission - will be replaced with actual API call
    console.log("Form submitted:", formData);
    alert(
      "Thank you for joining our mission! We'll keep you updated on Schoolpal AI's progress.",
    );
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id={ids["contactId"]} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Be part of the movement to make quality AI education accessible to
            every student, everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-light text-black mb-8">
              Join Our Mission
            </h3>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Schoolpal AI is a community-driven initiative focused on
                democratizing education through free AI tutoring. We believe
                every student deserves access to quality learning tools,
                regardless of their economic background.
              </p>
            </div>

            <div className="mt-12">
              <h4 className="font-medium text-black mb-4">Perfect for:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Teachers looking to enhance classroom learning</li>
                <li>• Parents wanting better study support at home</li>
                <li>• Schools seeking free AI education tools</li>
                <li>• NGOs working with underprivileged students</li>
                <li>• Organizations supporting educational equity</li>
              </ul>
            </div>

            <div className="mt-12">
              <h4 className="font-medium text-black mb-4">
                How to Get Involved:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Download and try Schoolpal AI in your classroom</li>
                <li>• Share feedback to help us improve</li>
                <li>• Spread the word about free AI education</li>
                <li>• Partner with us for wider implementation</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-light text-black mb-6">
              Get Updates & Resources
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="School, NGO, or Organization"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help? *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full"
                  placeholder="Tell us about your interest in Schoolpal AI, implementation needs, or partnership opportunities..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 py-3"
              >
                <Send className="w-4 h-4 mr-2" />
                Join Our Community
              </Button>
              <Button></Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const iconMap = useMemo(
    () => ({
      Wifi,
      BookOpen,
      Shield,
      MessageCircle,
      Heart,
      FileText,
    }),
    [],
  );

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            Why Choose Schoolpal AI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Designed specifically for K-12 education with features that matter
            to students, parents, and teachers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="bg-white p-8 rounded-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-normal text-black mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const iconMap = useMemo(
    () => ({
      Upload,
      Brain,
      MessageSquare,
      TrendingUp,
    }),
    [],
  );

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Getting started with Schoolpal AI is simple. Four easy steps to
            transform your learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon];
            return (
              <div key={step.id} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                    {step.id}
                  </div>
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-normal text-black mb-4 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-light text-black mb-4">
              Ready to See It in Action?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience how Schoolpal AI transforms traditional studying into
              engaging, interactive learning sessions.
            </p>
            <Button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            Free for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Education should be accessible to all. That's why Schoolpal AI is
            completely free, forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg p-8 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-black"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-normal text-black mb-4 tracking-wide">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-light text-black">
                    {plan.price}
                  </span>
                  {plan.price !== "Free" && (
                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                  )}
                  {plan.price === "Free" && (
                    <span className="text-gray-500 ml-2">• {plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black border border-black hover:bg-black hover:text-white"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Want to support our mission to democratize education?
          </p>
          <Button className="text-black hover:text-gray-700 transition-colors font-medium underline">
            Learn about donations and partnerships
          </Button>
        </div>
      </div>
    </section>
  );
}

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            What Students & Teachers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Real feedback from students, teachers, and parents who are already
            using Schoolpal AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-gray-300 mb-4" />

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium text-black mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-light text-black mb-4">
              Join Our Mission for Educational Equity
            </h3>
            <p className="text-gray-600 mb-6">
              Be part of the free AI-powered education revolution that's helping
              students achieve their full potential, regardless of their
              economic background.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span>🎓 10,000+ Students</span>
              <span>🏫 500+ Schools</span>
              <span>💝 100% Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const contactId = useId();
  const howItWorksId = useId();

  const ids = useMemo(
    () => ({
      contactId,
      howItWorksId,
    }),
    [contactId, howItWorksId],
  );

  return (
    <>
      <Header />
      <Hero ids={ids} />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Contact ids={ids} />
      <Footer />
    </>
  );
}
