'use client'; // Mark as client component for interactivity

import { useState } from 'react';
import Swal from 'sweetalert2';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.firstName || !formData.email || !formData.message) {
      Swal.fire({
        title: 'خطأ',
        text: 'الرجاء ملء جميع الحقول المطلوبة',
        icon: 'error',
        confirmButtonText: 'حسناً',
        customClass: {
          confirmButton: 'bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded mx-2'
        },
        buttonsStyling: false
      });
      return;
    }

    // Here you would typically send the form data to your backend
    // For demonstration, we'll just show a success message
    
    Swal.fire({
      title: 'تم الإرسال بنجاح!',
      text: 'شكراً لتواصلك معنا، سنرد عليك في أقرب وقت ممكن.',
      icon: 'success',
      confirmButtonText: 'حسناً',
      customClass: {
        confirmButton: 'bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded mx-2',
        popup: 'text-right' // RTL styling
      },
      buttonsStyling: false
    }).then(() => {
      // Reset form after successful submission
      setFormData({
        firstName: '',
        email: '',
        message: ''
      });
    });
  };

  return (
    <div className="container mx-auto px-4 mt-28">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-4xl font-medium font-tajawal text-black">
          تواصل معنا
        </h2>
        
        <div className="w-full max-w-5xl bg-white rounded-3xl border border-neutral-400 p-8">
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
            <div className="w-full flex flex-col items-end gap-4">
              <div className="w-full">
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="الاسم الاول" 
                  className="w-full h-14 px-4 py-2 bg-white rounded-xl border border-teal-700/25 text-right text-base font-semibold font-cairo text-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-700/50"
                  autoComplete="off"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              
              <div className="w-full">
                <input 
                  type="email" 
                  name="email"
                  placeholder="البريد الالكتروني" 
                  className="w-full h-14 px-4 py-2 bg-white rounded-xl border border-teal-700/25 text-right text-base font-semibold font-cairo text-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-700/50"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="w-full">
                <textarea 
                  name="message"
                  placeholder="اكتب رسالتك..." 
                  rows="5"
                  className="w-full p-4 bg-white rounded-xl border border-teal-700/25 text-right text-base font-semibold font-cairo text-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-700/50"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-48 h-14 bg-blue-900 rounded-3xl text-white text-base font-semibold font-cairo hover:bg-blue-800 transition-colors duration-300"
            >
              ارسالِ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}