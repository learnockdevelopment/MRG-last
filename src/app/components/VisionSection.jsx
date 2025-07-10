import Link from "next/link";
import React from "react";

const VisionSection = ({
  // Content customization
  title,
  quote = "نؤمن بأن المساحات الرائعة تنبع من تضافر الرؤية والتعاون والتصميم. لا نكتفي بقبول المشاريع فحسب، بل نبني علاقات مع عملائنا، ونساعدهم على تحويل رؤاهم إلى واقع ملموس.",
  author = "أ/ محمود رمضان",
  buttonText = "شاهد المزيد",

  // Layout options
  textFirst = true, // true = text on left, false = text on right
  showImage = true,
  showDots = true,
  showButton = true,

  // Image options
  imageType = 1, // 1, 2, or 3
  imageSrc = "/mrg3.jpg", // custom image path
}) => {
  // Image styles based on type
  const imageStyles = {
    1: "rounded-bl-[200px] rounded-br-[200px] lg:rounded-bl-[250px] lg:rounded-br-[250px]",
    2: "rounded-lg",
    3: "rounded-3xl relative",
  };

  // Adjust padding based on image type
  const sectionPadding = {
    1: "py-14 px-4 sm:px-6 lg:px-8 overflow-hidden",
    2: "py-12 px-4 sm:px-6 lg:px-8",
    3: "py-4 px-4 sm:px-6 lg:px-8",
  };

  // Adjust image size based on type
  const imageContainerSize = {
    1: "w-72 md:w-96 lg:w-[30rem]",
    2: "w-80 md:w-[28rem] lg:w-[32rem] top-0!",
    3: "w-80 md:w-[30rem] lg:w-[38rem]",
  };

  // Determine flex direction based on textFirst prop
  const flexDirection = textFirst ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <section className={`relative bg-[#00164F] ${sectionPadding[imageType]}`}>
      {/* Background elements */}
      <div className="absolute -left-40 -top-40 w-80 h-80 bg-violet-300 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute -right-40 bottom-0 w-80 h-80 bg-indigo-200 rounded-full blur-[120px] opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`flex flex-col ${flexDirection} items-center gap-12`}>
          {/* Content - always comes first in DOM but order changes with flex-direction */}
          <div className="lg:w-1/2 flex flex-col items-end text-right">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-tajawal mb-6" dir="rtl">
                {title}
              </h2>
            )}

            {quote && (
              <blockquote className="text-slate-50 text-2xl font-normal font-['Tajawal'] leading-10 mb-8">
                {quote}
              </blockquote>
            )}

            {author && imageType !== 3 && (
              <div className="text-indigo-200 text-xl font-medium font-tajawal mb-10">
                {author}
              </div>
            )}

            {showButton && <WatchMoreButton text={buttonText} />}
          </div>

          {/* Image */}
          {showImage && (
            <div className="lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px]">
              <div
                className={`absolute top-[-60px] left-1/2 -translate-x-1/2 overflow-hidden shadow-2xl ${imageContainerSize[imageType]} ${imageStyles[imageType]}`}
              >
                <img
                  className="w-full h-full object-cover"
                  src={imageSrc}
                  alt="Vision Illustration"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 to-sky-950/20">
                  {imageType === 3 && (
                    <div className="absolute bottom-0 right-0 left-0 p-6 text-white  font-bold text-4xl flex items-end justify-center h-full">
                      {author}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative dots */}
      {showDots && (
        <>
          <DotsPattern position={textFirst ? "right" : "left"} small={false} />
          <DotsPattern position={textFirst ? "left" : "right"} small={true} />
        </>
      )}
    </section>
  );
};

// DotsPattern and WatchMoreButton components remain the same
const DotsPattern = ({ position, small = false }) => {
  const sizeClass = small ? "w-2 h-2" : "w-3 h-3";
  const containerClass =
    position === "right"
      ? "hidden lg:block absolute right-10 bottom-20"
      : "hidden lg:block absolute left-10 top-20 opacity-60";

  return (
    <div className={`${containerClass}`}>
      {[...Array(3)].map((_, row) => (
        <div key={`row-${row}`} className="flex gap-2 mb-2">
          {[...Array(8 - row)].map((_, col) => (
            <div
              key={`dot-${row}-${col}`}
              className={`${sizeClass} bg-indigo-200 rounded-full`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const WatchMoreButton = ({ text = "شاهد المزيد" }) => (
  <Link href={"/about"} className="group flex items-center gap-4 transition-all hover:gap-6">
    <span className="text-xl md:text-2xl font-medium text-green-400 font-tajawal group-hover:text-green-300 transition-colors">
      {text}
    </span>
    <div className="w-12 h-12 md:w-14 md:h-14 p-1.5 bg-green-600 rounded-full flex items-center justify-center transition-all group-hover:bg-green-500 group-hover:scale-110">
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
  </Link>
);

export default VisionSection;