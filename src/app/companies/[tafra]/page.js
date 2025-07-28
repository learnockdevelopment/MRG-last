"use client"; // Mark as client component if using animations

import ContactForm from "@/app/components/contactForm";
import VisionSection from "../../components/VisionSection";
import { motion } from "framer-motion"; // For animations
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // For handling search params
import Link from 'next/link';

export default function CompanyPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const imageUrl = searchParams.get("imageUrl");
  const websiteUrl = searchParams.get("websiteUrl");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pb-16 bg-green-50">
      {/* Hero Section with improved visibility */}
      <div
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
        className="h-[60vh] relative bg-no-repeat bg-cover bg-center"
      >
        {/* Dark overlay with better control */}
        <div
          className="absolute top-0 left-0 w-full h-full z-0 bg-black opacity-70"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
          }}
        ></div>

        {/* Content container with animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container mx-auto relative z-40 text-white h-full flex items-center px-4 sm:px-6 lg:px-8"
        >
          <div className="relative w-full text-end">
            {/* Decorative element */}
            <div className="absolute right-0  w-[150px] bg-green-600  -z-10 h-[400px] top-[-190px]"></div>
          

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ direction: "rtl" }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-snug max-w-4xl me-auto text-start relative  z-10"
            >
              {`${title} 
              إحدى شركات مجموعة MRG`}
            </motion.h1>

             {websiteUrl&& <Link href={websiteUrl} className="flex w-fit! items-center gap-3 sm:gap-4 bg-green-200 hover:bg-green-300 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 transition-all hover:shadow-md">
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
      الذهاب الي الموقع                </span>
              </Link>
             
             }
          </div>
        </motion.div>
      </div>

      {/* Vision Section with smooth appearance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-28 container mx-auto  rounded-l-full overflow-hidden"
      >
        <VisionSection imageType={2} showButton={true} textFirst={false} />
      </motion.div>

      <div
        className="container mx-auto px-4 lg:px-8 mt-32 mb-20"
        style={{ direction: "rtl" }}
      >
<div class=" text-gray-700 text-4xl font-medium font-['Cairo'] uppercase text-center mb-12">عن الشركة</div>
<div><img src="/Arrow 2.svg" className="h-[74px] w-auto mx-auto my-16"/></div>     
   <div className="flex gap-6 justify-center items-center text-center flex-wrap">
          <div class="p-4 py-8 w-96 min-h-[590px] bg-green-50 rounded-2xl shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-lg flex flex-col justify-start items-center gap-6">
            <h1
              className="text-black text-2xl font-bold font-['Open_Sans']"
            >رسالة الشركة</h1>
            <img src="/noteBook.png" className="w-36 h-32" />
            <p
              className="text-black
text-md
font-normal
font-['Cairo']
leading-loose"
            >في دار طفرة، نؤمن بقوة الكلمة وتعبيرها عن الفكرة في إحداث الفرق وبناء المستقبل ، ونلتزم بتقديم إصدارات تُثري العقل وتُلهم الروح وتعمق الفهم وكتب تركز على تطوير الذات والمجتمع، مع الحرص على معالجة قضايا الواقع وتقديم حلول عملية تسهم في مواجهة تحدياته.”</p>
          </div>
          <div class="p-4 py-8 w-96 min-h-[590px] bg-green-50 rounded-2xl shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-lg flex flex-col justify-start items-center gap-6">
            <h1
              className="text-black text-2xl font-bold font-['Open_Sans']"
            >أهداف الشركة</h1>{" "}
            <img src="/arrow.png" className="w-36 h-32" />
            <p
              className="text-black
text-md
font-normal
font-['Cairo']
leading-loose"
            >تقديم محتوى عالي الجودة: الالتزام بأعلى معايير التحرير والإنتاج لتقديم كتب تجمع بين الإبداع والفائدة.
إحياء التراث العربي: إعادة نشر الأعمال التراثية القيمة بأسلوب حديث يجعلها قريبة من اهتمامات الأجيال الحالية.
دعم التنمية البشرية والتطوير المهني:إصدار كتب تهدف إلى تحسين مهارات الأفراد ورفع كفاءاتهم الشخصية والمهنية.
معالجة القضايا المجتمعية: إنتاج كتب تسلط الضوء على قضايا المجتمع وتقدم حلولًا عملية وفعالة تلبي إحتياجات المجتمع وتسهم في تطويره .
تعزيز التوازن بين المتعة والفائدة:نشر كتب أدبية ممتعة وأعمال فكرية عميقة تلبي احتياجات القارئ المختلفة.
دعم الكتاب المميزين: التعاون مع نخبة من الكتّاب المبدعين والمفكرين لتقديم محتوى ثري وهادف.</p>
          </div>

          <div class="p-4 py-8 w-96 min-h-[590px] bg-green-50 rounded-2xl shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-lg flex flex-col justify-start items-center gap-6">
            <h1
              className="text-black
text-2xl
font-bold
font-['Open_Sans']"
            >رؤية الشركة</h1>{" "}
            <img src="/img.png" className="w-36 h-32" />
            <p
              className="text-black
text-md
font-normal
font-['Cairo']
leading-loose"
            >أن تكون دار طفرة للنشر والتوزيع منصة رائدة في تقديم محتوى متنوع يجمع بين الإبداع والإفادة و يمزج بين جودة الأعمال الأدبية وقوة المحتوى الفكري ، مع إحياء التراث العريق، بما يلبي احتياجات القارئ، ويرتقي بالفكر المصري والعربي ، ويُسهم في بناء إنسان أكثر وعيًا وكفاءة، ومجتمعٍ أكثر تطورًا .”</p>
          </div>
        </div>
      </div>
        {/* Additional content can be added here */}
         {/* Contact Form */}
      <ContactForm />
    </section>
  );
}
