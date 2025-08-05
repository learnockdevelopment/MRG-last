'use client';

import { books } from "../../about/data";
import Link from "next/link";
import Swal from 'sweetalert2';
import BookCard from "@/app/components/bookCard";
import { FiDownload, FiEye, FiArrowLeft, FiCalendar, FiBookOpen } from 'react-icons/fi';

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
        confirmButton: 'bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg mx-2',
        cancelButton: 'bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg mx-2'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'جاري التحميل!',
          html: `<p>جاري تحميل كتاب <span class="font-bold">${book.title}</span></p>`,
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        });
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
        confirmButton: 'bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg mx-2',
        cancelButton: 'bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg mx-2'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'جاري التحميل!',
          html: `<p>جاري فتح كتاب <span class="font-bold">${book.title}</span> في نافذة جديدة</p>`,
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        });
      }
    });
  };

  if (!book) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">الكتاب غير موجود</h1>
            <p className="text-gray-600 mb-6">عذراً، لا يمكن العثور على الكتاب المطلوب</p>
            <Link 
              href="/about" 
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <FiArrowLeft className="ml-2" /> العودة إلى قائمة الكتب
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/about" 
            className="inline-flex items-center text-green-700 hover:text-green-800 transition"
          >
            <FiArrowLeft className="ml-2" /> العودة إلى القائمة
          </Link>
        </div>

        {/* Book Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Book Cover */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative group">
              <img 
                className="w-full max-w-xs h-auto rounded-xl shadow-xl transform group-hover:scale-[1.02] transition duration-300"
                src={book.image} 
                alt={book.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
          </div>

          {/* Book Info */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-right">
                {book.title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6 text-right leading-relaxed">
                {book.description}
              </p>

              <div className="flex items-center justify-end gap-4 mb-8">
                <div className="flex items-center text-gray-500">
                  <FiCalendar className="ml-2" />
                  <span>سنة النشر: {book.publishDate}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button 
                  onClick={handleDownload}
                  className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  <FiDownload className="ml-2" /> تحميل الكتاب
                </button>
                <button 
                  onClick={handleView}
                  className="flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
                >
                  <FiEye className="ml-2" /> عرض الكتاب
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Books */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-right flex items-center">
            <FiBookOpen className="ml-2" /> كتب أخرى قد تعجبك
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.filter(b => b.id !== book.id).slice(0, 4).map((book) => (
              <BookCard key={book.id} book={book} id={book.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}