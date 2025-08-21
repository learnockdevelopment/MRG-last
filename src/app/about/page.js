import VisionSection from "../components/VisionSection";
import { DiscoverMoreButton } from "../components/AboutSection";
import BookCard from "../components/bookCard";
import { books } from "./data";

export default function AboutPage() {
  return (
    <section className="pt-32 pb-16 bg-green-50" dir="rtl">
      <VisionSection imageType={3} showButton={false} />

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 mb-20 lg:mb-32 container mx-auto px-4 lg:px-8 mt-32">
        
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col items-start gap-8 animate-fadeInUp">
          
          {/* Title */}
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="w-12 h-1 bg-green-600 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-blue-900 font-bold font-tajawal">
              من هو الأستاذ محمود رمضان
            </h2>
          </div>

          {/* Bio */}
          <div className="bg-white shadow-lg rounded-xl p-6 space-y-4 border border-gray-100">
            <p className="text-lg md:text-xl text-gray-700 font-tajawal leading-relaxed">
              من مواليد القاهرة 1968.<br />
              حاصل على ليسانس حقوق وماجستير في القانون من جامعة عين شمس.<br />
              مؤسس ورئيس مجلس إدارة مجموعة شركات{" "}
              <span className="font-bold text-green-600">MRG</span> الاقتصادية، 
              التي تضم شركات صناعية وزراعية وتجارية، وشركات للتدريب والنشر والرياضة.<br />
              مؤسس ورئيس مجلس إدارة مؤسسة رمضان للتنمية الاقتصادية وهي مؤسسة خيرية.
            </p>
          </div>

          {/* Memberships */}
          <div className="bg-green-100 rounded-xl p-6 shadow-md border border-green-200">
            <h3 className="text-2xl font-bold text-blue-900 font-tajawal mb-3">العضويات</h3>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 font-tajawal space-y-1">
              <li>عضو اتحاد الناشرين المصريين واتحاد الناشرين العرب.</li>
              <li>عضو اتحاد الصناعات المصرية.</li>
              <li>عضو الجمعية المصرية للاقتصاد السياسي والإحصاء والتشريع.</li>
              <li>عضو مجلس إدارة الأعمال الكندي.</li>
              <li>عضو الغرفة التجارية بالقاهرة.</li>
            </ul>
          </div>

          {/* Books */}
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-900 font-tajawal mb-3">صدر له كتب:</h3>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 font-tajawal space-y-1">
              <li>الشعب يريد نظام جديد.</li>
              <li>كلها لمصر.</li>
              <li>إلى مصر.</li>
              <li>لو أصبحت رئيساً لمصر.</li>
              <li>من أحلى كلام البشر.</li>
              <li>مقالات ومقولات.</li>
              <li>كلام محمود.</li>
              <li>احنا مش هنموت.</li>
            </ul>
          </div>

          {/* Website Links */}
          <div className="mt-4 space-x-4 flex flex-row-reverse gap-4">
            
            {/* <a
              href="https://www.mahmoudramadan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 font-tajawal text-lg underline"
            >
              www.mahmoudramadan.com
            </a> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative lg:w-1/2 w-full">
          <div className="absolute -bottom-10 -left-10 z-20 w-32 h-32 bg-green-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="hidden lg:block absolute -right-10 -top-10 w-full h-full border-[30px] border-gray-200 rounded-lg animate-fadeIn"></div>
          <div className="relative overflow-hidden rounded-xl shadow-2xl z-10 transform transition-all hover:shadow-xl hover:-translate-y-1">
            <img
              className="w-full h-auto object-cover"
              src="/about.jpg"
              alt="About Image"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
