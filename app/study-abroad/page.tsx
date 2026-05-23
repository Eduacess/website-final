'use client';

import { useMemo, useState } from 'react';

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

    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Monash_University_logo.svg/512px-Monash_University_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deakin_University_logo.svg/512px-Deakin_University_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/University_of_Melbourne_logo.svg/512px-University_of_Melbourne_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/39/RMIT_University_Logo.svg/512px-RMIT_University_Logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Macquarie_University_logo.svg/512px-Macquarie_University_logo.svg.png',
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

    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/University_of_Auckland_logo.svg/512px-University_of_Auckland_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Massey_University_logo.svg/512px-Massey_University_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/University_of_Waikato_logo.svg/512px-University_of_Waikato_logo.svg.png',
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

    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/512px-Harvard_University_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Stanford_University_seal_2003.svg/512px-Stanford_University_seal_2003.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/University_of_California%2C_Berkeley_logo.svg/512px-University_of_California%2C_Berkeley_logo.svg.png',
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

    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/University_of_Oxford_logo.svg/512px-University_of_Oxford_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/University_of_Cambridge_logo.svg/512px-University_of_Cambridge_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/King%27s_College_London_logo.svg/512px-King%27s_College_London_logo.svg.png',
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

    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/University_of_Toronto_coat_of_arms.svg/512px-University_of_Toronto_coat_of_arms.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/University_of_British_Columbia_logo.svg/512px-University_of_British_Columbia_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/McGill_University_CoA.svg/512px-McGill_University_CoA.svg.png',
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

    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sorbonne_University_logo.svg/512px-Sorbonne_University_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/HEC_Paris.svg/512px-HEC_Paris.svg.png',
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

    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/TUM_Logo.svg/512px-TUM_Logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/LMU_Muenchen_Logo.svg/512px-LMU_Muenchen_Logo.svg.png',
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

    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/University_of_Tokyo_logo.svg/512px-University_of_Tokyo_logo.svg.png',
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

    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/NUS_coat_of_arms.svg/512px-NUS_coat_of_arms.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Nanyang_Technological_University_logo.svg/512px-Nanyang_Technological_University_logo.svg.png',
    ],

    dependents: 'No',
    stayback: '1 Year',
    pr: 'No',
  },

];

export default function StudyAbroadPage() {

  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const displayedCountries = useMemo(() => {
    return countries;
  }, []);

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

          <div className="text-center mb-16">

            <h1 className="text-5xl font-bold text-[#0B1F4D]">
              Study Abroad
            </h1>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {displayedCountries.map((country, index) => (

              <div
                key={index}
                onClick={() => setSelectedCountry(country)}
                className="group cursor-pointer bg-white rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >

                <div className="relative h-[340px] overflow-hidden">

                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">

                    <div className="flex items-center gap-3">

                      <img
                        src={country.flag}
                        alt="flag"
                        className="w-8 h-6 rounded-sm object-cover"
                      />

                      <h2 className="text-3xl font-bold text-white">
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

        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-5">

          <div className="relative bg-white w-full max-w-6xl rounded-[35px] overflow-hidden shadow-2xl grid lg:grid-cols-2">

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

            <div className="p-10 overflow-y-auto flex flex-col justify-between">

              <div>

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

                <div className="mt-12 overflow-hidden">

                  <h3 className="text-3xl font-bold text-[#0B1F4D] mb-6">
                    Top Universities
                  </h3>

                  <div className="flex gap-8 animate-[scroll_20s_linear_infinite] whitespace-nowrap">

                    {[...selectedCountry.universityLogos, ...selectedCountry.universityLogos].map((logo: string, index: number) => (

                      <div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl p-5 min-w-[160px] h-[100px] flex items-center justify-center"
                      >

                        <img
                          src={logo}
                          alt="University Logo"
                          className="max-h-[60px] object-contain"
                        />

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

              </div>

              {/* BUTTON */}

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