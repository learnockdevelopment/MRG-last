// App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GoalSection from './components/GoalSection';
import VisionSection from './components/VisionSection';
import CompaniesSection from './components/CompaniesSection';

const App = () => {
  return (
    <div className="bg-green-50 overflow-hidden">
      <HeroSection />
      <GoalSection />
      <AboutSection />
      <VisionSection   imageType={2} />
      <CompaniesSection />
    </div>
  );
};

export default App;