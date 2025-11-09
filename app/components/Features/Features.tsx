import {
  Wifi,
  BookOpen,
  Shield,
  MessageCircle,
  Heart,
  FileText,
} from "lucide-react";
import { features } from "@/mock/data";

const iconMap = {
  Wifi,
  BookOpen,
  Shield,
  MessageCircle,
  Heart,
  FileText,
};

const Features = () => {
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
};

export default Features;
