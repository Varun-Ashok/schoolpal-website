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
      </hgroup>
      {/* Subtitle */}
      <p>
        Free AI-powered conversation-based learning for K-12 students. Works
        offline, stays focused on your curriculum, and helps build strong study
        skills for everyone.
      </p>

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
          className="inverted scale-background-on-hover"
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
      <div className="home-section-wrapup">
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
    <section id="features" aria-labelledby="features-heading">
      <hgroup>
        <h2 id="features-heading">Why Choose Schoolpal AI?</h2>
      </hgroup>
      <p>
        Designed specifically for K-12 education with features that matter to
        students, parents, and teachers.
      </p>

      <ul className="features hover-lift">
        {features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <li
              key={feature.id}
              className="tile"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="feat-icon-wrap">
                <IconComponent />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          );
        })}
      </ul>
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
    <section id="how-it-works" aria-labelledby="hiw-heading">
      <hgroup>
        <h2 id="hiw-heading">How It Works</h2>
      </hgroup>
      <p>
        Getting started with Schoolpal AI is simple. Four easy steps to
        transform your learning experience.
      </p>

      <ol className="hiw-steps">
        {howItWorksSteps.map((step, index) => {
          const IconComponent = iconMap[step.icon];
          return (
            <li key={step.id} className="group">
              <div>
                <div className="inverted scale-background-on-hover step-icon-wrap">
                  <IconComponent size="2rem" />
                </div>
                <div className="step-num">{step.id}</div>
                {index < howItWorksSteps.length - 1 && (
                  <div className="step-connect" />
                )}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          );
        })}
      </ol>

      <div className="home-section-wrapup">
        <h3>Ready to See It in Action?</h3>
        <p>
          Experience how Schoolpal AI transforms traditional studying into
          engaging, interactive learning sessions.
        </p>
        <Button className="inverted">Request a Demo</Button>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading">
      <hgroup>
        <h2 id="pricing-heading">Pricing</h2>
        <p>Free for Everyone</p>
      </hgroup>
      <p>
        Education should be accessible to all. That's why Schoolpal AI is
        completely free, forever.
      </p>

      <ul className="pricing-plans">
        {pricingPlans.map((plan, index) => (
          <li
            key={plan.id}
            className={`plan card ${plan.popular ? "popular" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="plan-content">
              <div className="plan-info">
                <h3>{plan.name}</h3>
                <div>
                  <span style={{ fontSize: "2.5rem" }}>{plan.price}</span>
                  <span
                    style={{ color: "var(--text-soft)", marginLeft: "0.5rem" }}
                  >
                    {plan.price === "Free" ? "\u{2022}" : "/"} {plan.period}
                  </span>
                </div>
              </div>

              <ul className="plan-feats">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <Check size="1.25rem" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button className={` ${plan.popular ? "inverted" : ""}`}>
              Get Started
            </Button>
          </li>
        ))}
      </ul>

      <div className="home-section-wrapup">
        <p>Want to support our mission to democratize education?</p>
        <Button>Learn about donations and partnerships</Button>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading">
      <hgroup>
        <h2 id="testimonials-heading">What Students & Teachers Say</h2>
      </hgroup>
      <p>
        Real feedback from students, teachers, and parents who are already using
        Schoolpal AI.
      </p>

      <ul className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <li
            key={testimonial.id}
            className="tile hover-lift"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <figure>
              <Quote />

              <blockquote>
                <p>"{testimonial.content}"</p>

                <div className="test-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="test-star" />
                  ))}
                </div>
              </blockquote>

              <figcaption>
                <p>{testimonial.name}</p>
                <p>{testimonial.role}</p>
                <p>{testimonial.location}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="home-section-wrapup tile">
        <h3>Join Our Mission for Educational Equity</h3>
        <p>
          Be part of the free AI-powered education revolution that's helping
          students achieve their full potential, regardless of their economic
          background.
        </p>
        <ul className="tests-stats">
          <li>🎓 10,000+ Students</li>
          <li>🏫 500+ Schools</li>
          <li>💝 100% Free</li>
        </ul>
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
            <h3>Join Our Mission</h3>

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

              <Button type="submit" className="inverted">
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
