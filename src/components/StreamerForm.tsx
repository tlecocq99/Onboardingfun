import React, { useState } from 'react';
import { Send, User, Mail, Phone, Globe, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  currentSituation: string;
  streamingExperience: string;
  goals: string;
  availability: string;
  equipment: string;
  motivation: string;
}

const StreamerForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    currentSituation: '',
    streamingExperience: '',
    goals: '',
    availability: '',
    equipment: '',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="apply" className="py-16 lg:py-24 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-2xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for applying to join StreamCoin! Our team will review your application and get back to you within 48 hours.
              </p>
              <p className="text-gray-600 mb-8">
                In the meantime, join our Discord community to connect with other streamers and get early access to resources.
              </p>
              <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Join Our Discord
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-16 lg:py-24 bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Start Your Streaming Journey
            </h2>
            <p className="text-lg lg:text-xl text-purple-100 leading-relaxed max-w-2xl mx-auto">
              Ready to transform your life through streaming? Fill out our application form and take the first step 
              towards financial independence and community building.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <form onSubmit={handleSubmit} className="p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <User className="w-5 h-5 mr-2 text-purple-600" />
                    Personal Information
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Situation *</label>
                    <select
                      name="currentSituation"
                      required
                      value={formData.currentSituation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select your situation</option>
                      <option value="student">Student</option>
                      <option value="employed">Employed (looking for extra income)</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="homeless">Experiencing homelessness</option>
                      <option value="underemployed">Underemployed</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Streaming Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-purple-600" />
                    Streaming Background
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Streaming Experience *</label>
                    <select
                      name="streamingExperience"
                      required
                      value={formData.streamingExperience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select your experience</option>
                      <option value="none">Complete beginner</option>
                      <option value="some">Some experience (less than 6 months)</option>
                      <option value="moderate">Moderate experience (6 months - 2 years)</option>
                      <option value="experienced">Experienced (2+ years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Available Equipment</label>
                    <textarea
                      name="equipment"
                      value={formData.equipment}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="Describe your current setup (computer, microphone, camera, etc.)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Weekly Availability *</label>
                    <select
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select your availability</option>
                      <option value="1-10">1-10 hours per week</option>
                      <option value="10-20">10-20 hours per week</option>
                      <option value="20-30">20-30 hours per week</option>
                      <option value="30+">30+ hours per week</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Goals and Motivation */}
              <div className="space-y-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-purple-600" />
                  Tell Us More
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Goals *</label>
                  <textarea
                    name="goals"
                    required
                    value={formData.goals}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="What do you hope to achieve through streaming? What are your financial and personal goals?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Why StreamCoin? *</label>
                  <textarea
                    name="motivation"
                    required
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="What motivates you to join our community? How do you think StreamCoin can help you succeed?"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-5 h-5 ml-3" />
                    </>
                  )}
                </button>
                <p className="text-gray-600 mt-4 text-sm">
                  We review all applications personally and respond within 48 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamerForm;