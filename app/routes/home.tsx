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

import "./home.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Schoolpal AI" },
    { name: "description", content: "Home page for Schoolpal AI" },
  ];
}

function Hero({ ids }: { ids: Record<string, string> }) {
  return (
    <section id="hero" aria-labelledby="site-name">
      <hgroup>
        {/* Main Headline */}
        <h1 id="site-name" className="title">
          AI-Powered
          {/* <br /> */}
          <span style={{ display: "block", color: "var(--text-soft)" }}>
            Offline Tutor
          </span>
        </h1>

        {/* Subtitle */}
        <p>
          Free AI-powered conversation-based learning for K-12 students. Works
          offline, stays focused on your curriculum, and helps build strong
          study skills for everyone.
        </p>
      </hgroup>

      {/* Key Benefits */}
      <div className="benefits">
        <div>
          <Wifi />
          <span>Works Offline</span>
        </div>
        <div>
          <BookOpen />
          <span>Curriculum Focused</span>
        </div>
        <div>
          <Shield />
          <span>Safe & Controlled</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="cta-buttons">
        <Button
          className="var-inverted scale-background-on-hover"
          onPress={() => {
            const el = document.querySelector(`#${ids["contactId"]}`);
            if (el !== null) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get Started
          <ArrowRight style={{ marginLeft: "0.5rem" }} />
        </Button>
        <Button
          onPress={() => {
            const el = document.querySelector(`#${ids["howItWorksId"]}`);
            if (el !== null) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          See How It Works
        </Button>
      </div>

      {/* Free Access Highlight */}
      <div className="free-access">
        <p>100% Free for All Students</p>
        <div>
          <span style={{ fontSize: "2rem" }}>No Cost</span>
          <span> • Ever</span>
        </div>
        <p>Non-profit initiative to democratize education</p>
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
    <section id="features">
      <hgroup>
        <h2>Why Choose Schoolpal AI?</h2>
        <p>
          Designed specifically for K-12 education with features that matter to
          students, parents, and teachers.
        </p>
      </hgroup>

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
              <h3 className="text-xl font-normal mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
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
    <section id={ids["contactId"]} className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2>Join Our Community</h2>
          <p>
            Be part of the movement to make quality AI education accessible to
            every student, everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="">Join Our Mission</h3>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Schoolpal AI is a community-driven initiative focused on
                democratizing education through free AI tutoring. We believe
                every student deserves access to quality learning tools,
                regardless of their economic background.
              </p>
            </div>

            <div className="mt-12">
              <h4>Perfect for:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Teachers looking to enhance classroom learning</li>
                <li>Parents wanting better study support at home</li>
                <li>Schools seeking free AI education tools</li>
                <li>NGOs working with underprivileged students</li>
                <li>Organizations supporting educational equity</li>
              </ul>
            </div>

            <div className="mt-12">
              <h4>How to Get Involved:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Download and try Schoolpal AI in your classroom</li>
                <li>Share feedback to help us improve</li>
                <li>Spread the word about free AI education</li>
                <li>Partner with us for wider implementation</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3>Get Updates & Resources</h3>

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

              <Button type="submit" className="var-inverted">
                <Send className="w-4 h-4 mr-2" />
                Join Our Community
              </Button>
            </form>
          </div>
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
    <section id="how-it-works" className="">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2>How It Works</h2>
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
                <h3>{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3>Ready to See It in Action?</h3>
            <p className="text-gray-600 mb-6">
              Experience how Schoolpal AI transforms traditional studying into
              engaging, interactive learning sessions.
            </p>
            <Button className="var-inverted">Request a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2>Free for Everyone</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Education should be accessible to all. That's why Schoolpal AI is
            completely free, forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`plan bg-white rounded-lg p-8 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
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
                <h3>{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-light">{plan.price}</span>
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
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className={` ${plan.popular ? "var-inverted" : ""}`}>
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Want to support our mission to democratize education?
          </p>
          <Button className="">Learn about donations and partnerships</Button>
        </div>
      </div>
    </section>
  );
}

const Testimonials = () => {
  return (
    <section id="testimonials" className="">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2>What Students & Teachers Say</h2>
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
                <p>{testimonial.name}</p>
                <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3>Join Our Mission for Educational Equity</h3>
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
    <main className="main-home">
      <Hero ids={ids} />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Contact ids={ids} />
    </main>
  );
}
