'use client';

import { useEffect, useMemo, useState } from 'react';
import { universities } from '../../data/onlineUniversities';

export default function StudyOnlinePage() {

  const [current, setCurrent] = useState(0);

  const groupedUniversities = useMemo(() => {
    const groups = [];

    for (let i = 0; i < universities.length; i += 6) {
      groups.push(universities.slice(i, i + 6));
    }

    return groups;
  }, []);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === groupedUniversities.length - 1 ? 0 : prev + 1
      );

    }, 12000);

    return () => clearInterval(interval);

  }, [groupedUniversities.length]);

  return (

    <main className="min-h-screen bg-[#F7FAFC]">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full bg-white border-b z-50">

        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

          <a href="/" className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="logo"
              className="w-[55px] h-[55px] object-contain"
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

          <div className="hidden lg:flex gap-8 text-[#0B1F4D] font-medium">

            <a href="/">Home</a>

            <a href="/study">Study</a>

            <a href="/visitor-visa">Visitor Visa</a>

            <a href="/connect-us">Connect Us</a>

          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="pt-36 pb-12 px-5 text-center">

        <h1 className="text-5xl font-bold text-[#0B1F4D] mb-5">
          Study Online
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore India’s leading online universities and start your
          journey toward globally recognised education from anywhere.
        </p>

      </section>

      {/* UNIVERSITY CARDS */}

      <section className="max-w-7xl mx-auto px-5 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {groupedUniversities[current]?.map((uni, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="relative">

                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-[220px] object-cover"
                />

                <div className="absolute inset-0 bg-black/45 flex items-end p-5">

                  <div>

                    <h2 className="text-2xl font-bold text-[#FFD700]">
                      {uni.name}
                    </h2>

                    <p className="text-white text-sm mt-1">
                      {uni.location}
                    </p>

                  </div>

                </div>

              </div>

              <div className="p-5">

                <div className="flex items-center justify-between mb-4">

                  <span className="bg-[#0B1F4D] text-white text-xs px-4 py-2 rounded-full">
                    {uni.type}
                  </span>

                  <img
                    src={uni.flag}
                    alt="flag"
                    className="w-7 h-5 object-cover rounded"
                  />

                </div>

                <div className="mb-5">

                  <h3 className="font-semibold text-[#0B1F4D] mb-2">
                    Popular Programs
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {uni.programs?.ug?.slice(0, 3).map((course, i) => (

                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-3 py-2 rounded-full"
                      >
                        {course}
                      </span>

                    ))}

                  </div>

                </div>

                <a
                  href="/connect-us"
                  className="block text-center bg-[#D4AF37] hover:bg-[#b8932e] text-white font-semibold py-3 rounded-xl transition"
                >
                  Apply Now
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>

  );

}