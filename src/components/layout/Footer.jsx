import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-10 border-t border-base-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary">Our Store</h2>
          <p className="mt-2 text-sm text-base-content/70">
            Quality products. Fair prices. Fast delivery.
            We bring value to your everyday life.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="btn btn-sm btn-circle btn-ghost">
              <FaFacebook />
            </a>
            <a href="#" className="btn btn-sm btn-circle btn-ghost">
              <FaInstagram />
            </a>
            <a href="#" className="btn btn-sm btn-circle btn-ghost">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="link link-hover" to="/">Home</Link></li>
            <li><Link className="link link-hover" to="/products">Products</Link></li>
            <li><Link className="link link-hover" to="/services">Services</Link></li>
            <li><Link className="link link-hover" to="/blogs">Blogs</Link></li>
            <li><Link className="link link-hover" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="link link-hover" to="#">Return & Refund</Link></li>
            <li><Link className="link link-hover" to="#">Shipping Policy</Link></li>
            <li><Link className="link link-hover" to="#">FAQs</Link></li>
            <li><Link className="link link-hover" to="#">Help Center</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>

          <p className="flex items-center gap-2 text-sm">
            <FaLocationDot className="text-primary" />
            Lagankhel,Lalitpur
          </p>

          <p className="flex items-center gap-2 text-sm mt-2">
            <FaPhone className="text-primary" /> 5423889
          </p>

          <p className="flex items-center gap-2 text-sm mt-2">
            <FaEnvelope className="text-primary" /> kishor@evovle.com
          </p>

          <p className="text-xs mt-3 text-base-content/60">
            Sunday – Friday • 10:00 AM – 6:00 PM
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-base-300 py-4">
        <p className="text-center text-xs md:text-sm text-base-content/70">
          © {new Date().getFullYear()} Our Store — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
