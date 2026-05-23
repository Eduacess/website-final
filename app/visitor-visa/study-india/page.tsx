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

      {/* HERO */}

      <section className="pt-44 pb-20 text-center px-5">

        <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
          Global Universities In India
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold mt-8 text-[#0B1F4D] leading-tight">

          Study In India
          <span className="block text-[#D4AF37]">
            With Global Exposure
          </span>

        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-xl mt-10 leading-relaxed">

          Explore premium Indian and international universities
          offering globally recognized degrees and transfer opportunities.

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700">

            {displayedUniversities.map((university: any, index) => (

              <div
                key={index}
                onClick={() => setSelectedUniversity(university)}
                className="group cursor-pointer bg-white rounded-[30px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >

                <div className="relative h-[360px] overflow-hidden">

                  <img
                    src={university.image}
                    className="w-full h-full object-cover transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                  {/* CONTENT */}

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

                <h2 className="text-5xl font-bold">
                  {selectedUniversity.name}
                </h2>

                <div className="flex items-center gap-4 mt-5">

                  <img
                    src={selectedUniversity.flag}
                    className="w-8 h-6 rounded-sm object-cover"
                  />

                  <p className="text-xl text-gray-200">
                    {selectedUniversity.location}
                  </p>

                </div>

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

                  {selectedUniversity.programs?.ug?.length > 0 && (

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

                  {selectedUniversity.programs?.pg?.length > 0 && (

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

                {/* HIGHLIGHTS */}

                <div className="mt-6 bg-yellow-50 rounded-[30px] p-7">

                  <h3 className="text-3xl font-bold text-[#0B1F4D] mb-5">
                    University Highlights
                  </h3>

                  <div className="grid grid-cols-2 gap-5">

                    {selectedUniversity.benefits?.map((benefit: any, i: number) => (

                      <div
                        key={i}
                        className="bg-white rounded-2xl p-5 shadow flex flex-col items-center justify-center text-center"
                      >

                        <img
                          src={benefit.icon}
                          alt={benefit.title}
                          className="w-14 h-14 object-contain mb-4"
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

    </main>

  );
}