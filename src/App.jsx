import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Star, Clock, Shield, Users, Home, Droplets, Zap, Scissors, BarChart3, Heart, Globe, Users2, Sparkles, Laptop, Video, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Health Insurance Solutions",
      description: "As a licensed and insured broker in multiple states, I provide personalized health insurance plans tailored to your needs and budget with expert guidance.",
      icon: Heart,
      gradient: "from-cyan-500 to-blue-600",
      isPremium: true,
      benefits: ["Multi-state licensed", "Personalized plans", "Expert guidance"]
    },
    {
      title: "Flooring Installation",
      description: "Premium installation of hardwood, carpet, tile, and laminate flooring with meticulous attention to detail and quality craftsmanship.",
      icon: Home,
      gradient: "from-indigo-500 to-purple-600",
      isPremium: true,
      benefits: ["Premium materials", "Expert installation", "Lifetime quality"]
    },
    {
      title: "Home Tech Setup & Support",
      description: "Complete computer repair, tech troubleshooting, website creation and design, smart home or business automation, and specialized remote support for elderly clients.",
      icon: Laptop,
      gradient: "from-teal-500 to-emerald-600",
      benefits: ["Fast response", "Remote support", "Senior-friendly"]
    },
    {
      title: "Digital Presence & Automation",
      description: "Professional website design and creation, smart automation systems, and ongoing digital management to elevate your online presence.",
      icon: Globe,
      gradient: "from-violet-500 to-purple-600",
      benefits: ["Custom design", "SEO optimized", "Automation tools"]
    },
    {
      title: "Training Content Creation",
      description: "Professional video and digital content creation for training, education, and business development with engaging, high-quality production.",
      icon: Video,
      gradient: "from-orange-500 to-red-600",
      benefits: ["Professional quality", "Engaging content", "Quick turnaround"]
    },
    {
      title: "Water Filtration & Plumbing",
      description: "Clean water solutions and reliable plumbing installations including faucets, toilets, and showerheads.",
      icon: Droplets,
      gradient: "from-blue-500 to-cyan-600",
      benefits: ["Clean water", "Quality parts", "Warranty included"]
    },
    {
      title: "Pressure Washing",
      description: "Restore your home's exterior with professional pressure washing for driveways, siding, and patios.",
      icon: Zap,
      gradient: "from-red-500 to-pink-600",
      benefits: ["Deep cleaning", "Surface safe", "Fast results"]
    },
    {
      title: "Sales Process Consulting",
      description: "Expert guidance to optimize your sales processes and improve business performance.",
      icon: BarChart3,
      gradient: "from-rose-500 to-pink-600",
      benefits: ["Proven strategies", "Data-driven", "ROI focused"]
    },
    {
      title: "Professional Barber Services",
      description: "Expert hair and beard cutting, styling, and grooming services for the modern man.",
      icon: Scissors,
      gradient: "from-amber-500 to-orange-600",
      benefits: ["Expert cuts", "Modern styles", "Relaxing experience"]
    },
    {
      title: "Relationship Coaching",
      description: "Professional coaching to strengthen relationships, improve communication, and build lasting connections.",
      icon: Users2,
      gradient: "from-blue-600 to-indigo-700",
      benefits: ["Private sessions", "Proven methods", "Lasting results"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      service: "Health Insurance",
      text: "Samson found me the perfect health insurance plan that saved me hundreds per month. His expertise as a licensed broker is invaluable!",
      rating: 5
    },
    {
      name: "Robert Chen",
      service: "Home Tech Setup",
      text: "Fixed my computer and set up remote support for my elderly parents. Samson's patience and technical skills are exceptional!",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      service: "Flooring Installation",
      text: "Beautiful hardwood floors installed perfectly. Samson's attention to detail and premium craftsmanship exceeded our expectations!",
      rating: 5
    },
    {
      name: "TechStart Academy",
      service: "Training Content Creation",
      text: "Our training videos look professional and engaging. Samson's content creation skills transformed our educational materials!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What areas do you service?",
      answer: "I serve the Greater Lehigh Valley area for all home and local services. For health insurance, I'm licensed in multiple states and can serve clients nationwide."
    },
    {
      question: "Do you supply materials?",
      answer: "Yes! We can source high-quality materials at competitive prices, or work with materials you provide."
    },
    {
      question: "How fast can I get a quote?",
      answer: "We typically respond within 24 hours and can often provide same-day estimates for most services."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. I'm a licensed and insured health insurance broker in multiple states, and all our services are fully covered for your peace of mind."
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes! Health insurance, relationship coaching, digital services, and tech support can all be done virtually or in-person."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "10+", label: "Services Offered" },
    { number: "5★", label: "Average Rating" },
    { number: "24hr", label: "Response Time" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center mr-3">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">Samson Solutions</h1>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Services', 'About', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZW_1Y4xm57oVN_EoAyUYeUafz1_tCFanRHpj3FrwuRIUqug/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
              >
                Get Free Quote
              </a>
            </div>

            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              {['Services', 'About', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZW_1Y4xm57oVN_EoAyUYeUafz1_tCFanRHpj3FrwuRIUqug/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-lg font-bold text-center"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Licensed Multi-State Insurance Broker • Premium Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Complete Life & Business Solution
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              From multi-state health insurance and premium flooring to tech support and digital solutions – 
              experience comprehensive service with honest work and exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZW_1Y4xm57oVN_EoAyUYeUafz1_tCFanRHpj3FrwuRIUqug/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105 inline-flex items-center justify-center group"
              >
                Get Your Free Quote Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <p className="text-blue-200 text-sm">One form for all services – tell us what you need!</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-1 mb-4 text-sm font-semibold">
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium and standard services designed to meet all your personal and business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 ${service.isPremium ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.isPremium && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg">
                      ⭐ PREMIUM
                    </div>
                  )}
                  
                  <div className={`relative h-32 bg-gradient-to-br ${service.gradient} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <IconComponent className="h-16 w-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-5">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfZW_1Y4xm57oVN_EoAyUYeUafz1_tCFanRHpj3FrwuRIUqug/viewform?usp=header"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group/link"
                    >
                      Get Started
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-1 mb-4 text-sm font-semibold">
                ABOUT US
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Samson – Your Multi-Talented Solution Provider
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As a licensed health insurance broker in multiple states with expertise spanning premium flooring installation, 
                comprehensive tech support, digital solutions, and business consulting, I bring a unique combination of skills 
                to solve your diverse needs under one trusted roof.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                My premium services – health insurance (multi-state licensed) and flooring installation – represent my 
                deepest expertise and commitment to exceptional quality. But every service I offer receives the same 
                dedication to honesty, reliability, and customer satisfaction.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Star, text: "5-Star Rated" },
                  { icon: Clock, text: "24hr Response" }
                ].map((value, index) => {
                  const ValueIcon = value.icon;
                  return (
                    <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="p-3 bg-blue-100 rounded-full mb-3">
                        <ValueIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="font-semibold text-gray-900">{value.text}</span>
                    </div>
                  );
                })}
              </div>
              
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZW_1Y4xm57oVN_EoAyUYeUafz1_tCFanRHpj3FrwuRIUqug/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105"
              >
                Work With Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="h-20 w-20 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Samson</h3>
                  <p className="text-blue-600 font-semibold mb-4">Licensed Multi-State Insurance Broker</p>
                  <p className="text-gray-600">Serving the Greater Lehigh Valley with comprehensive solutions for all your needs</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-1 mb-4 text-sm font-semibold">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transformative Results Across All Services
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from clients who experienced the Samson Solutions difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-1 mb-4 text-sm font-semibold">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-8">{faq.question}</h3>
                  <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              One simple form connects you to all our services – from multi-state health insurance to home improvements and everything in between
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Phone, title: "Phone", info: "(484) 240-9873" },
              { icon: Mail, title: "Email", info: "hello@samsonsolutions.com" },
              { icon: MapPin, title: "Service Area", info: "Greater Lehigh Valley • Multi-State Insurance" }
            ].map((contact, index) => {
              const ContactIcon = contact.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                  <ContactIcon className="h-10 w-10 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                  <p className="text-blue-100">{contact.info}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZW_1Y4xm57oVN_EoAyUYeUafz1_tCFanRHpj3FrwuRIUqug/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105"
            >
              Get Your Free Quote Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
            <p className="text-blue-200 mt-6">Same form for all services – just tell us what you need!</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center mr-3">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Samson Solutions</h3>
              </div>
              <p className="text-gray-400">
                Your trusted partner for comprehensive life and business solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Services', 'About', 'Testimonials', 'FAQ', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>(484) 240-9873</p>
                <p>hello@samsonsolutions.com</p>
                <p>Greater Lehigh Valley, PA</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Samson Solutions. All rights reserved. Licensed Multi-State Health Insurance Broker. Serving Greater Lehigh Valley with premium services.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;