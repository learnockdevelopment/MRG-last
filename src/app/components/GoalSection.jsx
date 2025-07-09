import React from 'react';

const GoalsSection = () => {
  const items = [
    {
      type: 'goal',
      title: "التميز في الجودة",
      description: "تحقيق التميز في كافة مجالات العمل من خلال تقديم خدمات عالية الجودة مع الالتزام بأعلى معايير الاحترافية.",
      bgColor: "bg-green-200",
      icon: "⭐"
    },
    {
      type: 'image',
      src: "/Photo 1.png",
      alt: "تطوير وتمكين الكوادر البشرية",
            description: "الاستثمار في تدريب وتطوير فرق العمل لضمان تقديم أفضل ما لديهم من إبداع وكفاءة.",

    },
    {
      type: 'goal',
      title: "توسيع نطاق التأثيـر",
      description: "تطويـر منتجات وخدمات مبتكـرة تواكـب التطورات التكنولوجية وتلبـي احتياجات الأسواق المحلية والدولية.",
      bgColor: "bg-green-400",
      icon: "🌍"
    },
    {
      type: 'image',
      src: "/Photo 2.png",
      alt: "تعزيز الاستدامه",
            description: "تبني ممارسات مستدامة تدعم التنمية الاقتصادية والاجتماعية والبيئية.",

    },
    {
      type: 'goal',
      title: "الـمسؤوليـة الاجتماعيـة",
      description: "الالتزام بدعم الفئات الأكثر احتياجا من خلال مؤسسة رمضان الاقتصادية لدعم الأسرة، مع تقديم مبادرات مجتمعية فعالة تساهم في تحسين نوعية الحياة.",
      bgColor: "bg-green-300",
      icon: "🤝"
    },
    {
      type: 'image',
      src: "/Photo 3.png",
      alt: "تعزيز التكامل",
            description: "توفير حلول متكاملة ومترابطة، تجمع بين التكنولوجيا، التدريب، والخدمات، مما يعزز قيمة العملاء ويحقق لهم النجاح في مختلف المجالات."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 container mx-auto">
      <div className=" mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 font-tajawal mb-4">
            أهدافنا 
          </h2>
          
        </div>

        <div className="space-y-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index % 2 === 0 ? 100 : 200}>
              {item.type === 'goal' ? (
                <GoalCard goal={item} index={index} />
              ) : (
                <ImageCard src={item.src} alt={item.alt} description={item.description} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GoalCard = ({ goal, index }) => (
  <div 
  className={`col-span-1 h-full relative p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${goal.bgColor} hover:-translate-y-2`}
>
  <div className="flex flex-col items-center text-center justify-center h-full">
    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-tajawal mb-6">
      {goal.title}
    </h3>
    <p className="text-xl md:text-2xl text-gray-700 font-tajawal leading-relaxed">
      {goal.description}
    </p>
  </div>
</div>

);

const ImageCard = ({ src, alt ,description }) => (
  <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-64 md:h-96 group">
    <img 
      className="w-full h-full object-cover" 
      src={src} 
      alt={alt}
      loading="lazy"
    />

    {/* Overlay gradient */}
    <div className="absolute inset-0 bg-blue-400/50 opacity-10 group-hover:opacity-100 transition-opacity duration-300"></div>

    {/* Text on hover */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col items-center text-center justify-center h-full p-8">

      <h3 className="text-3xl md:text-4xl font-bold text-white font-tajawal mb-6">
        {alt}
      </h3>
      <p className="text-xl md:text-2xl text-gray-200 font-tajawal leading-relaxed">
      {description}
    </p>
    </div>
    </div>
  </div>
);


export default GoalsSection;