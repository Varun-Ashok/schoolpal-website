import { Upload, Brain, MessageSquare, TrendingUp } from "lucide-react";
import { howItWorksSteps } from "@/mock/data";

const iconMap = {
  Upload,
  Brain,
  MessageSquare,
  TrendingUp,
};

const HowItWorks = () => {
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
            <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
