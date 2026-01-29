import { Heart } from "lucide-react";
import { Link } from "react-router";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top-half">
        {/* Brand */}
        <div className="footer-info">
          {/* <div className="flex items-center space-x-2 mb-6"> */}
          {/* <div
              aria-hidden
              className="w-8 h-8 bg-white rounded-lg flex items-center justify-center"
            >
              <span className="text-black font-bold text-sm">S</span>
            </div> */}
          <span className="site-name">Schoolpal AI</span>
          {/* </div> */}
          <p style={{ maxWidth: "28rem" }}>
            A non-profit initiative empowering K-12 students with free
            AI-powered offline tutoring. Making quality education accessible to
            every child, everywhere.
          </p>
        </div>

        {/* Quick Links */}
        <section aria-labelledby="footer-quick-links">
          <h3 id="footer-quick-links">Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Landing</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </section>

        {/* Support */}
        <nav aria-labelledby="footer-support-nav">
          <h3 id="footer-support-nav">Support Links</h3>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-half">
        <p>&copy; 2026 Schoolpal AI. All rights reserved.</p>
        <span>
          Made with <Heart aria-label="love" size="1rem" /> for education
        </span>
      </div>
    </footer>
  );
};

export default Footer;
