import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f0b15] pt-20 pb-8 px-10 md:px-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-16">
        
        {/* Brand */}
        <div className="max-w-xs">
          <Link to="/" className="text-2xl font-bold flex items-center mb-4">
            <span className="text-[#f83d5a]">Q</span><span className="text-white">uick</span><span className="text-white font-light">Show</span>
          </Link>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="flex gap-4">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 block">
              <img src="/assets/Google Play.c5689d4f9b55e58a8076b39af11d5ab9 1.png" alt="Google Play" className="h-10" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 block">
              <img src="/assets/App Store.537219f079dde0437e2c8e0e3ec2162d 1.png" alt="App Store" className="h-10" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="flex flex-col gap-3">
            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact us</Link></li>
            <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6">Get in touch</h4>
          <ul className="flex flex-col gap-3">
            <li className="text-gray-400 text-sm">
              <a href="tel:+12124567890" className="hover:text-white transition-colors">+1-212-456-7890</a>
            </li>
            <li className="text-gray-400 text-sm hover:text-white transition-colors">
              <a href="mailto:contact@example.com">contact@example.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
        Copyright 2025 © GreatStack. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
