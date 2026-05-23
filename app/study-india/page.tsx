'use client';

import { useEffect, useMemo, useState } from 'react';
import { universities } from '../../data/studyIndiaUniversities';

export default function StudyIndiaPage() {

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

    }, 12000);

    return () => clearInterval(interval);

  }, []);

  const displayedUniversities = useMemo(() => {

    if (search.trim() !== '') {

      const found = universities.filter((u: any) =>
        u.name.toLowerCase().includes(search.toLowerCase())
      );

      if (found.length > 0) return found;

      return universities.filter((u: any) => u.others);

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

      <section className="pt-40 pb-16 px-5">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <h1 className="text-5xl font-bold text-[#0B1F4D]">
              Study In India
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Explore International Universities In India
            </p>

          </div>

          <div className="max-w-2xl mx-auto mb-14">

            <input
              type="text"
              placeholder="Search Universities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 text-lg outline-none shadow-lg"
            />

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {displayedUniversities.map((university: any, index) => (

              <div
                key={index}
                onClick={() => setSelectedUniversity(university)}
                className="group cursor-pointer bg-white rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >

                <div className="relative h-[340px] overflow-hidden">

                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">

                    <div className="inline-block bg-[#D4AF37] text-[#0B1F4D] px-4 py-2 rounded-full text-sm font-bold mb-4">
                      {university.type}
                    </div>

                    <h2 className="text-2xl font-bold leading-tight text-white drop-shadow-2xl">
                      {university.name}
                    </h2>

                    <div className="flex items-center gap-3 mt-4">

                      <img
                        src={university.flag}
                        alt="flag"
                        className="w-7 h-5 rounded-sm object-cover"
                      />

                      <p className="text-gray-100 text-base font-medium">
                        {university.location}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>

  );
}