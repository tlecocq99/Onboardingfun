import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Small Streamer from Austin",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "StreamCoin changed my life. I went from struggling to pay rent to earning $2,000+ monthly through streaming on Pump.fun. The community support is incredible.",
      rating: 5,
      earnings: "$2,400/month"
    },
    {
      name: "James Thompson",
      role: "Former Homeless, Now Full-time Streamer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "I never thought I'd have a stable income, let alone from streaming. StreamCoin provided not just opportunities, but a family. Now I help others get started too.",
      rating: 5,
      earnings: "$3,100/month"
    },
    {
      name: "Sarah Kim",
      role: "Gaming Streamer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The education and mentorship I received was game-changing. Understanding crypto and Pump.fun opened up revenue streams I never knew existed.",
      rating: 5,
      earnings: "$1,800/month"
    },
    {
      name: "Marcus Williams",
      role: "Community Leader",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Starting with zero followers, I now lead a thriving community of 500+ members. StreamCoin's approach to community building really works.",
      rating: 5,
      earnings: "$2,700/month"
    }
  ];

  const stats = [
    { value: "500+", label: "Success Stories" },
    { value: "$150K+", label: "Total Earned" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Community Support" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Real Stories, Real Success
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Discover how StreamCoin has transformed lives and created opportunities for streamers 
            from all backgrounds and circumstances.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-purple-50 transition-all duration-300 group">
              <div className="flex items-start mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                  <p className="text-purple-600 font-medium text-sm mb-2">{testimonial.role}</p>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.earnings}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-purple-200 mb-4 group-hover:text-purple-300 transition-colors" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of streamers who have transformed their lives through StreamCoin. 
              Your journey to financial independence starts here.
            </p>
            <button 
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-white/25 transform hover:-translate-y-1"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;