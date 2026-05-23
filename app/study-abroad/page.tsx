'use client';

import { useMemo, useState } from 'react';

const countries = [

  {
    name: 'Australia',
    image:
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/au.png',
    location: 'Top Universities & PR Opportunities',
    highlights: [
      'Top Ranked Universities',
      'Post Study Work Visa',
      'Scholarship Opportunities',
      'High Visa Success Rate',
    ],
  },

  {
    name: 'New Zealand',
    image:
      'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/nz.png',
    location: 'Affordable Global Education',
    highlights: [
      'Globally Recognised Degrees',
      'Safe Student Environment',
      'Scholarships Available',
      'Career Opportunities',
    ],
  },

  {
    name: 'USA',
    image:
      'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/us.png',
    location: 'World Leading Universities',
    highlights: [
      'STEM Opportunities',
      'Top Research Universities',
      'Scholarships Available',
      'Global Career Exposure',
    ],
  },

  {
    name: 'United Kingdom',
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/gb.png',
    location: '1 Year Masters Programs',
    highlights: [
      'Graduate Route Visa',
      'Top UK Universities',
      'Short Duration Degrees',
      'Strong Career Opportunities',
    ],
  },

  {
    name: 'Canada',
    image:
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/ca.png',
    location: 'Study & PR Pathways',
    highlights: [
      'Affordable Education',
      'PR Opportunities',
      'Top Colleges & Universities',
      'High Employability',
    ],
  },

  {
    name: 'France',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/fr.png',
    location: 'European Education Hub',
    highlights: [
      'Affordable Tuition',
      'Fashion & Business Courses',
      'Scholarship Opportunities',
      'International Exposure',
    ],
  },

  {
    name: 'Germany',
    image:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/de.png',
    location: 'Low Tuition Universities',
    highlights: [
      'Public Universities',
      'Engineering Excellence',
      'Research Opportunities',
      'Global Recognition',
    ],
  },

  {
    name: 'Japan',
    image:
      'https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/jp.png',
    location: 'Technology & Innovation',
    highlights: [
      'Advanced Technology',
      'Scholarships Available',
      'Global Exposure',
      'Safe Environment',
    ],
  },

  {
    name: 'Singapore',
    image:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1400&auto=format&fit=crop',
    flag: 'https://flagcdn.com/w40/sg.png',
    location: 'Asia’s Education Hub',
    highlights: [
      'Top Asian Universities',
      'Business Opportunities',
      'Global Exposure',
      'Industry Connections',
    ],
  },

];

export default function StudyAbroadPage() {

  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [search, setSearch] = useState('');

  const displayedCountries = useMemo(() => {

    if (search.trim() !== '') {

      return countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );

    }

    return countries;

  }, [search]);

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

      <section className="pt-40 pb-16 px-5">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <h1 className="text-5xl font-bold text-[#0B1F4D]">
              Study Abroad
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Explore Top Study Destinations Worldwide
            </p>

          </div>

          <div className="max-w-2xl mx-auto mb-14">

            <input
              type="text"
              placeholder="Search Countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 text-lg outline-none shadow-lg"
            />

          </div>

          {/* COUNTRY CARDS */}

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
                    className="w-full h-full object-cover transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">

                    <div className="inline-block bg-[#D4AF37] text-[#0B1F4D] px-4 py-2 rounded-full text-sm font-bold mb-4">
                      Study Abroad
                    </div>

                    <h2 className="text-2xl font-bold leading-tight text-white drop-shadow-2xl">
                      {country.name}
                    </h2>

                    <div className="flex items-center gap-3 mt-4">

                      <img
                        src={country.flag}
                        alt="flag"
                        className="w-7 h-5 rounded-sm object-cover"
                      />

                      <p className="text-gray-100 text-base font-medium">
                        {country.location}
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

      {selectedCountry && (

        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-5">

          <div className="relative bg-white w-full max-w-5xl rounded-[35px] overflow-hidden shadow-2xl grid lg:grid-cols-2">

            <button
              onClick={() => setSelectedCountry(null)}
              className="absolute top-5 right-5 z-50 bg-white w-12 h-12 rounded-full text-3xl shadow-xl"
            >
              ×
            </button>

            {/* LEFT */}

            <div className="relative h-full min-h-[500px]">

              <img
                src={selectedCountry.image}
                alt={selectedCountry.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-10 left-10 right-10 text-white">

                <h2 className="text-5xl font-bold">
                  {selectedCountry.name}
                </h2>

                <div className="flex items-center gap-4 mt-5">

                  <img
                    src={selectedCountry.flag}
                    className="w-8 h-6 rounded-sm object-cover"
                  />

                  <p className="text-xl text-gray-200">
                    {selectedCountry.location}
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="p-10 flex flex-col justify-between">

              <div>

                <h3 className="text-3xl font-bold text-[#0B1F4D] mb-8">
                  Why Study In {selectedCountry.name}?
                </h3>

                <div className="grid grid-cols-2 gap-5">

                  {selectedCountry.highlights.map((highlight: string, index: number) => (

                    <div
                      key={index}
                      className="bg-[#F7FAFC] rounded-2xl p-6 text-center shadow"
                    >

                      <p className="font-semibold text-[#0B1F4D]">
                        {highlight}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

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