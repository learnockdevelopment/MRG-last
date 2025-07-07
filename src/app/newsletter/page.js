import VisionSection from "../components/VisionSection";
import BookCard from "../components/bookCard";

export default function newsletterPage() {
  // Array of 8 book objects
  const books = [
    {
      id: 1,
      title: "كتاب القانون التجاري",
      image: "/book1.png",
    },
    {
      id: 2,
      title: "الاقتصاد السياسي",
      image: "/book2.png",
    },
    {
      id: 3,
      title: "التشريعات المالية",
      image: "/book3.png",
    },
    {
      id: 4,
      title: "الاستثمار والأعمال",
      image: "/book4.png",
    },
    {
      id: 5,
      title: "التحكيم التجاري",
      image: "/book2.png",
    },
    {
      id: 6,
      title: "التمويل الإسلامي",
      image: "/book6.png",
    },
    {
      id: 7,
      title: "القانون الدولي",
      image: "/book7.png",
    },
    {
      id: 8,
      title: "إدارة الأعمال",
      image: "/book8.png",
    },
  ];

  return (
    <section className="pt-32 pb-16 bg-green-50">
        <div class=" flex flex-col justify-start items-center gap-4  mb-12">
    <div class="self-stretch h-20 text-center justify-start text-zinc-900 text-4xl font-bold font-['Cairo'] leading-[52px]">إصدارات نشرة MRG<br/></div>
    <div class="self-stretch text-center justify-center text-zinc-700 text-2xl font-normal font-['Cairo'] leading-[52px] max-w-4xl mx-auto">تُعلن مجموعة MRG الاقتصادية عن إصدار “نشرة MRG “، وهي نشرة غير دورية تُسلّط الضوء على أنشطة شركات المجموعة، وتستعرض الفعاليات القادمة، الشراكات الجديدة،
 بالإضافة إلى نصائح مهنية من واقع مجالات عملنا المتنوعة.</div>
</div>
      <VisionSection imageType={2} textFirst={false} />
     <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center gap-8 mt-12">
  {/* Title Section */}
  <div class="text-center mb-12">
    <h2 class="text-4xl font-bold text-gray-900 font-cairo leading-[1.3]">
      النشرة متاحة الآن إلكترونيًا عبر الروابط التالية
    </h2>
  </div>

  {/* Issues List */}
  <div class="w-full flex  items-center gap-6">
    {/* Issue 3 */}
    <div class="flex flex-col items-center gap-2">
      <a href="#" class="w-56 h-14 bg-green-400 hover:bg-green-500 transition-colors rounded-full border border-green-700 flex justify-center items-center gap-2.5 px-4 py-3">
        <span class="text-base font-normal text-gray-900 font-cairo">
          اضغط للمشاهدة أو التحميل
        </span>
      </a>
      <span class="text-base font-medium text-gray-900 font-cairo">العدد الثالث</span>
    </div>

    {/* Issue 2 */}
    <div class="flex flex-col items-center gap-2">
      <a href="#" class="w-56 h-14 bg-green-400 hover:bg-green-500 transition-colors rounded-full border border-green-700 flex justify-center items-center gap-2.5 px-4 py-3">
        <span class="text-base font-normal text-gray-900 font-cairo">
          اضغط للمشاهدة أو التحميل
        </span>
      </a>
      <span class="text-base font-medium text-gray-900 font-cairo">العدد الثاني</span>
    </div>

    {/* Issue 1 */}
    <div class="flex flex-col items-center gap-2">
      <a href="#" class="w-56 h-14 bg-green-400 hover:bg-green-500 transition-colors rounded-full border border-green-700 flex justify-center items-center gap-2.5 px-4 py-3">
        <span class="text-base font-normal text-gray-900 font-cairo">
          اضغط للمشاهدة أو التحميل
        </span>
      </a>
      <span class="text-base font-medium text-gray-900 font-cairo">العدد الأول</span>
    </div>
  </div>
</div>
<div class="flex justify-center items-center gap-16 container mx-auto px-4 sm:px-6 lg:px-8 py-8 *:animate-fadeIn mt-16">
    <div class="w-80 inline-flex flex-col justify-start items-center gap-6">
        <div class="self-stretch h-96 relative">
            <div class="w-28 h-7 left-[106px] top-[443px] absolute"></div>
            <div class="w-80 h-96 left-0 top-0 absolute rounded-2xl overflow-hidden">
                <img class="w-80 h-96 left-0 top-0 absolute rounded-lg shadow-[inset_0px_4px_4px_-20px_rgba(0,0,0,0.25)] object-cover" src="/newimg.jpg" />
            </div>
        </div>
        <div class="w-24 h-7 justify-center text-black text-center text-base font-normal font-['Cairo'] leading-7">مستشار التحرير</div>
        <div class="w-28 h-6 justify-center text-black text-center text-2xl font-medium font-['Cairo'] leading-relaxed">سمر طارق</div>
    </div>
    <div class="w-80 inline-flex flex-col justify-start items-center gap-6">
        <div class="self-stretch h-96 relative">
            <div class="w-80 h-96 left-0 top-0 absolute rounded-2xl overflow-hidden">
                <img class="w-80 h-96 left-0 top-0 absolute rounded-lg shadow-[inset_0px_4px_4px_-20px_rgba(0,0,0,0.25)] object-cover" src="/newimg.jpg" />
            </div>
        </div>
        <div class="w-16 h-7 justify-center text-black text-center text-base font-normal font-['Cairo'] leading-7">مدير التحرير</div>
        <div class="w-32 h-6 justify-center text-black text-center text-2xl font-medium font-['Cairo'] leading-relaxed">محمد مصلح</div>
    </div>
    <div class="w-80 inline-flex flex-col justify-start items-center gap-6">
        <div class="self-stretch h-96 relative">
            <div class="w-80 h-96 left-0 top-0 absolute rounded-2xl overflow-hidden">
                <img class="w-80 h-96 left-0 top-0 absolute rounded-lg shadow-[inset_0px_4px_4px_-20px_rgba(0,0,0,0.25)] object-cover" src="/newimg.jpg" />
            </div>
        </div>
        <div class="w-32 h-7 justify-center text-black text-center text-base font-normal font-['Cairo'] leading-7">رئيس مجلس الإدارة</div>
        <div class="w-36 h-6 justify-center text-black text-center text-2xl font-medium font-['Cairo'] leading-relaxed">محمود رمضان</div>
    </div>
</div>
   
    </section>
  );
}