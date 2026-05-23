'use client';

import { universities } from '../../data/studyIndiaUniversities';

export default function StudyIndiaPage() {

  return (

    <main className="min-h-screen bg-[#F7FAFC]">

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
            <a href="/study-online">Study Online</a>
            <a href="/study-india">Study In India</a>
            <a href="/study-abroad">Study Abroad</a>
            <a href="/visitor-visa">Visitor Visa</a>
            <a href="/connect-us">Connect Us</a>

          </div>

        </div>

      </nav>

      <section className="pt-36 pb-16 text-center">

        <h1 className="text-5xl font-bold text-[#0B1F4D]">
          Study In India
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          International Universities With Indian Campuses
        </p>

      </section>

      <section className="max-w-7xl mx-auto px-5 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {universities.map((university: any, index: number) => (

            <div
              key={index}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg"
            >

              <div className="relative h-[420px]">

                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-7 left-7 text-white">

                  <h2 className="text-3xl font-bold">
                    {university.name}
                  </h2>

                  <div className="flex items-center gap-3 mt-3">

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

    </main>

  );
}