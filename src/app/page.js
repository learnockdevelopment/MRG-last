// App.js
import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GoalSection from "./components/GoalSection";
import VisionSection from "./components/VisionSection";
import CompaniesSection from "./components/CompaniesSection";
import { companiesData } from "./companies/page";
import InitCompaniesLocalStorage from "./components/InitCompaniesLocalStorage";

const App = () => {
  // You can use companiesData here if needed
  companiesData;
  return (
    <div className="bg-green-50 overflow-hidden">
      <InitCompaniesLocalStorage />
      <HeroSection />
      <GoalSection />
      <AboutSection />
      <VisionSection imageType={2} />
      <CompaniesSection />
    </div>
  );
};

export default App;
