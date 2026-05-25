'use client';

import { useState } from 'react';

const countries = [

  {
    name: 'Australia',
    image:
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/au.png',

    studyLevels: [
      'Bachelors',
      'Masters',
      'MBA',
      'Diploma',
      'PhD',
    ],

    universities: [
      '/studyAbroad/aus/ECU.png',
      '/studyAbroad/aus/GRIFFITH.png',
      '/studyAbroad/aus/LATROB.png',
      '/studyAbroad/aus/MURDOCH.png',
      '/studyAbroad/aus/NEWCASTLE.png',
      '/studyAbroad/aus/RMIT.png',
      '/studyAbroad/aus/SWINBURNE.png',
      '/studyAbroad/aus/TASMANIA.jfif',
      '/studyAbroad/aus/UTS.png',
    ],

    dependents: 'Yes',
    stayback: '2–4 Years',
    pr: 'Yes',
  },

  {
    name: 'New Zealand',
    image:
      'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/nz.png',

    studyLevels: [
      'Bachelors',
      'Masters',
      'Diploma',
      'PhD',
    ],

    universities: [
      '/studyAbroad/nz/aut.png',
      '/studyAbroad/nz/lincoln.png',
      '/studyAbroad/nz/manukau.png',
      '/studyAbroad/nz/otago.png',
      '/studyAbroad/nz/weltech.png',
      '/studyAbroad/nz/whiteria.png',
    ],

    dependents: 'Yes',
    stayback: '3 Years',
    pr: 'Yes',
  },

  {
    name: 'USA',
    image:
      'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/us.png',

    studyLevels: [
      'Bachelors',
      'Masters',
      'MBA',
      'STEM',
      'PhD',
    ],

    universities: [
      '/studyAbroad/usa/american.png',
      '/studyAbroad/usa/AU.jpg',
      '/studyAbroad/usa/images (1).png',
      '/studyAbroad/usa/images (2).png',
      '/studyAbroad/usa/pepperdine.png',
      '/studyAbroad/usa/uis.png',
      '/studyAbroad/usa/virginia.png',
    ],

    dependents: 'Yes',
    stayback: '1–3 Years',
    pr: 'No',
  },

  {
    name: 'United Kingdom',
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/gb.png',

    studyLevels: [
      'Bachelors',
      'Masters',
      'MBA',
      'PhD',
    ],

    universities: [
      '/studyAbroad/uk/bcu.png',
      '/studyAbroad/uk/edinburg.png',
      '/studyAbroad/uk/kingston uni.png',
      '/studyAbroad/uk/mdx.png',
      '/studyAbroad/uk/portsmouth.png',
      '/studyAbroad/uk/rhul.jfif',
      '/studyAbroad/uk/uel.png',
    ],

    dependents: 'Yes',
    stayback: '2 Years',
    pr: 'Yes',
  },

  {
    name: 'Canada',
    image:
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/ca.png',

    studyLevels: [
      'Bachelors',
      'Masters',
      'Diploma',
      'PG Diploma',
    ],

    universities: [
      '/studyAbroad/canada/algoma.png',
      '/studyAbroad/canada/canadore.png',
      '/studyAbroad/canada/canada west.png',
      '/studyAbroad/canada/humber.png',
      '/studyAbroad/canada/mc master.png',
      '/studyAbroad/canada/niagara falls.png',
      '/studyAbroad/canada/sault.jfif',
    ],

    dependents: 'Yes',
    stayback: '3 Years',
    pr: 'Yes',
  },

  {
    name: 'France',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/fr.png',

    studyLevels: [
      'Bachelors',
      'Masters',
      'MBA',
      'Fashion',
    ],

    universities: [],

    dependents: 'Yes',
    stayback: '2 Years',
    pr: 'Yes',
  },

  {
    name: 'Germany',
    image:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/de.png',

    studyLevels: [
      'Bachelors',
      'Masters',
      'Engineering',
      'PhD',
    ],

    universities: [],

    dependents: 'Yes',
    stayback: '18 Months',
    pr: 'Yes',
  },

  {
    name: 'Japan',
    image:
      'https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/jp.png',

    studyLevels: [
      'Nursing',
    ],

    universities: [],

    dependents: 'Yes',
    stayback: '1 Year',
    pr: 'No',
  },

  {
    name: 'Singapore',
    image:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/sg.png',

    studyLevels: [
      'Bachelors',
      'Masters',
      'MBA',
    ],

    universities: [],

    dependents: 'No',
    stayback: '1 Year',
    pr: 'No',
  },

];

