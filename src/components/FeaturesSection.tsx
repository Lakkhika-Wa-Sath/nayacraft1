
import React from "react";
import { Server, Shield, Users, Zap } from "lucide-react";

const features = [
  {
    icon: <Server size={24} />,
    title: "High Performance",
    description: "Enjoy lag-free gameplay with our optimized server infrastructure. We guarantee 99.9% uptime."
  },
  {
    icon: <Shield size={24} />,
    title: "Anti-Grief Protection",
    description: "Your builds are safe with our advanced protection systems and regular backups."
  },
  {
    icon: <Users size={24} />,
    title: "Active Community",
    description: "Join thousands of friendly players and participate in community events and competitions."
  },
  {
    icon: <Zap size={24} />,
    title: "Custom Plugins",
    description: "Experience unique gameplay with our custom developed plugins and game modes."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose <span className="text-green-400">NayaCraft</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We provide the best Minecraft experience with unique features and a friendly community.
            Here's what makes us different.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="bg-green-900/30 p-3 rounded-lg inline-block mb-4 text-green-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
