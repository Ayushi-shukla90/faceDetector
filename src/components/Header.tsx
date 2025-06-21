import React from 'react';
import { Eye, Users, Target } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FACECOM Challenge</h1>
              <p className="text-sm text-gray-600">Face Recognition in Challenging Environments</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#detector" className="text-gray-700 hover:text-blue-600 transition-colors">Detector</a>
            <a href="#tasks" className="text-gray-700 hover:text-blue-600 transition-colors">Tasks</a>
            <a href="#dataset" className="text-gray-700 hover:text-blue-600 transition-colors">Dataset</a>
            <a href="#metrics" className="text-gray-700 hover:text-blue-600 transition-colors">Metrics</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