export default function StudyAbroadPage() {

  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  return (

    <main className="bg-[#F7FAFC] min-h-screen">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-3 lg:px-8 py-3 flex items-center justify-between">

          <a href="/" className="flex items-center gap-2">

            <img
              src="/logo.png"
              alt="Eduaccess"
              className="w-[42px] h-[42px] lg:w-[60px] lg:h-[60px] object-contain"
            />

            <div>

              <h1 className="text-[18px] lg:text-2xl font-bold leading-none text-[#0B1F4D]">
                EDU<span className="text-[#D4AF37]">ACCESS</span>
              </h1>

              <p className="hidden lg:block text-xs text-gray-500 mt-1">
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

          <div className="flex lg:hidden items-center gap-4 text-[14px] font-semibold text-[#0B1F4D]">

            <a href="/">
              Home
            </a>

            <a href="/study" className="text-[#D4AF37]">
              Study
            </a>

            <a href="/visitor-visa">
              Visitor Visa
            </a>

            <a href="/connect-us">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="pt-40 pb-16 px-5">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h1 className="text-5xl font-bold text-[#0B1F4D]">
              Study Abroad
            </h1>

            <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto leading-8">
              Explore globally recognised universities, international career opportunities,
              post-study work options, and pathways to build your future across
              top destinations worldwide.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {countries.map((country, index) => (

              <div
                key={index}
                onClick={() => setSelectedCountry(country)}
                className="group cursor-pointer bg-white rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >

                <div className="relative h-[340px] overflow-hidden">

                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">

                    <div className="flex items-center gap-3">

                      <img
                        src={country.flag}
                        alt="flag"
                        className="w-8 h-6 rounded-sm object-cover"
                      />

                      <h2 className="text-3xl font-bold">
                        {country.name}
                      </h2>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* POPUP */}

      {selectedCountry && (

        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md overflow-y-auto p-4">

          <div className="relative bg-white w-full max-w-6xl mx-auto rounded-[35px] overflow-hidden shadow-2xl grid lg:grid-cols-2 my-10">

            {/* CLOSE BUTTON */}

            <button
              onClick={() => setSelectedCountry(null)}
              className="absolute top-5 right-5 z-50 bg-white w-12 h-12 rounded-full text-3xl shadow-xl"
            >
              ×
            </button>

            {/* LEFT */}

            <div className="relative min-h-[350px] lg:min-h-[750px]">

              <img
                src={selectedCountry.image}
                alt={selectedCountry.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-10 left-10 right-10 text-white">

                <div className="flex items-center gap-4">

                  <img
                    src={selectedCountry.flag}
                    alt="flag"
                    className="w-10 h-7 rounded-sm object-cover"
                  />

                  <h2 className="text-4xl lg:text-5xl font-bold">
                    {selectedCountry.name}
                  </h2>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="p-6 lg:p-10 bg-white overflow-y-auto">

              {/* STUDY LEVELS */}

              <div>

                <h3 className="text-3xl font-bold text-[#0B1F4D] mb-6">
                  What Can You Study?
                </h3>

                <div className="flex flex-wrap gap-4">

                  {selectedCountry.studyLevels.map((level: string, index: number) => (

                    <div
                      key={index}
                      className="bg-[#F7FAFC] px-6 py-3 rounded-full shadow font-semibold text-[#0B1F4D]"
                    >
                      {level}
                    </div>

                  ))}

                </div>

              </div>

              {/* UNIVERSITIES */}

              <div className="mt-12">

                <h3 className="text-3xl font-bold text-[#0B1F4D] mb-6">
                  Top Universities
                </h3>

                <div className="overflow-hidden w-full">

                <div className="flex gap-6 logo-slider w-max">

                    {[...selectedCountry.universities, ...selectedCountry.universities].map((logo: string, index: number) => (

                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-5 w-[180px] h-[110px] flex items-center justify-center flex-shrink-0"
                      >

                        <img
                          src={logo}
                          alt="University Logo"
                          className="max-h-[70px] max-w-[140px] object-contain"
                        />

                      </div>

                    ))}

                  </div>

                </div>

              </div>

              {/* INFO CARDS */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">

                <div className="bg-[#F7FAFC] rounded-3xl p-6 shadow text-center">

                  <h4 className="text-lg font-bold text-[#0B1F4D]">
                    Dependents Allowed
                  </h4>

                  <p className="text-[#D4AF37] text-2xl font-bold mt-4">
                    {selectedCountry.dependents}
                  </p>

                </div>

                <div className="bg-[#F7FAFC] rounded-3xl p-6 shadow text-center">

                  <h4 className="text-lg font-bold text-[#0B1F4D]">
                    Stayback Option
                  </h4>

                  <p className="text-[#D4AF37] text-2xl font-bold mt-4">
                    {selectedCountry.stayback}
                  </p>

                </div>

                <div className="bg-[#F7FAFC] rounded-3xl p-6 shadow text-center">

                  <h4 className="text-lg font-bold text-[#0B1F4D]">
                    PR Possibility
                  </h4>

                  <p className="text-[#D4AF37] text-2xl font-bold mt-4">
                    {selectedCountry.pr}
                  </p>

                </div>

              </div>

              {/* APPLY BUTTON */}

              <div className="pt-10">

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