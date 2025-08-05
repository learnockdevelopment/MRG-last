"use client";

import ContactForm from "@/app/components/contactForm";
import VisionSection from "../../components/VisionSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function CompanyPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const searchParams = useSearchParams();

  // Basic company info
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const imageUrl = searchParams.get("imageUrl");
  const websiteUrl = searchParams.get("websiteUrl");

  // Mission, vision, goals
  const vision = searchParams.get("vision");
  const goals = JSON.parse(searchParams.get("goals") || "[]");
  const mission = JSON.parse(searchParams.get("mission") || "[]");

  // Additional details
  const phone = searchParams.get("phone");
  const address = searchParams.get("address");
  const products = JSON.parse(searchParams.get("products") || "[]");
  const services = JSON.parse(searchParams.get("services") || "[]");
  const values = JSON.parse(searchParams.get("values") || "[]");
  const branches = JSON.parse(searchParams.get("branches") || "[]");
  const training_fields = JSON.parse(
    searchParams.get("training_fields") || "[]"
  );
  const advantages = JSON.parse(searchParams.get("advantages") || "[]");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Helper function to render lists
  const renderList = (items, title) => {
    if (!items || items.length === 0) return null;

    return (
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <ul className="list-disc pr-5 space-y-2">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  // Helper function to render section if condition is met
  const renderSection = (condition, children) => {
    if (!condition) return null;
    return children;
  };

  return (
    <section className="pb-16 bg-green-50">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url("${imageUrl}")` }}
        className="h-[60vh] relative bg-no-repeat bg-cover bg-center"
      >
        <div
          className="absolute top-0 left-0 w-full h-full z-0 bg-black opacity-70"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container mx-auto relative z-40 text-white h-full flex items-center px-4 sm:px-6 lg:px-8"
        >
          <div className="relative w-full text-end">
            <div className="absolute right-0 w-[150px] bg-green-600 -z-10 h-[400px] top-[-190px]"></div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ direction: "rtl" }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-snug max-w-4xl me-auto text-start relative z-10"
            >
              {`${title} 
              إحدى شركات مجموعة MRG`}
            </motion.h1>

           
              <Link
                href={`/companies`}
                className="flex w-fit items-center gap-3 sm:gap-4 bg-green-200 hover:bg-green-300 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 transition-all hover:shadow-md mt-4"
              >
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
                  الذهاب الي الموقع
                </span>
              </Link>
          
          </div>
        </motion.div>
      </div>

      {/* Company Overview Section - Only show if there's description or contact info */}
      {(description || phone || address || websiteUrl) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="container mx-auto px-4 lg:px-8 mt-20 mb-12"
          style={{ direction: "rtl" }}
        >
          <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl overflow-hidden border border-green-100">
            {/* Section Header */}
            <div className="bg-green-600 px-8 py-4">
              <h2 className="text-3xl font-bold text-white text-center">
                معلومات الشركة
              </h2>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Description Section */}
                {description && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="relative"
                  >
                    <div className="absolute -right-4 top-0 h-full w-1 bg-green-400 rounded-full"></div>
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-full mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 text-green-800">
                          نبذة عن الشركة
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                          {description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Contact Info Section */}
                {(phone || address || websiteUrl) && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-semibold text-green-800 mb-6 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      معلومات التواصل
                    </h3>

                    {phone && (
                      <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl">
                        <div className="bg-white p-3 rounded-full shadow-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">الهاتف</p>
                          <a
                            href={`tel:${phone}`} dir="ltr"
                            className="text-xl font-medium text-green-700 hover:text-green-800 transition-colors"
                          >
                            {phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {address && (
                      <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl">
                        <div className="bg-white p-3 rounded-full shadow-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">العنوان</p>
                          <p className="text-lg font-medium text-gray-700">
                            {address}
                          </p>
                        </div>
                      </div>
                    )}

                    {websiteUrl && (
                      <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl">
                        <div className="bg-white p-3 rounded-full shadow-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            الموقع الإلكتروني
                          </p>
                          <Link
                            href={
                              websiteUrl.startsWith("http")
                                ? websiteUrl
                                : `https://${websiteUrl}`
                            }
                            target="_blank"
                            className="text-lg font-medium text-green-700 hover:text-green-800 transition-colors flex items-center gap-2"
                          >
                            {websiteUrl.replace(/^https?:\/\//, "")}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Vision Section */}
      {vision && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-28 container mx-auto rounded-l-full overflow-hidden"
        >
          <VisionSection imageType={2} showButton={true} textFirst={false} />
        </motion.div>
      )}

      {/* Company Details Sections - Only show if there's mission, goals or vision */}
      {(mission.length > 0 || goals.length > 0 || vision) && (
        <div
          className="container mx-auto px-4 lg:px-8 mt-32 mb-20"
          style={{ direction: "rtl" }}
        >
          <div className="text-gray-700 text-4xl font-medium font-['Cairo'] uppercase text-center mb-12">
            عن الشركة
          </div>
          <div>
            <img src="/Arrow 2.svg" className="h-[74px] w-auto mx-auto my-16" />
          </div>

          <div className="flex gap-6 justify-center items-center text-center flex-wrap">
            {/* Mission Card - Only show if there's mission */}
            {mission.length > 0 && (
              <div className="p-4 py-8 w-96 min-h-[590px] bg-green-50 rounded-2xl shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-lg flex flex-col justify-start items-center gap-6">
                <h1 className="text-black text-2xl font-bold font-['Open_Sans']">
                  رسالة الشركة
                </h1>
                <img src="/noteBook.png" className="w-36 h-32" />
                <div className="text-black text-md font-normal font-['Cairo'] leading-loose">
                  {Array.isArray(mission) ? (
                    <ul className="list-disc pr-5 space-y-2">
                      {mission.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{mission}</p>
                  )}
                </div>
              </div>
            )}

            {/* Goals Card - Only show if there's goals */}
            {goals.length > 0 && (
              <div className="p-4 py-8 w-96 min-h-[590px] bg-green-50 rounded-2xl shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-lg flex flex-col justify-start items-center gap-6">
                <h1 className="text-black text-2xl font-bold font-['Open_Sans']">
                  أهداف الشركة
                </h1>
                <img src="/arrow.png" className="w-36 h-32" />
                <div className="text-black text-md font-normal font-['Cairo'] leading-loose">
                  <ul className="list-disc pr-5 space-y-2">
                    {goals.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Vision Card - Only show if there's vision */}
            {vision && (
              <div className="p-4 py-8 w-96 min-h-[590px] bg-green-50 rounded-2xl shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-lg flex flex-col justify-start items-center gap-6">
                <h1 className="text-black text-2xl font-bold font-['Open_Sans']">
                  رؤية الشركة
                </h1>
                <img src="/img.png" className="w-36 h-32" />
                <p className="text-black text-md font-normal font-['Cairo'] leading-loose">
                  {vision}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Additional Details Section - Only show if there's any additional data */}
      {(products.length > 0 ||
        services.length > 0 ||
        values.length > 0 ||
        branches.length > 0 ||
        training_fields.length > 0 ||
        advantages.length > 0) && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="container mx-auto px-4 lg:px-8 mb-20"
          style={{ direction: "rtl" }}
        >
          <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-xl overflow-hidden border border-green-100">
            {/* Section Header */}
            <div className="bg-green-700 px-8 py-5">
              <h2 className="text-3xl font-bold text-white text-center">
                تفاصيل الشركة
              </h2>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Products Section */}
                {products.length > 0 && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100"
                  >
                    <div className="bg-green-100 px-6 py-4 flex items-center gap-3">
                      <div className="bg-green-600 p-2 rounded-full">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-green-800">
                        المنتجات
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {products.map((product, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-700">{product}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Services Section */}
                {services.length > 0 && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100"
                  >
                    <div className="bg-green-100 px-6 py-4 flex items-center gap-3">
                      <div className="bg-green-600 p-2 rounded-full">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-green-800">
                        الخدمات
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {services.map((service, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-700">{service}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Values Section */}
                {values.length > 0 && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100"
                  >
                    <div className="bg-green-100 px-6 py-4 flex items-center gap-3">
                      <div className="bg-green-600 p-2 rounded-full">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-green-800">
                        القيم
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {values.map((value, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-700">{value}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Branches Section */}
                {branches.length > 0 && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100"
                  >
                    <div className="bg-green-100 px-6 py-4 flex items-center gap-3">
                      <div className="bg-green-600 p-2 rounded-full">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-green-800">
                        الفروع
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {branches.map((branch, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-700">{branch}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Training Fields Section */}
                {training_fields.length > 0 && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100"
                  >
                    <div className="bg-green-100 px-6 py-4 flex items-center gap-3">
                      <div className="bg-green-600 p-2 rounded-full">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-green-800">
                        مجالات التدريب
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {training_fields.map((field, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-700">{field}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Advantages Section */}
                {advantages.length > 0 && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100"
                  >
                    <div className="bg-green-100 px-6 py-4 flex items-center gap-3">
                      <div className="bg-green-600 p-2 rounded-full">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-green-800">
                        المميزات
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {advantages.map((advantage, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-700">{advantage}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Contact Form - Always show */}
      <ContactForm />
    </section>
  );
}
