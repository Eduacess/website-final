

'use client';

import { useState } from 'react';
import { universities } from '../../data/studyIndiaUniversities';

export default function StudyIndiaPage() {

  const [selectedUniversity, setSelectedUniversity] = useState<any>(null);

  return (

    <main className="bg-[#F7FAFC] min-h-screen">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

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

          <div className="hidden lg:flex items-center gap-10 font-medium text-[#0B1F4D]">

            <a href="/">Home</a>

            <a href="/study-online">Study Online</a>

            <a href="/study-india" className="text-[#D4AF37]">
              Study In India
            </a>

            <a href="/study-abroad">Study Abroad</a>

            <a href="/visitor-visa">Visitor Visa</a>

            <a href="/connect-us">Connect Us</a>

          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="pt-40 pb-20 text-center px-5">

        <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
          International Universities In India
        </p>

        <h1 className="text-5xl font-bold mt-8 text-[#0B1F4D]">

          Study In India
          <span className="block text-[#D4AF37] mt-3">
            With Global Exposure
          </span>

        </h1>

      </section>

      {/* CARDS */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {universities.map((university: any, index: number) => (

            <div
              key={index}
              onClick={() => setSelectedUniversity(university)}
              className="cursor-pointer bg-white rounded-[35px] overflow-hidden shadow-xl"
            >

              <div className="relative h-[420px]">

                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-8 left-8 text-white">

                  <div className="bg-[#D4AF37] text-[#0B1F4D] px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">

                    {university.type}

                  </div>

                  <h2 className="text-3xl font-bold">
                    {university.name}
                  </h2>

                  <div className="flex items-center gap-3 mt-4">

                    <img
                      src={university.flag}
                      alt="flag"
                      className="w-7 h-5"
                    />

                    <p>
                      {university.location}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* POPUP */}

      {selectedUniversity && (

        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-5">

          <div className="bg-white w-full max-w-6xl rounded-[40px] overflow-hidden grid lg:grid-cols-2 relative">

            <button
              onClick={() => setSelectedUniversity(null)}
              className="absolute top-5 right-5 bg-white w-12 h-12 rounded-full text-3xl z-50"
            >
              ×
            </button>

            {/* LEFT */}

            <div className="relative h-[700px]">

              <img
                src={selectedUniversity.image}
                alt={selectedUniversity.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-10 left-10 text-white">

                <h2 className="text-5xl font-bold">
                  {selectedUniversity.name}
                </h2>

                <div className="flex items-center gap-4 mt-4">

                  <img
                    src={selectedUniversity.flag}
                    className="w-8 h-6"
                  />

                  <p className="text-xl">
                    {selectedUniversity.location}
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="p-10 overflow-y-auto">

              <h3 className="text-3xl font-bold text-[#0B1F4D] mb-8">
                Programs Offered
              </h3>

              <div className="mb-8">

                <h4 className="text-xl font-bold text-[#D4AF37] mb-4">
                  Undergraduate Programs
                </h4>

                <div className="flex flex-wrap gap-3">

                  {selectedUniversity.programs.ug.map((program: string, i: number) => (

                    <div
                      key={i}
                      className="bg-[#F7FAFC] px-5 py-3 rounded-full"
                    >
                      {program}
                    </div>

                  ))}

                </div>

              </div>

              <div>

                <h4 className="text-xl font-bold text-[#D4AF37] mb-4">
                  Postgraduate Programs
                </h4>

                <div className="flex flex-wrap gap-3">

                  {selectedUniversity.programs.pg.map((program: string, i: number) => (

                    <div
                      key={i}
                      className="bg-[#F7FAFC] px-5 py-3 rounded-full"
                    >
                      {program}
                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>

  );
}
