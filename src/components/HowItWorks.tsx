import React from 'react';
import { UserPlus, BookOpen, Podcast as Broadcast, DollarSign, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Apply & Get Approved",
      description: "Submit your application with basic information about your streaming goals and current situation. Our team reviews every application personally.",
      features: ["Quick 5-minute application", "Personal review process", "Support for all backgrounds"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learn & Train",
      description: "Access our comprehensive training materials covering streaming basics, crypto fundamentals, and Pump.fun platform specifics.",
      features: ["Video tutorials", "Written guides", "Live Q&A sessions"]
    },
    {
      icon: <Broadcast className="w-8 h-8" />,
      title: "Start Streaming",
      description: "Begin your streaming journey on Pump.fun with our support. Connect with our community and start building your audience.",
      features: ["Technical setup help", "Community mentorship", "Content strategy guidance"]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Earn & Grow",
      description: "Generate revenue through streaming, community engagement, and crypto opportunities. Track your progress and scale your impact.",
      features: ["Multiple revenue streams", "Growth analytics", "Community rewards"]
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            How It Works: Your Journey to Success
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            We've simplified the process of becoming a successful streamer on Pump.fun. 
            Follow these four steps to transform your passion into profit.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-xl mr-4 group-hover:bg-purple-200 transition-colors">
                      {step.icon}
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-purple-600 mr-3">0{index + 1}</span>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-purple-300" />
                  </div>
                )}
                {index < steps.length - 1 && index % 2 === 1 && (
                  <div className="hidden lg:block absolute -left-6 top-1/2 transform -translate-y-1/2 rotate-180">
                    <ArrowRight className="w-8 h-8 text-purple-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              What You Need to Get Started
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Basic Equipment</h4>
                <p className="text-gray-600 text-sm">Computer, internet connection, and basic streaming setup (we'll help you optimize)</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Passion & Commitment</h4>
                <p className="text-gray-600 text-sm">Willingness to learn, grow, and engage with the community consistently</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Open Mind</h4>
                <p className="text-gray-600 text-sm">Curiosity about cryptocurrency and readiness to explore new opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;