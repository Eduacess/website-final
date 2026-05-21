'use client';

import { useEffect, useMemo, useState } from 'react';
import { universities } from '@/data/onlineUniversities';

export default function StudyOnlinePage() {

  const [selectedUniversity, setSelectedUniversity] = useState<any>(null);

  const [search, setSearch] = useState('');

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setStartIndex((prev) =>
        prev + 6 >= universities.length
          ? 0
          : prev + 6
      );

    }, 30000);

    return () => clearInterval(interval);

  }, []);

  const displayedUniversities = useMemo(() => {

    if (search.trim() !== '') {

      const found = universities.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase())
      );

      if (found.length > 0) return found;

      return universities.filter((u) => u.others);

    }

    return universities.slice(startIndex, startIndex + 6);

  }, [search, startIndex]);

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

              <h1 className="text-2xl font-bold text-[#0B1F4D]">
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

        </div>

      </nav>

      {/* HERO */}

      <section className="pt-44 pb-20 text-center px-5">

        <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
          Global Online Degrees
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold mt-8 text-[#0B1F4D] leading-tight">

          Study Online
          <span className="block text-[#D4AF37]">
            From Anywhere
          </span>

        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-xl mt-10 leading-relaxed">

          Explore top Indian & International universities
          offering globally recognized online degrees.

        </p>

        {/* SEARCH */}

        <div className="max-w-2xl mx-auto mt-12">

          <input
            type="text"
            placeholder="Search Universities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 text-lg outline-none shadow-lg focus:border-[#D4AF37]"
          />

        </div>

      </section>

      {/* UNIVERSITY CARDS */}

      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-700">

            {displayedUniversities.map((university, index) => (

              <div
                key={index}
                onClick={() => setSelectedUniversity(university)}
                className="group cursor-pointer bg-white rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >

                <div className="relative h-[500px] overflow-hidden">

                  <img
                    src={university.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/50" />

                  {/* LOGO */}

                  <div className="absolute top-8 left-8">

                    <img
                      src={university.logo}
                      className="w-20 h-20 object-contain bg-white p-2 rounded-2xl"
                    />

                  </div>

                  {/* CONTENT */}

                  <div className="absolute bottom-8 left-8 right-8 text-white">

                    <div className="inline-block bg-[#D4AF37] text-[#0B1F4D] px-4 py-2 rounded-full text-sm font-bold mb-4">

                      {university.type}

                    </div>

                    <h2 className="text-3xl font-bold leading-tight">
                      {university.name}
                    </h2>

                    <p className="text-gray-200 mt-3 text-lg">
                      {university.location}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* POPUP */}

      {selectedUniversity && (

        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-5">

          <div className="relative bg-white w-full max-w-6xl h-[88vh] rounded-[40px] overflow-hidden shadow-2xl grid lg:grid-cols-2">

            {/* CLOSE */}

            <button
              onClick={() => setSelectedUniversity(null)}
              className="absolute top-5 right-5 z-50 bg-white w-12 h-12 rounded-full text-3xl shadow-xl"
            >
              ×
            </button>

            {/* LEFT */}

            <div className="relative h-full">

              <img
                src={selectedUniversity.image}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-10 left-10 right-10 text-white">

                <img
                  src={selectedUniversity.logo}
                  className="w-24 h-24 bg-white rounded-2xl p-2 mb-6"
                />

                <h2 className="text-5xl font-bold">
                  {selectedUniversity.name}
                </h2>

                <p className="mt-4 text-xl text-gray-200">
                  {selectedUniversity.location}
                </p>

              </div>

            </div>

            {/* RIGHT */}

            <div className="p-10 overflow-y-auto flex flex-col justify-between">

              <div>

                {/* PROGRAMS */}

                <div className="bg-[#F7FAFC] rounded-[30px] p-7">

                  <h3 className="text-3xl font-bold text-[#0B1F4D] mb-6">
                    Programs Offered
                  </h3>

                  {/* UG */}

                  {selectedUniversity.programs.ug.length > 0 && (

                    <div className="mb-6">

                      <h4 className="text-xl font-bold text-[#D4AF37] mb-4">
                        Undergraduate Programs
                      </h4>

                      <div className="flex flex-wrap gap-3">

                        {selectedUniversity.programs.ug.map((program: string, i: number) => (

                          <div
                            key={i}
                            className="bg-white px-5 py-3 rounded-full shadow text-[#0B1F4D] font-medium"
                          >
                            {program}
                          </div>

                        ))}

                      </div>

                    </div>

                  )}

                  {/* PG */}

                  {selectedUniversity.programs.pg.length > 0 && (

                    <div>

                      <h4 className="text-xl font-bold text-[#D4AF37] mb-4">
                        Postgraduate Programs
                      </h4>

                      <div className="flex flex-wrap gap-3">

                        {selectedUniversity.programs.pg.map((program: string, i: number) => (

                          <div
                            key={i}
                            className="bg-white px-5 py-3 rounded-full shadow text-[#0B1F4D] font-medium"
                          >
                            {program}
                          </div>

                        ))}

                      </div>

                    </div>

                  )}

                </div>

                {/* INTAKE */}

                <div className="mt-6 bg-blue-50 rounded-[30px] p-7">

                  <h3 className="text-3xl font-bold text-[#0B1F4D] mb-4">
                    Upcoming Intake
                  </h3>

                  <p className="text-gray-700 text-lg">

                    {selectedUniversity.intake}

                  </p>

                </div>

                {/* BENEFITS */}

                <div className="mt-6 bg-yellow-50 rounded-[30px] p-7">

                  <h3 className="text-3xl font-bold text-[#0B1F4D] mb-5">
                    University Highlights
                  </h3>

                  <div className="grid grid-cols-2 gap-5">

                    {selectedUniversity.benefits.map((benefit: any, i: number) => (

                      <div
                        key={i}
                        className="bg-white rounded-2xl p-5 shadow flex items-center gap-4"
                      >

                        <img
                          src={benefit.icon}
                          className="w-12 h-12 object-contain"
                        />

                        <p className="font-semibold text-[#0B1F4D]">
                          {benefit.title}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

              {/* BUTTON */}

              <div className="pt-8">

                <a
                  href="https://wa.me/919998920644"
                  target="_blank"
                  className="w-full block text-center bg-[#0B1F4D] hover:bg-[#102A63] text-white py-5 rounded-full text-lg font-semibold transition shadow-xl"
                >
                  Apply Now
                </a>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="py-24 bg-[#F7FAFC]"
      >

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#0B1F4D]">
              Connect With Eduaccess
            </h2>

            <p className="text-gray-600 mt-5 text-lg">
              Start your global journey with premium guidance.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* CONTACT CARD */}

            <div className="bg-white rounded-[35px] p-10 shadow-xl border border-gray-100">

              <div className="space-y-10">

                {/* PHONE */}

                <div className="flex gap-5">

                  <div className="bg-yellow-100 p-4 rounded-2xl h-fit">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#D4AF37]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-[#0B1F4D]">
                      Phone
                    </h3>

                    <a
                      href="tel:+919998920644"
                      className="text-gray-600 mt-2 block hover:text-[#D4AF37]"
                    >
                      +91 99989 20644
                    </a>

                  </div>

                </div>

                {/* EMAIL */}

                <div className="flex gap-5">

                  <div className="bg-blue-100 p-4 rounded-2xl h-fit">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#0B1F4D]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12H8m8 0l-8 0m8 0l4-4m-4 4l4 4"
                      />
                    </svg>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-[#0B1F4D]">
                      Email
                    </h3>

                    <a
                      href="mailto:connect.eduaccess@outlook.com"
                      className="text-gray-600 mt-2 block hover:text-[#D4AF37]"
                    >
                      connect.eduaccess@outlook.com
                    </a>

                  </div>

                </div>

                {/* ADDRESS */}

                <div className="flex gap-5">

                  <div className="bg-yellow-100 p-4 rounded-2xl h-fit">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#D4AF37]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.243-4.243a8 8 0 1111.313 0z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-[#0B1F4D]">
                      Address
                    </h3>

                    <p className="text-gray-600 mt-2 leading-relaxed">

                      KB House, Third Floor,
                      Next to Gopinathji Honda Showroom,
                      Vadodara, Gujarat

                    </p>

                  </div>

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