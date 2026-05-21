'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ConnectUsPage() {

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    country: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    try {

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          country: formData.country,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      setSubmitted(true);

    } catch (error) {

      alert('Something went wrong.');

    }

  };

  return (

    <main className="bg-[#F7FAFC] min-h-screen">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex items-center justify-between">

          <a href="/" className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="Eduaccess"
              className="w-[60px] h-[60px] object-contain"
            />

            <div>

              <h1 className="text-2xl font-bold tracking-wide text-[#0B1F4D]">
                EDU<span className="text-[#D4AF37]">ACCESS</span>
              </h1>

              <p className="text-xs text-gray-500">
                Your Access To Education
              </p>

            </div>

          </a>

          <div className="hidden lg:flex items-center gap-12 font-medium text-[16px] text-[#0B1F4D]">

            <a href="/" className="hover:text-[#D4AF37] transition">
              Home
            </a>

            <a href="/#study" className="hover:text-[#D4AF37] transition">
              Study
            </a>

            <a href="/visitor-visa" className="hover:text-[#D4AF37] transition">
              Visitor Visa
            </a>

            <a href="/connect-us" className="text-[#D4AF37]">
              Connect Us
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="pt-40 pb-20 text-center px-5">

        <p className="text-[#D4AF37] uppercase tracking-[4px] font-semibold">
          Connect With Eduaccess
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold text-[#0B1F4D] mt-6 leading-tight">

          Start Your
          <span className="block text-[#D4AF37]">
            Global Journey
          </span>

        </h1>

      </section>

      {/* FORM */}

      <section className="pb-24">

        <div className="max-w-3xl mx-auto px-5">

          <div className="bg-white rounded-[40px] p-10 shadow-xl border border-gray-100">

            {!submitted ? (

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className="w-full h-14 rounded-2xl border border-gray-300 px-5 outline-none focus:border-[#D4AF37]"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  className="w-full h-14 rounded-2xl border border-gray-300 px-5 outline-none focus:border-[#D4AF37]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  className="w-full h-14 rounded-2xl border border-gray-300 px-5 outline-none focus:border-[#D4AF37]"
                />

                <select
                  name="service"
                  required
                  onChange={handleChange}
                  className="w-full h-14 rounded-2xl border border-gray-300 px-5 outline-none focus:border-[#D4AF37]"
                >

                  <option value="">
                    Assistance In
                  </option>

                  <option>
                    Visitor Visa
                  </option>

                  <option>
                    Study Abroad
                  </option>

                  <option>
                    Study In India
                  </option>

                  <option>
                    Study Online
                  </option>

                </select>

                {(formData.service === 'Visitor Visa' ||
                  formData.service === 'Study Abroad') && (

                  <input
                    type="text"
                    name="country"
                    placeholder="Preferred Country"
                    required
                    onChange={handleChange}
                    className="w-full h-14 rounded-2xl border border-gray-300 px-5 outline-none focus:border-[#D4AF37]"
                  />

                )}

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-300 p-5 outline-none focus:border-[#D4AF37]"
                />

                <button
                  type="submit"
                  className="w-full bg-[#0B1F4D] hover:bg-[#102A63] text-white py-5 rounded-full text-lg font-semibold transition shadow-xl"
                >
                  Submit Inquiry
                </button>

              </form>

            ) : (

              <div className="text-center py-10">

                <h2 className="text-4xl font-bold text-green-600">
                  Inquiry Submitted
                </h2>

                <p className="text-gray-600 mt-5 text-lg">
                  Our Eduaccess team will contact you shortly.
                </p>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-[#0B1F4D] text-white py-10 text-center">

        <p>
          © 2026 EDUACCESS. All Rights Reserved.
        </p>

      </footer>

      {/* WHATSAPP */}

      <a
        href="https://wa.me/919998920644"
        target="_blank"
        className="fixed bottom-6 right-6 z-50"
      >

        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-16 h-16 hover:scale-110 transition"
        />

      </a>

    </main>

  );
}
