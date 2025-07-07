import React from 'react';

const CompaniesSection = () => {
  const companies = [
    { 
      name: "طفرة للنشر و التوزيع", 
      image: "/mrg4.png",
      description: "تفاصيل",
      width: "w-full lg:w-[522px]",
      position: "lg:left-[416px]",
      imageSize: "w-full lg:w-[752px] h-full lg:h-[564px] lg:left-[-230px]",
      mainCard: true
    },
    { 
      name: "شركة ITC لتنظيم المؤتمرات", 
      image: "/mrg5.png",
      width: "w-1/2 lg:w-48",
      position: "lg:left-0",
      imageSize: "w-full lg:w-[774px] h-full lg:h-[516px] lg:left-[-432px]",
      rotated: true
    },
    { 
      name: "موقع أخبار الطب", 
      image: "/mrg6.jpg",
      width: "w-1/2 lg:w-48",
      position: "lg:left-[208px]",
      imageSize: "w-full lg:w-[909.82px] h-full lg:h-[516px] lg:left-[-297px]",
      rotated: true
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Companies Container - Now appears first on mobile */}
          <div 
            className="w-full h-64 sm:h-80 md:h-[516px] relative lg:flex-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {companies.map((company, index) => (
              <CompanyCard key={index} company={company} index={index} />
            ))}
          </div>
          
          {/* Text Content */}
          <div className="lg:w-72 flex flex-col justify-between" data-aos="fade-left">
            <div className='flex flex-col items-end mb-8 lg:mb-0 text-right'>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blue-900 font-bold font-tajawal mb-2 lg:mb-4">
                شركاتنا.
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-800 font-medium font-tajawal">
                نصنع رواد المستقبل.
              </p>
            </div>
            
            <div className="flex justify-end" data-aos="fade-up" data-aos-delay="400">
              <button className="flex items-center gap-3 sm:gap-4 bg-green-200 hover:bg-green-300 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 transition-all hover:shadow-md">
                <div className="w-10 h-10 sm:w-12 sm:h-12 p-1 bg-green-700 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                  <svg 
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white transform -rotate-45" 
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
                <span className="text-xl sm:text-2xl text-green-700 font-tajawal font-medium">
                  شاهد شركاتنا
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CompanyCard = ({ company, index }) => {
  return (
<div 
  className={`${company.width} h-full ${company.position} top-0 absolute rounded-2xl lg:rounded-[40px] overflow-hidden transition-all duration-300 hover:z-10 hover:shadow-xl`}
  data-aos="fade-up"
  data-aos-delay={300 + (index * 100)}
>
  {/* Background Image Container */}
  <div 
    className={`absolute inset-0 ${company.imageSize} bg-cover bg-center`}
    style={{ backgroundImage: `url(${company.image})` }}
  >
    {/* Gradient overlay for better text visibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10"></div>
  </div>
  
  {/* Content */}
  {company.mainCard ? (
    <div className="relative h-full w-full flex flex-col justify-end p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <button className="flex items-center gap-2 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 p-1 bg-green-50 rounded-full flex justify-center items-center transition-all group-hover:bg-white">
            <div className="w-6 h-6 sm:w-8 sm:h-8 relative origin-top-left rotate-[-45.79deg]">
              <div className="w-full h-full bg-green-700 rounded-sm"></div>
            </div>
          </div>
          <span className="text-green-50 text-lg sm:text-xl md:text-2xl font-bold font-tajawal">
            {company.description}
          </span>
        </button>
        <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-tajawal text-right">
          {company.name}
        </h3>
      </div>
    </div>
  ) : (
    <div className="absolute inset-0 flex items-center justify-center">
      <h3 className={`text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-tajawal text-center ${
        company.rotated ? 'transform -rotate-90 whitespace-nowrap' : ''
      }`}>
        {company.name}
      </h3>
    </div>
  )}
</div>
  );
};

export default CompaniesSection;