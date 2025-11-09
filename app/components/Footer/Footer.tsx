import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">S</span>
              </div>
              <span className="text-2xl font-light tracking-tight">
                Schoolpal AI
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              A non-profit initiative empowering K-12 students with free
              AI-powered offline tutoring. Making quality education accessible
              to every child, everywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#features")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#how-it-works")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  How it Works
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#pricing")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-medium mb-6 tracking-wide">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Schoolpal AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-300 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>for education</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
