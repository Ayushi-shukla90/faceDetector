import React from 'react';
import { Database, PieChart, Users } from 'lucide-react';

export const DatasetInfo = () => {
  return (
    <section id="dataset" className="py-16 px-6 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">FACECOM Dataset</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Face Attributes in Challenging Environments - purpose-built for evaluating face analysis under real-world degradations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-2xl text-gray-900">5,000+</h3>
            <p className="text-gray-600">Face Images</p>
          </div>
          
          <div className="text-center">
            <div className="p-4 bg-green-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-2xl text-gray-900">2</h3>
            <p className="text-gray-600">Main Tasks</p>
          </div>
          
          <div className="text-center">
            <div className="p-4 bg-purple-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <PieChart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-2xl text-gray-900">6</h3>
            <p className="text-gray-600">Visual Conditions</p>
          </div>
        </div>

        {/* Dataset Splits */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Dataset Splits</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
              <span className="font-medium text-gray-900">Training Set</span>
              <div className="flex items-center space-x-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <span className="font-bold text-blue-600">70%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <span className="font-medium text-gray-900">Validation Set</span>
              <div className="flex items-center space-x-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <span className="font-bold text-green-600">15%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
              <span className="font-medium text-gray-900">Test Set (Hidden)</span>
              <div className="flex items-center space-x-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <span className="font-bold text-purple-600">15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
