import React from 'react';
import { Target, TrendingUp, BarChart3, Award } from 'lucide-react';

export const EvaluationMetrics = () => {
  return (
    <section id="metrics" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Evaluation Metrics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive evaluation across multiple performance indicators
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Task A Metrics */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-200">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-600 rounded-lg mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Task A Metrics</h3>
                <p className="text-blue-600">Gender Classification</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
                <BarChart3 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Accuracy</p>
                <p className="text-blue-600 text-sm">Overall correctness</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
                <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Precision</p>
                <p className="text-blue-600 text-sm">True positive rate</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
                <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Recall</p>
                <p className="text-blue-600 text-sm">Sensitivity measure</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
                <Award className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">F1-Score</p>
                <p className="text-blue-600 text-sm">Harmonic mean</p>
              </div>
            </div>
          </div>

          {/* Task B Metrics */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-200">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-600 rounded-lg mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Task B Metrics</h3>
                <p className="text-green-600">Face Recognition</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
                <BarChart3 className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Accuracy</p>
                <p className="text-green-600 text-sm">Identity matching</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
                <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Precision</p>
                <p className="text-green-600 text-sm">Match precision</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
                <Target className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Recall</p>
                <p className="text-green-600 text-sm">Recognition rate</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
                <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">F1-Score</p>
                <p className="text-green-600 text-sm">Balanced metric</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-gray-700">
                <strong>Special Evaluation:</strong> Match (label=1) if test image matches any image in the same folder, 
                Non-match (label=0) if it matches a different folder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
