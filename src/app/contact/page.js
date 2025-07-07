
const ContactPage = () => {
  return (
    <section className="pt-32 pb-16 bg-green-50">
      {/* Hero Banner */}
      <div className="w-full h-52 bg-sky-950 flex justify-center items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-slate-50 text-4xl font-medium font-tajawal">شركات</h1>
          <div className="h-64 w-64 bg-white rounded-full p-4 flex items-center justify-center"><img src="/mrgHead.png" className="w-32 h-32"/></div>
          <h1 className="text-slate-50 text-4xl font-medium font-tajawal">مجموعة</h1>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 my-12 mt-28">
        <div className="bg-emerald-100 rounded-3xl p-8 max-w-5xl mx-auto flex gap-12 items-center justify-between flex-col lg:flex-row">
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.021115565392!2d31.341831076056117!3d30.064929217599033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e72f3b74343%3A0x889cfe063ab73c2a!2s82%20%D8%B4%20Makram%20Ebeid%2C%20Al%20Mintaqah%20as%20S%C4%81disah%2C%20Nasr%20City%2C%20Cairo%20Governorate%204450345!5e0!3m2!1sen!2seg!4v1751904010502!5m2!1sen!2seg" width="350" height="200" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="flex flex-col items-end gap-6">
            <h2 className="text-3xl font-medium font-tajawal text-black">المقر الرئيسي</h2>
            
            <div className="flex flex-col items-end gap-4 w-full">
              <div className="flex items-center gap-4 justify-end w-full">
                <p className="text-2xl font-normal font-tajawal text-black">
                  82 ش مكرم عبيد مدينة نصر – القاهرة
                </p>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center gap-4 justify-end w-full">
                <p className="text-2xl font-normal font-tajawal text-black">
                  رقم الهاتف: 0223494194
                </p>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4 mt-28">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-4xl font-medium font-tajawal text-black">
            تواصل معنا
          </h2>
          
          <div className="w-full max-w-5xl bg-white rounded-3xl border border-neutral-400 p-8">
            <form className="flex flex-col items-center gap-6">
              <div className="w-full flex flex-col items-end gap-4">
                <div className="w-full">
                  <input 
                    type="text" 
                    placeholder="الاسم الاول" 
                    className="w-full h-14 px-4 py-2 bg-white rounded-xl border border-teal-700/25 text-right text-base font-semibold font-cairo text-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-700/50"
                    autoComplete="off"
                  />
                </div>
                
                <div className="w-full">
                  <input 
                    type="email" 
                    placeholder="البريد الالكتروني" 
                    className="w-full h-14 px-4 py-2 bg-white rounded-xl border border-teal-700/25 text-right text-base font-semibold font-cairo text-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-700/50"
                    autoComplete="off"
                  />
                </div>
                
                <div className="w-full">
                  <textarea 
                    placeholder="اكتب رسالتك..." 
                    rows="5"
                    className="w-full p-4 bg-white rounded-xl border border-teal-700/25 text-right text-base font-semibold font-cairo text-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-700/50"
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
    </section>
  );
};

export default ContactPage;