import React from 'react';
import { Heart, Users, Zap, Target } from 'lucide-react';

const Mission: React.FC = () => {
  const impactAreas = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Building",
      description: "Connecting small streamers with supportive communities and providing platforms for growth and collaboration."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Revenue Generation",
      description: "Helping underserved individuals generate sustainable income through streaming and crypto opportunities on Pump.fun."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Social Impact",
      description: "Creating pathways for homeless individuals and marginalized communities to build digital careers and stability."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Skill Development",
      description: "Providing training, resources, and mentorship to help new streamers develop technical and content creation skills."
    }
  ];

  return (
    <section id="mission" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Mission: Creating Opportunities for Everyone
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            StreamCoin bridges the gap between traditional streaming platforms and the emerging crypto economy, 
            specifically focusing on empowering small streamers and underserved communities to build sustainable 
            revenue streams through Pump.fun's innovative platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactAreas.map((area, index) => (
            <div key={index} className="group text-center p-6 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl group-hover:bg-purple-200 transition-colors">
                  {area.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
              Why This Matters
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                  Traditional streaming platforms often favor established creators, making it difficult for newcomers 
                  to gain traction and generate meaningful income. Meanwhile, many individuals in underserved 
                  communities lack access to digital opportunities that could transform their economic situation.
                </p>
                <p className="text-lg text-purple-100 leading-relaxed">
                  StreamCoin leverages the democratized nature of cryptocurrency and Pump.fun's community-driven 
                  approach to level the playing field, providing everyone with equal opportunities to succeed.
                </p>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">85%</div>
                      <div className="text-purple-200 text-sm">of small streamers struggle to monetize</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">40%</div>
                      <div className="text-purple-200 text-sm">lack technical knowledge</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">60%</div>
                      <div className="text-purple-200 text-sm">want crypto opportunities</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">95%</div>
                      <div className="text-purple-200 text-sm">need community support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;