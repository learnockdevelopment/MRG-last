import VisionSection from "../components/VisionSection";
import { DiscoverMoreButton } from "../components/AboutSection";
import BookCard from "../components/bookCard";
import { books } from "./data"; // Adjust the path as necessary
// app/about/data.js


export default function AboutPage() {
  return (
    <section className="pt-32 pb-16 bg-green-50">
      <VisionSection imageType={3} showButton={false} />

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 lg:mb-32 container mx-auto px-4 lg:px-8 mt-32 *::animate-fadeIn">
        {/* Image with decorative elements */}
        <div className="relative lg:w-1/2 w-full">
          <div className="absolute -bottom-10 -right-10 z-20 w-32 h-32 bg-green-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="hidden lg:block absolute -left-10 -top-10 w-full h-full border-[30px] border-gray-200 rounded-lg animate-fadeIn"></div>
          <div className="relative overflow-hidden rounded-xl shadow-2xl z-10 transform transition-all hover:shadow-xl hover:-translate-y-1">
            <img
              className="w-full h-auto object-cover"
              src="/about.jpg"
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
              من هو الاستاذ محمود رمضان
            </h2>
          </div>

          <div className="text-right space-y-6">
            <p className="text-lg md:text-xl text-gray-700 font-tajawal leading-relaxed">
              من مواليد القاهرة 1968. حاصل على ليسانس حقوق وماجستير فى القانون
              من جامعة عين شمس. مؤسس ورئيس مجلس إدارة مجموعات شركات MRG التى تضم
              شركات صناعية وزراعية وتجارية وشركات للتدريب وللنشر والرياضة. مؤسس
              ورئيس مجلس إدارة مؤسسة رمضان للتنمية الاقتصادية وهى مؤسسة خيرية.
              عضو اتحاد الناشرين المصريين واتحاد الناشرين العرب. عضو اتحاد
              الصناعات المصرية. عضو الجمعية المصرية للاقتصاد السياسى والإحصاء
              والتشريع. عضو مجلس إدارة الأعمال الكندى. عضو الغرفة التجارية
              بالقاهرة .
            </p>
          </div>
        </div>
      </div>

      {/* Books Section */}
      <div className="container mx-auto px-4 lg:px-8 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12 font-tajawal">
          صدر له كتب
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} id={book.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
