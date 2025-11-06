import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
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
    <section id="contact" className="py-24 bg-gray-50">
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

              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 py-3"
              >
                <Send className="w-4 h-4 mr-2" />
                Join Our Community
              </button>
              <button></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
