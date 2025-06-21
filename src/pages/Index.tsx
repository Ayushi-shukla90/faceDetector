import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TaskOverview } from '@/components/TaskOverview';
import { DatasetInfo } from '@/components/DatasetInfo';
import { EvaluationMetrics } from '@/components/EvaluationMetrics';
import { VisualConditions } from '@/components/VisualConditions';
import { FaceDetector } from '@/components/FaceDetector';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <HeroSection />
      <FaceDetector />
      <TaskOverview />
      <DatasetInfo />
      <VisualConditions />
      <EvaluationMetrics />
    </div>
  );
};

export default Index;
