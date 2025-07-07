import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 lg:mb-24">
          {/* Image with decorative elements */}
          <div className="relative lg:w-1/2 w-full">
            <div className="hidden lg:block absolute -left-10 -top-10 w-full h-full border-[30px] border-gray-200 rounded-lg animate-fadeIn"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl z-10 transform transition-all hover:shadow-xl hover:-translate-y-1">
              <img 
                className="w-full h-auto object-cover" 
                src="https://placehold.co/610x407" 
                alt="About Image"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
          </div>
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col items-end gap-6 animate-fadeInUp">
            <div className="inline-flex items-center gap-3 mb-2">
              <div className="w-12 h-1 bg-green-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-blue-900 font-bold font-tajawal text-right">
                عن المجموعة
              </h2>
            </div>
            
            <div className="text-right space-y-6">
              <p className="text-lg md:text-xl text-gray-700 font-tajawal leading-relaxed">
                تـضــم الـمـجـموعـة أكـثـر مـن <span className="font-bold text-blue-900">14 شـركـة</span> تـعمـل فـي مـختلـف الـقـطــاعــات ويعمـل بهـا أكـثـر مـن <span className="font-bold text-blue-900">700 مـوظـف</span> ، وقد انطـلـقـت بـعـض شـركــات الـمجـمـوعـة مـنـذ <span className="font-bold text-blue-900">20 عــامــا</span>، وأضـيـفت شـركـات جـديـدة لمـواكبة مـستجـدات الـحيـاة وتطـلعـات الأفــراد.
              </p>
              <p className="text-lg md:text-xl text-gray-700 font-tajawal leading-relaxed">
                تـهـدف الـمجموعة إلى تـنميـة الـفـرد والـمجتمـع عبـر تـقـديـم خـدمـات ومنتجــات مبتكـرة ومـتنوعـة تشمـل التصنيـع، التكنولـوجيـا، النشـر، الريـاضـة ، والتدريـب، إسهامـا منهـا في رفـع مـستـوى الـوعي والـمعـرفـة، وتـحسيـن جـودة الـحـيـاة، وتـعـزيــز نـمـو الأعـمـال.
              </p>
            </div>
            
            <div className="mt-4">
              <DiscoverMoreButton text="شاهد المزيد" />
            </div>
          </div>
        </div>
        
        {/* Second Row (Vision) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          {/* Image with decorative elements */}
          <div className="relative lg:w-1/2 w-full">
            <div className="hidden lg:block absolute -right-10 -top-10 w-full h-full border-[30px] border-gray-200 rounded-lg animate-fadeIn animation-delay-100"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl z-10 transform transition-all hover:shadow-xl hover:-translate-y-1">
              <img 
                className="w-full h-auto object-cover" 
                src="https://placehold.co/591x394" 
                alt="Vision Image"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-30 animate-pulse animation-delay-200"></div>
          </div>
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col items-end gap-6 animate-fadeInUp animation-delay-100">
            <div className="inline-flex items-center gap-3 mb-2">
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-blue-900 font-bold font-tajawal text-right">
                رؤيتنا
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 font-tajawal text-right leading-relaxed">
              أن نصبح روادًا في تقديم خدمات ومنتجات متنوعة ومتكاملة ، مع التزامنا بأعلى معايير الجودة والابتكار والمسؤولية الاجتماعية، ليكون لنا أثر إيجابي في كافة القطاعات التي نعمل بها محليًا ودوليًا.
            </p>
            
          
          </div>
        </div>
      </div>
    </section>
  );
};

export const DiscoverMoreButton = ({ text = "اكتشف المزيد" }) => (
  <button className="group flex items-center gap-4 transition-all hover:gap-6">
    <span className="text-xl md:text-2xl font-medium text-green-700 font-tajawal group-hover:text-green-800 transition-colors">
      {text}
    </span>
    <div className="w-12 h-12 md:w-14 md:h-14 p-1.5 bg-green-700 rounded-full flex items-center justify-center transition-all group-hover:bg-green-800 group-hover:scale-110">
      <svg 
        className="w-6 h-6 md:w-8 md:h-8 text-white transform -rotate-45" 
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

export default AboutSection;