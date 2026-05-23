'use client';

import { useState } from 'react';

export default function ConnectUsPage() {

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    assistance: '',
    country: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert('Form Submitted Successfully');

    setFormData({
      name: '',
      number: '',
      email: '',
      assistance: '',
      country: '',
    });
  };

  return (
    <main className="bg-[#F7FAFC] min-h-screen">

     {/* NAVBAR */}

<nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">

<div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">

  {/* LOGO */}

  <a href="/" className="flex items-center gap-3">

    <img
      src="/logo.png"
      alt="Eduaccess"
      className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] object-contain"
    />

    <div>

      <h1 className="text-xl lg:text-2xl font-bold text-[#0B1F4D]">
        EDU<span className="text-[#D4AF37]">ACCESS</span>
      </h1>

      <p className="text-[10px] lg:text-xs text-gray-500">
        Your Access To Education
      </p>

    </div>

  </a>

  {/* DESKTOP MENU */}

  <div className="hidden lg:flex items-center gap-12 font-medium text-[16px] text-[#0B1F4D]">

    <a href="/" className="hover:text-[#D4AF37] transition">
      Home
    </a>

    <a href="/study" className="text-[#D4AF37]">
      Study
    </a>

    <a href="/visitor-visa" className="hover:text-[#D4AF37] transition">
      Visitor Visa
    </a>

    <a href="/connect-us" className="hover:text-[#D4AF37] transition">
      Connect Us
    </a>

  </div>

  {/* MOBILE MENU */}

  <div className="flex lg:hidden items-center gap-4 text-sm font-semibold text-[#0B1F4D]">

    <a href="/">
      Home
    </a>

    <a href="/study" className="text-[#D4AF37]">
      Study
    </a>

    <a href="/visitor-visa">
      Visa
    </a>

    <a href="/connect-us">
      Contact
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

          Let’s Build Your
          <span className="block text-[#D4AF37]">
            Global Future
          </span>

        </h1>

        <p className="text-gray-600 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">

          Connect with our expert team for Study Abroad,
          Visitor Visa, Study Online and Study In India guidance.

        </p>

      </section>

      {/* FORM SECTION */}

      <section className="pb-24">

        <div className="max-w-3xl mx-auto px-5">

          <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-gray-100">

            <h2 className="text-4xl font-bold text-[#0B1F4D] mb-10 text-center">
              Get Free Consultation
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* NAME */}

              <div>

                <label className="block text-[#0B1F4D] font-semibold mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#D4AF37]"
                />

              </div>

              {/* NUMBER */}

              <div>

                <label className="block text-[#0B1F4D] font-semibold mb-3">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="number"
                  required
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#D4AF37]"
                />

              </div>

              {/* EMAIL */}

              <div>

                <label className="block text-[#0B1F4D] font-semibold mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#D4AF37]"
                />

              </div>

              {/* ASSISTANCE */}

              <div>

                <label className="block text-[#0B1F4D] font-semibold mb-3">
                  Assistance In
                </label>

                <select
                  name="assistance"
                  required
                  value={formData.assistance}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#D4AF37]"
                >

                  <option value="">
                    Select Assistance
                  </option>

                  <option value="Study Abroad">
                    Study Abroad
                  </option>

                  <option value="Study Online">
                    Study Online
                  </option>

                  <option value="Study In India">
                    Study In India
                  </option>

                  <option value="Visitor Visa">
                    Visitor Visa
                  </option>

                </select>

              </div>

              {/* COUNTRY */}

              {(formData.assistance === 'Study Abroad' ||
                formData.assistance === 'Visitor Visa') && (

                <div>

                  <label className="block text-[#0B1F4D] font-semibold mb-3">
                    Preferred Country
                  </label>

                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Enter preferred country"
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#D4AF37]"
                  />

                </div>

              )}

              {/* BUTTON */}

              <button
                type="submit"
                className="w-full bg-[#0B1F4D] hover:bg-[#102A63] text-white py-5 rounded-full text-lg font-semibold transition shadow-xl"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* CONTACT INFO */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* CONTACT CARD */}

            <div className="bg-white rounded-[35px] p-10 shadow-xl border border-gray-100">

              <div className="space-y-10">

                {/* PHONE */}

                <div>

                  <h3 className="text-2xl font-bold text-[#0B1F4D]">
                    Phone
                  </h3>

                  <a
                    href="tel:+919998920644"
                    className="text-gray-600 mt-3 block hover:text-[#D4AF37]"
                  >
                    +91 99989 20644
                  </a>

                </div>

                {/* EMAIL */}

                <div>

                  <h3 className="text-2xl font-bold text-[#0B1F4D]">
                    Email
                  </h3>

                  <a
                    href="mailto:connect.eduaccessess@outlook.com"
                    className="text-gray-600 mt-3 block hover:text-[#D4AF37]"
                  >
                    connect.eduaccessess@outlook.com
                  </a>

                </div>

                {/* ADDRESS */}

                <div>

                  <h3 className="text-2xl font-bold text-[#0B1F4D]">
                    Address
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed">

                    KB House, Third Floor,
                    Next to Gopinathji Honda Showroom,
                    Vadodara, Gujarat

                  </p>

                </div>

              </div>

            </div>

            {/* MAP */}

            <div className="rounded-[35px] overflow-hidden shadow-xl border border-gray-200 h-[500px]">

              <iframe
                src="https://www.google.com/maps?q=KB%20House%20Vadodara&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-[#0B1F4D] text-white py-10 text-center">

        <p>
          © 2026 EDUACCESS. All Rights Reserved.
        </p>

      </footer>

      {/* FLOATING WHATSAPP */}

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
