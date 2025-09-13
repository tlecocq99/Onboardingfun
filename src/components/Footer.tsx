import React from 'react';
import { TrendingUp, Mail, MessageCircle, Twitter, Youtube, Shield, FileText, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/onboarding(coin).avif" 
                alt="StreamCoin Logo" 
                className="w-10 h-10 rounded-full"
              />
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">StreamCoin</span>
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering streamers and building communities through cryptocurrency opportunities on Pump.fun. 
              Creating pathways to financial independence for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Our Mission
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Community
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Apply Now
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Streaming Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Crypto Basics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Pump.fun Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Community Events
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">support@streamcoin.community</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">24/7 Discord Support</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <Heart className="w-4 h-4 text-red-400 mr-2" />
                Emergency Support
              </h4>
              <p className="text-sm text-gray-300">
                If you're experiencing homelessness or urgent financial hardship, 
                reach out immediately for priority assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-300">
              <p>&copy; {currentYear} StreamCoin Community. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a href="#" className="flex items-center hover:text-purple-400 transition-colors">
                  <FileText className="w-4 h-4 mr-1" />
                  Privacy Policy
                </a>
                <a href="#" className="flex items-center hover:text-purple-400 transition-colors">
                  <FileText className="w-4 h-4 mr-1" />
                  Terms of Service
                </a>
                <a href="#" className="flex items-center hover:text-purple-400 transition-colors">
                  <Shield className="w-4 h-4 mr-1" />
                  Security
                </a>
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>Built with ❤️ for the streaming community</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>Disclaimer:</strong> Cryptocurrency investments involve risk. Past performance does not guarantee future results. 
            StreamCoin provides educational resources and community support but does not provide financial advice. 
            Always do your own research and consider your financial situation before participating in any cryptocurrency activities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;