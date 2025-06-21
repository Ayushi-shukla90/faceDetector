import React from 'react';
import { Zap, Sun, Cloud, CloudRain, Moon, Lightbulb } from 'lucide-react';

export const VisualConditions = () => {
  const conditions = [
    {
      icon: Zap,
      name: 'Motion Blur',
      description: 'Images affected by camera or subject movement',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200'
    },
    {
      icon: Sun,
      name: 'Overexposed/Sunny',
      description: 'Bright lighting conditions with potential washout',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-200'
    },
    {
      icon: Cloud,
      name: 'Foggy Conditions',
      description: 'Reduced visibility due to atmospheric conditions',
      color: 'text-gray-600',
      bg: 'bg-gray-50',
      border: 'border-gray-200'
    },
    {
      icon: CloudRain,
      name: 'Rainy Weather',
      description: 'Simulated rain effects on image quality',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200'
    },
    {
      icon: Moon,
      name: 'Low Light',
      description: 'Poor illumination with reduced visibility',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200'
    },
    {
      icon: Lightbulb,
      name: 'Uneven Lighting',
      description: 'Irregular illumination and glare effects',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200'
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visual Conditions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Challenging environmental conditions included in the FACECOM dataset
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {conditions.map((condition, index) => {
            const IconComponent = condition.icon;
            return (
              <div 
                key={index}
                className={`p-6 rounded-xl border ${condition.bg} ${condition.border} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className={`w-6 h-6 ${condition.color} mr-3`} />
                  <h3 className="font-semibold text-gray-900">{condition.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {condition.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
