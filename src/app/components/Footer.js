// components/Footer.js
import React from 'react';

const Footer = () => {
  const importantLinks = [
    "الرئيسية",
    "السيرة الذاتية",
    "النشرة",
    "شركات المجموعة",
    "تواصل معنا"
  ];

  const socialLinks = [
    { name: "Facebook", icon: "https://placehold.co/20x20" },
    { name: "Twitter", icon: "https://placehold.co/20x20" },
    { name: "Instagram", icon: "https://placehold.co/20x20" },
    { name: "LinkedIn", icon: "https://placehold.co/20x20" }
  ];

  const companyDescription = "تـأسـسـت 'مجـمـوعـة MRG' على يـد رجـل الـمجتمع الأسـتـاذ/ مـحـمـود رمضـان، لتصبح اليوم كـيـانـا اقتصاديـا مصريـا يواكـب تطـورات العصـر ويــخـدم احتياجـات الـمجتمع الـمتغيرة.";

  return (
    <footer className="w-full bg-blue-900 text-white py-12 px-4 md:px-8 text-right">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
         

          {/* Important Links */}
          <FooterSection 
            title="روابط هامة" 
            items={importantLinks} 
          />

          {/* Company Description */}
          <FooterSection 
            title="عن الشركة" 
            description={companyDescription}
            className="max-w-md"
          />
           {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-24 h-24 bg-white rounded-[46.50px] flex flex-col justify-center items-center mb-4">
              <img className="w-16 h-14" src="/mrgLogo.png" alt="Footer Logo" />
            </div>
            
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-blue-800 text-center text-sm">
          © {new Date().getFullYear()} جميع الحقوق محفوظة لمجموعة MRG
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, items, description, className = '' }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h3 className="text-xl font-bold font-['Tajawal'] mb-2">
        {title}
      </h3>
      
      {items ? (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <a href="#" className="text-base font-medium hover:text-blue-200 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-base font-medium leading-loose text-right">
          {description}
        </p>
      )}
    </div>
  );
};

export default Footer;