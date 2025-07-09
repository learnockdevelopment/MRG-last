"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 py-12 lg:py-0">
        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col items-end gap-6 lg:gap-8 z-10">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 text-right font-tajawal leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            مجموعة شركات اقتصادية مصرية
          </h1>
          
          <p 
            className="text-lg md:text-xl lg:text-2xl text-gray-600 text-right font-tajawal leading-relaxed max-w-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            تـأسـسـت "مجـمـوعـة MRG" على يـد رجـل الـمجتمع الأسـتـاذ/ مـحـمـود رمضـان، لتصبح اليوم كـيـانـا اقتصاديـا مصريـا يواكـب تطـورات العصـر ويــخـدم احتياجـات الـمجتمع الـمتغيرة.
          </p>
          
          <div data-aos="fade-up" data-aos-delay="300">
            <DiscoverMoreButton />
          </div>
          
          {/* Stats Section */}
          <div 
            className="flex flex-wrap gap-4 mt-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-green-100 rounded-xl shadow-sm px-6 py-3 flex items-center gap-3 hover:shadow-md transition-shadow">
              <span className="text-3xl font-bold text-blue-900 font-tajawal">15+</span>
              <span className="text-xl text-blue-900 font-tajawal">شركة</span>
            </div>
          </div>
        </div>
        
        {/* Image Content */}
        <div 
          className="lg:w-1/2 relative h-[400px] sm:h-[500px] lg:h-[600px] w-full"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-2xl mx-auto">
              {/* Circular background */}
              <div className="absolute -top-10 left-[100px] w-full h-full max-w-[1000px] bg-white rounded-l-full flex items-center justify-center p-8 lg:p-16 shadow-xl">
                <img 
                  className="w-full h-full object-contain animate-float" 
                  src="/mrgHead.png" 
                  alt="Hero Image" 
                  loading="eager"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                />
              </div>
              
              {/* Decorative elements */}
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"
                data-aos="fade"
                data-aos-delay="500"
              ></div>
              <div 
                className="absolute top-20 -left-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"
                data-aos="fade"
                data-aos-delay="600"
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-blue-50 to-transparent opacity-30"
          data-aos="fade-right"
          data-aos-delay="100"
        ></div>
      </div>
    </section>
  );
};

const DiscoverMoreButton = () => (
  <button className="group flex items-center gap-4 transition-all hover:gap-6">
    <span className="text-2xl font-medium text-green-700 font-tajawal group-hover:text-green-800 transition-colors">
      اكتشف المزيد
    </span>
    <div className="w-14 h-14 p-1.5 bg-green-700 rounded-full flex items-center justify-center transition-all group-hover:bg-green-800 group-hover:scale-110">
      <svg 
        className="w-8 h-8 text-white transform -rotate-45" 
        viewBox="0 0 24 24" 
        fill="none"
      >
        <path 
          d="M5 12H19M19 12L12 5M19 12L12 19" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </button>
);

export default HeroSection;