import React from 'react';
import { Brain, Shield, Zap } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Robust Face Recognition
            <span className="block text-blue-600">Under Adverse Conditions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Develop models that maintain consistent performance despite challenging environmental conditions 
            including blur, fog, rain, low-light, and overexposed scenes.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <Brain className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Two-Task Pipeline</h3>
              <p className="text-gray-600 text-sm">Gender classification and face recognition in one integrated challenge</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">5,000+ Images</h3>
              <p className="text-gray-600 text-sm">Comprehensive dataset with real-world visual degradations</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Robust Evaluation</h3>
              <p className="text-gray-600 text-sm">Multiple metrics across diverse challenging conditions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
