"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    title: "",
  });

  const [loading, setLoading] = useState(false); // ✅ Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📦 Sending form data:", formData);

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: "خطأ",
        text: "الرجاء ملء جميع الحقول المطلوبة",
        icon: "error",
        confirmButtonText: "حسناً",
        customClass: {
          confirmButton:
            "bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded mx-2",
        },
        buttonsStyling: false,
      });
      return;
    }

    setLoading(true); // ✅ Start loading
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("📩 Server response:", data);

      if (!res.ok) {
        throw new Error(data?.error || "حدث خطأ أثناء إرسال الرسالة");
      }

      Swal.fire({
        title: "تم الإرسال بنجاح!",
        text: "شكراً لتواصلك معنا، سنرد عليك في أقرب وقت ممكن.",
        icon: "success",
        confirmButtonText: "حسناً",
        customClass: {
          confirmButton:
            "bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded mx-2",
          popup: "text-right",
        },
        buttonsStyling: false,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
        title: "",
      });
      console.log("✅ Form reset complete");
    } catch (err) {
      console.error("🚨 Submission error:", err.message);
      Swal.fire({
        title: "خطأ",
        text: err.message,
        icon: "error",
        confirmButtonText: "حسناً",
        customClass: {
          confirmButton:
            "bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded mx-2",
        },
        buttonsStyling: false,
      });
    } finally {
      setLoading(false); // ✅ End loading
    }
  };

  return (
    <div className="container mx-auto px-4 mt-28">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-4xl font-medium font-tajawal text-black">
          تواصل معنا
        </h2>

        <div className="w-full max-w-5xl bg-white rounded-3xl border border-neutral-400 p-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-full flex flex-col items-end gap-4">
              <input
                type="text"
                name="name"
                placeholder="الاسم الاول"
                className="w-full h-14 px-4 py-2 bg-white rounded-xl border border-teal-700/25 text-right"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="البريد الالكتروني"
                className="w-full h-14 px-4 py-2 bg-white rounded-xl border border-teal-700/25 text-right"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="title"
                placeholder="العنوان (اختياري)"
                className="w-full h-14 px-4 py-2 bg-white rounded-xl border border-teal-700/25 text-right"
                value={formData.title}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="اكتب رسالتك..."
                rows="5"
                className="w-full p-4 bg-white rounded-xl border border-teal-700/25 text-right"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <input
                type="tel"
                name="phone"
                placeholder="رقم الهاتف (اختياري)"
                className="w-full h-14 px-4 py-2 bg-white rounded-xl border border-teal-700/25 text-right"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-48 h-14 rounded-3xl text-white text-base font-semibold font-cairo transition-colors duration-300 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-900 hover:bg-blue-800"
              }`}
            >
              {loading ? "جارٍ الإرسال..." : "إرسال"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
