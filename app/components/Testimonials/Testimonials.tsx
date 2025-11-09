import { Star, Quote } from "lucide-react";
import { testimonials } from "@/mock/data";

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

export default Testimonials;
