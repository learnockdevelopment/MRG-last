import Card from "../components/Card";

const AboutPage = () => {
  // Array of card data objects
  const cardsData = [
    {
      id: 1,
      title: "اكادميه ITalent",
      description: `مركز تدريب رائد يقدم برامج شامله ومتخصصه في
مختلف المجالات الحياتيه، المهنيه، والعلميه.`,
      imageUrl: "/cardmrg.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "اكادميه ITalent",
      description: `مركز تدريب رائد يقدم برامج شامله ومتخصصه في
مختلف المجالات الحياتيه، المهنيه، والعلميه.`,
      imageUrl: "/cardmrg.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "اكادميه ITalent",
      description: `مركز تدريب رائد يقدم برامج شامله ومتخصصه في
مختلف المجالات الحياتيه، المهنيه، والعلميه.`,
      imageUrl: "/cardmrg.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "اكادميه ITalent",
      description: `مركز تدريب رائد يقدم برامج شامله ومتخصصه في
مختلف المجالات الحياتيه، المهنيه، والعلميه.`,
      imageUrl: "/cardmrg.jpg",
      link: "#"
    },
    {
      id: 5,
      title: "اكادميه ITalent",
      description: `مركز تدريب رائد يقدم برامج شامله ومتخصصه في
مختلف المجالات الحياتيه، المهنيه، والعلميه.`,
      imageUrl: "/cardmrg.jpg",
      link: "#"
    },
    {
      id: 6,
      title: "اكادميه ITalent",
      description: `مركز تدريب رائد يقدم برامج شامله ومتخصصه في
مختلف المجالات الحياتيه، المهنيه، والعلميه.`,
      imageUrl: "/cardmrg.jpg",
      link: "#"
    },
    {
      id: 7,
      title: "اكادميه ITalent",
      description: `مركز تدريب رائد يقدم برامج شامله ومتخصصه في
مختلف المجالات الحياتيه، المهنيه، والعلميه.`,
      imageUrl: "/cardmrg.jpg",
      link: "#"
    },
    {
      id: 8,
      title: "اكادميه ITalent",
      description: `مركز تدريب رائد يقدم برامج شامله ومتخصصه في
مختلف المجالات الحياتيه، المهنيه، والعلميه.`,
      imageUrl: "/cardmrg.jpg",
      link: "#"
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
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;