import React from 'react';
import { Users, UserCheck, ArrowRight } from 'lucide-react';

export const TaskOverview = () => {
  return (
    <section id="tasks" className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Challenge Tasks</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Two interconnected tasks designed to evaluate robustness across different semantic attributes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Task A */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-600 rounded-lg mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Task A</h3>
                <p className="text-blue-600 font-medium">Gender Classification</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Objective</h4>
                <p className="text-gray-600 text-sm">
                  Predict the gender (Male/Female) of a subject from face images captured under visually degraded conditions
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Dataset Structure</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• train/: male/ and female/ subfolders</p>
                  <p>• val/: similarly structured validation data</p>
                </div>
              </div>
              
              <div className="bg-blue-600 text-white rounded-lg p-4">
                <p className="font-medium">Binary Classification</p>
                <p className="text-blue-100 text-sm">Male vs Female identification</p>
              </div>
            </div>
          </div>

          {/* Task B */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-600 rounded-lg mr-4">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Task B</h3>
                <p className="text-green-600 font-medium">Face Recognition</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Objective</h4>
                <p className="text-gray-600 text-sm">
                  Assign each face image to the correct person identity from a known set of individuals
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Dataset Structure</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Each folder = unique individual</p>
                  <p>• distorted/ folder with altered versions</p>
                </div>
              </div>
              
              <div className="bg-green-600 text-white rounded-lg p-4">
                <p className="font-medium">Multi-Class Classification</p>
                <p className="text-green-100 text-sm">Person identity matching</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Flow */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-50 rounded-full px-6 py-3 border">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Task A</span>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Task B</span>
            <span className="text-gray-600 text-sm ml-2">Two-Task Pipeline</span>
          </div>
        </div>
      </div>
    </section>
  );
};
