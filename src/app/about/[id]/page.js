'use client'; // Mark as Client Component for interactivity

import { books } from "../../about/data";
import Link from "next/link";
import Swal from 'sweetalert2';
import BookCard from "@/app/components/bookCard";

export default function BookDetailPage({ params }) {
  const book = books.find(book => book.id.toString() === params.id);

  const handleDownload = () => {
    Swal.fire({
      title: 'تحميل الكتاب',
      text: `هل تريد تحميل كتاب "${book.title}"؟`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'نعم، حمل الآن',
      cancelButtonText: 'إلغاء',
      reverseButtons: true,
      customClass: {
        confirmButton: 'bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded mx-2',
        cancelButton: 'bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded mx-2'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'جاري التحميل!',
          text: 'سيبدأ تحميل الكتاب خلال لحظات',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
        // Here you would add actual download logic
      }
    });
  };

  const handleView = () => {
    Swal.fire({
      title: 'عرض الكتاب',
      text: `هل تريد عرض كتاب "${book.title}" الآن؟`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'نعم، عرض الكتاب',
      cancelButtonText: 'إلغاء',
      reverseButtons: true,
      customClass: {
        confirmButton: 'bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded mx-2',
        cancelButton: 'bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded mx-2'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'جاري التحميل!',
          html: `سيتم فتح كتاب <strong>${book.title}</strong> في نافذة جديدة`,
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
        // Here you would add actual view logic
      }
    });
  };

  if (!book) {
    return (
      <section className="pt-32 pb-16 bg-green-50 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">الكتاب غير موجود</h1>
          <Link href="/about" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            العودة إلى قائمة الكتب
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-16 bg-green-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-end items-center gap-14">
          {/* Book Info */}
          <div className="w-full lg:w-80 inline-flex flex-col justify-start items-end gap-8">
            <div className="self-stretch flex flex-col justify-start items-end gap-4">
              <div className="self-stretch flex flex-col justify-start items-end gap-2">
                <h1 className="self-stretch text-right text-green-900  text-3xl font-medium font-tajawal leading-10">
                  {book.title}
                </h1>
                <p className="self-stretch text-right text-neutral-500 text-xl lg:text-2xl font-medium font-tajawal leading-loose">
                  {book.description}
                </p>
              </div>
              <div className="inline-flex justify-start items-center gap-2">
                <div className="text-right text-neutral-400 text-base font-medium font-tajawal leading-tight">
                  سنة النشر: {book.publishDate}
                </div>
                <div className="w-5 h-5 relative overflow-hidden">
                  <div className="w-5 h-5 left-0 top-0 absolute bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="w-full lg:w-72 flex flex-col justify-start items-start gap-4">
              <button 
                onClick={handleDownload}
                className="w-full h-14 px-4 py-3 bg-green-700 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-green-700 inline-flex justify-center items-center gap-2.5 hover:bg-green-800 transition"
              >
                <span className="text-green-50 text-base font-normal font-cairo">
                  أضغط هنا للتحميل
                </span>
              </button>
              <button 
                onClick={handleView}
                className="w-full h-14 px-4 py-3 bg-green-50 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-green-700 inline-flex justify-center items-center gap-2.5 hover:bg-green-100 transition"
              >
                <span className="text-green-700 text-base font-normal font-cairo">
                  أضغط هنا للمشاهدة
                </span>
              </button>
            </div>
          </div>
          
          {/* Book Cover */}
          <img 
            className="w-64 h-96 object-cover rounded-lg shadow-md" 
            src={book.image} 
            alt={book.title} 
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 mb-20 mt-28">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-end mb-12 font-tajawal">
كتب اخري
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} id={book.id} />
          ))}
        </div>
      </div>
        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/about" 
            className="inline-block px-6 py-2 text-green-700 hover:text-green-800 transition"
          >
            ← العودة إلى قائمة الكتب
          </Link>
        </div>
      </div>
    </section>
  );
}