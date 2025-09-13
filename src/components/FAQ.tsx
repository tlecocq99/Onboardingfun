import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "What is StreamCoin and how does it work?",
      answer: "StreamCoin is a community-driven initiative that connects small streamers and underserved individuals with opportunities on Pump.fun, a cryptocurrency streaming platform. We provide training, support, and resources to help you build a sustainable streaming career and generate revenue through crypto-based community engagement."
    },
    {
      question: "Do I need prior streaming or cryptocurrency experience?",
      answer: "Not at all! We welcome complete beginners. Our comprehensive training program covers everything from basic streaming setup to cryptocurrency fundamentals. We provide step-by-step guidance and ongoing mentorship to ensure your success regardless of your starting point."
    },
    {
      question: "What equipment do I need to get started?",
      answer: "You need minimal equipment to begin: a computer with internet connection, and basic streaming software (which we'll help you set up for free). While a microphone and camera improve quality, we can help you start with what you have and upgrade over time as you generate revenue."
    },
    {
      question: "How much money can I realistically make?",
      answer: "Earnings vary based on effort, consistency, and community engagement. Our successful streamers typically earn $500-$3000+ monthly within their first 6 months. We provide transparent earning reports and case studies to help you understand realistic expectations and growth potential."
    },
    {
      question: "Is this a legitimate opportunity or too good to be true?",
      answer: "StreamCoin is a genuine community initiative built on transparent practices. We don't charge fees, ask for upfront payments, or make unrealistic promises. Our success is measured by our community's achievements, and we provide ongoing support and accountability to ensure mutual success."
    },
    {
      question: "What support do I receive after being accepted?",
      answer: "You get comprehensive support including: 24/7 Discord community access, personal mentorship pairing, weekly training workshops, technical setup assistance, content strategy guidance, and ongoing performance tracking with feedback."
    },
    {
      question: "How does Pump.fun work and is it safe?",
      answer: "Pump.fun is a legitimate cryptocurrency platform that enables community-driven streaming and token creation. We provide thorough education on platform safety, security best practices, and risk management. Our team monitors platform updates and provides ongoing guidance for safe participation."
    },
    {
      question: "What if I'm currently homeless or in a difficult situation?",
      answer: "We specifically support individuals facing challenging circumstances. We can help you access public libraries or community centers for streaming, provide guidance on mobile streaming setups, and connect you with additional resources for stable housing and support services."
    },
    {
      question: "How long does the application process take?",
      answer: "Applications are typically reviewed within 48 hours. Once accepted, you'll receive immediate access to our community and resources, with personalized onboarding completed within one week. We prioritize quick turnaround because we understand the urgency of financial needs."
    },
    {
      question: "Can I do this part-time while working another job?",
      answer: "Absolutely! Many of our successful streamers started part-time. We offer flexible scheduling and can work with your availability. Even 10-15 hours per week can generate meaningful supplemental income, with potential to grow into full-time earnings over time."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Get answers to the most common questions about StreamCoin, Pump.fun, and starting your streaming journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:bg-gray-100 transition-colors">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-purple-600" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 lg:px-8 pb-6">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
              Our community team is always ready to help. Join our Discord or reach out directly 
              for personalized answers to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-800 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors">
                Join Discord Community
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:border-white hover:bg-white/10 transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;