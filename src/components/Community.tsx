import React from 'react';
import { Users, MessageCircle, Award, Zap, ExternalLink, Twitter, Youtube } from 'lucide-react';

const Community: React.FC = () => {
  const communityFeatures = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "24/7 Discord Support",
      description: "Connect with fellow streamers, get instant help, and share your victories in our active Discord community.",
      link: "#"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Mentorship Program",
      description: "Get paired with successful streamers who provide guidance, feedback, and support throughout your journey.",
      link: "#"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Weekly Workshops",
      description: "Join live training sessions covering streaming techniques, crypto basics, and community building strategies.",
      link: "#"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Events",
      description: "Participate in community challenges, group streams, and networking events to grow your audience.",
      link: "#"
    }
  ];

  const featuredStreamers = [
    {
      name: "StreamerAlex",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300",
      followers: "2.5K",
      category: "Gaming",
      earnings: "$2,100"
    },
    {
      name: "MusicMaria",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      followers: "3.2K",
      category: "Music",
      earnings: "$1,850"
    },
    {
      name: "TechTony",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      followers: "1.8K",
      category: "Tech Talk",
      earnings: "$1,650"
    },
    {
      name: "ArtistAnna",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      followers: "4.1K",
      category: "Digital Art",
      earnings: "$2,300"
    }
  ];

  return (
    <section id="community" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Join a Thriving Community
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Success is better when shared. Connect with like-minded streamers, learn from experts, 
            and build lasting relationships that will fuel your growth.
          </p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-xl mr-6 group-hover:bg-purple-200 transition-colors flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  <button className="flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Streamers */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Community Members
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStreamers.map((streamer, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-purple-50 transition-all duration-300 group">
                <img 
                  src={streamer.avatar} 
                  alt={streamer.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover ring-4 ring-gray-200 group-hover:ring-purple-300 transition-all"
                />
                <h4 className="font-bold text-gray-900 mb-2">{streamer.name}</h4>
                <p className="text-purple-600 font-medium text-sm mb-3">{streamer.category}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Followers:</span>
                    <span className="font-semibold text-gray-900">{streamer.followers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monthly:</span>
                    <span className="font-semibold text-green-600">{streamer.earnings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Connect With Us
          </h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="flex items-center justify-center w-14 h-14 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-300"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center w-14 h-14 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors shadow-lg hover:shadow-blue-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-300"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600 mt-4">
            Join thousands of streamers in our community channels
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;