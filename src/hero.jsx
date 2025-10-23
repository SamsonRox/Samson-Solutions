import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => (
  <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
        <Sparkles className="h-4 w-4 inline mr-2" />
        <span className="text-sm font-medium">Licensed Multi-State Insurance Broker • Premium Services</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Your Complete Life & Business Solution
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        From multi-state health insurance and premium flooring to tech support and digital solutions – experience comprehensive service with honest work and exceptional results.
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfZW_1Y4xm57oVN_EoAyUYeUafz1_tCFanRHpj3FrwuRIUqug/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl transform hover:scale-105"
      >
        📞 Get Your Free Quote Now
      </a>
    </div>
  </section>
);

export default Hero;
