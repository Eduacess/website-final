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
      'Monash University',
      'Deakin University',
      'University of Melbourne',
      'RMIT University',
      'Macquarie University',
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
      'University of Auckland',
      'University of Waikato',
      'Massey University',
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
      'Harvard University',
      'Stanford University',
      'University of California Berkeley',
      'MIT',
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
      'University of Oxford',
      'University of Cambridge',
      'King’s College London',
      'University of Manchester',
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
      'University of Toronto',
      'University of British Columbia',
      'McGill University',
      'Concordia University',
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

    universities: [
      'HEC Paris',
      'Sorbonne University',
    ],

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

    universities: [
      'Technical University of Munich',
      'LMU Munich',
    ],

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

    universities: [
      'University of Tokyo',
    ],

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

    universities: [
      'National University of Singapore',
      'Nanyang Technological University',
    ],

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

          {/* COUNTRY CARDS */}

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

        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md overflow-y-auto p-5">

          <div className="relative bg-white w-full max-w-6xl mx-auto rounded-[35px] overflow-hidden shadow-2xl grid lg:grid-cols-2 my-10">

            {/* CLOSE BUTTON */}

            <button
              onClick={() => setSelectedCountry(null)}
              className="absolute top-5 right-5 z-50 bg-white w-12 h-12 rounded-full text-3xl shadow-xl"
            >
              ×
            </button>

            {/* LEFT */}

            <div className="relative min-h-[750px]">

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

                  <h2 className="text-5xl font-bold">
                    {selectedCountry.name}
                  </h2>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="p-10 bg-white">

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

                <div className="flex flex-wrap gap-5">

                  {selectedCountry.universities.map((university: string, index: number) => (

                    <div
                      key={index}
                      className="bg-[#F7FAFC] rounded-2xl shadow px-6 py-5 min-w-[220px] flex items-center justify-center"
                    >

                      <p className="text-center font-bold text-[#0B1F4D] text-lg leading-7">
                        {university}
                      </p>

                    </div>

                  ))}

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