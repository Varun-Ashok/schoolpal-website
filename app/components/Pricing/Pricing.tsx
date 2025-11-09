import { Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/mock/data";

const Pricing = () => {
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

              <button
                className={`w-full py-3 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black border border-black hover:bg-black hover:text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Want to support our mission to democratize education?
          </p>
          <button className="text-black hover:text-gray-700 transition-colors font-medium underline">
            Learn about donations and partnerships
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
