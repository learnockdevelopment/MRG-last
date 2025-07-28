import Card from "../components/Card";

const AboutPage = () => {
  // Array of card data objects
  const cardsData = [
    {
      id: 1,
      title: "دار طفرة للنشر والتوزيع",
      description: `دار نشر مصرية وعضو إتحاد الناشرين المصريين وعضو إتحاد الناشرين العرب`,
      imageUrl: "/mrg4.png",
      link: "dar-tafrah-publishing",
      website: '#'
    },
    {
      id: 2,
      title: "أكاديمية ITalent",
      description: `مركز تدريب رائد يقدم برامج شاملة ومتخصصة في المجالات الحياتية والمهنية.`,
      imageUrl: "/cardmrg.jpg",
      link: "italent-academy",
      website: '#'
    },
    {
      id: 3,
      title: "مران للاستثمار الرياضي",
      description: `مؤسسة تقدم برامج تدريبية رياضية للأطفال والشباب والكبار.`,
      imageUrl: "/mrg7.jpg",
      link: "marran-sports-investment"
    },
    {
      id: 4,
      title: "شركة ITC لتنظيم المؤتمرات",
      description: `متخصصة في تنظيم المؤتمرات والفعاليات الطبية والعلمية محليًا ودوليًا.`,
      imageUrl: "/mrg6.jpg",
      link: "itc-conference-organization"
    },
    {
      id: 5,
      title: "مصنع PURE PLAST",
      description: `رائد في صناعة منتجات PET والتعبئة والتغليف بتقنيات صديقة للبيئة.`,
      imageUrl: "/IMG_2631-1-scaled-1.jpg",
      link: "pure-plast-factory",
      website: '#'
    },
    {
      id: 6,
      title: "مصنع السويس لألياف البوليستر",
      description: `أول مصنع في الشرق الأوسط لإنتاج ألياف البوليستر من مواد معاد تدويرها.`,
      imageUrl: "/repreve-unifi-recycled-polyester-factory-tour.jpg",
      link: "suez-polyester-fiber-factory"
    },
    {
      id: 7,
      title: "شركة SUS للأنظمة الأمنية",
      description: `شركة متخصصة في التيار الخفيف والأنظمة الأمنية منذ أكثر من 10 سنوات.`,
      imageUrl: "/Integrated-Security-Management-Systems-ISMS-shutterstock_146057678.jpg",
      link: "sus-security-systems"
    },
    {
      id: 8,
      title: "شركة فوكس ساين",
      description: `من أبرز شركات استيراد خامات الدعاية والإعلان في الشرق الأوسط.`,
      imageUrl: "/405939716_787874746685810_4023399380978356763_n.jpg",
      link: "fox-sign"
    },
    {
      id: 9,
      title: "شركة MixMax للشاشات",
      description: `توريد شاشات تفاعلية مخصصة لقطاع الدعاية والإعلان.`,
      imageUrl: "/images-1.jpg",
      link: "mixmax"
    },
    {
      id: 10,
      title: "الشركة المتحدة للتجارة والتوكيلات",
      description: `شركة تعمل في التيار الخفيف والبطاريات الجافة منذ أكثر من 25 عامًا.`,
      imageUrl: "/PC-components-User2Computers.jpeg",
      link: "united-trading-agencies"
    },
    {
      id: 11,
      title: "أرض الذهب LAND OF GOLD",
      description: `شركة متخصصة في بيع المصوغات الذهبية.`,
      imageUrl: "/file.jpg",
      link: "land-of-gold"
    },
    {
      id: 12,
      title: "موقع أخبار الطب",
      description: `يقدم محتوى طبي موثوق وينظم فعاليات لرفع الوعي الصحي.`,
      imageUrl: "/ten-reasons-you-must-have-a-primary-care-doctor.webp",
      link: "medical-news-site"
    }
  ];

  return (
    <section className="pt-32 pb-16 bg-green-50">
      {/* Hero Images */}
       <h2 className="text-zinc-900 text-center
text-4xl
font-medium
leading-loose">
اهم الشركات     </h2>
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img 
            src="/mrg7.jpg" 
            className="object-cover w-full h-96 rounded-xl" 
            alt="MRG Image 1" 
          />
          <img 
            src="/mrg4.png" 
            className="object-cover w-full h-96 rounded-xl" 
            alt="MRG Image 2" 
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-4 lg:px-16">
        <h2 className="text-zinc-900
         text-center
text-4xl
font-medium
leading-loose">
شركات اخرى   
     </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              link={`/companies/${card.link}`} // Assuming you want to link to a dynamic page
              website={card.website}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;