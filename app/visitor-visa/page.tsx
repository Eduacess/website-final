'use client';

import { useState } from 'react';

export default function VisitorVisaPage() {

  const [selectedVisa, setSelectedVisa] = useState<any>(null);

  const visas = [

    {
      country: 'United States',
      flag: 'https://flagcdn.com/w80/us.png',
      image:
        'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1400&auto=format&fit=crop',
      visa: 'B1/B2 Visitor Visa',
      validity: 'Up to 10 Years',
      stay: 'Up to 6 Months',
      processing: 'Depends on Interview Slot',
      interview: 'Mandatory',
      travel: 'April to June & September to November',
      description:
        'Luxury tourism, business travel and world-famous attractions.',
      why:
        'Visit New York, Miami, Las Vegas and Los Angeles.',
      assistance:
        'DS-160 guidance, interview slot assistance and premium consultation.',
    },

    {
      country: 'Canada',
      flag: 'https://flagcdn.com/w80/ca.png',
      image:
        'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1400&auto=format&fit=crop',
      visa: 'Visitor Visa',
      validity: 'Up to 10 Years',
      stay: 'Up to 6 Months',
      processing: '30–60 Days',
      interview: 'Usually Not Required',
      travel: 'May to September',
      description:
        'Luxury tourism, scenic landscapes and premium lifestyle.',
      why:
        'Explore Toronto, Vancouver and Niagara Falls.',
      assistance:
        'Complete visitor visa guidance and consultation.',
    },

    {
      country: 'Australia',
      flag: 'https://flagcdn.com/w80/au.png',
      image:
        'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1400&auto=format&fit=crop',
      visa: 'Subclass 600 Visitor Visa',
      validity: 'Up to 12 Months',
      stay: 'Up to 3 Months',
      processing: '20–35 Days',
      interview: 'Not Required',
      travel: 'September to November & March to May',
      description:
        'Luxury beaches and premium tourism experiences.',
      why:
        'Visit Sydney, Melbourne and Gold Coast.',
      assistance:
        'Premium visa filing and consultation support.',
    },

    {
      country: 'United Kingdom',
      flag: 'https://flagcdn.com/w80/gb.png',
      image:
        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1400&auto=format&fit=crop',
      visa: 'Standard Visitor Visa',
      validity: 'Up to 6 Months',
      stay: 'Up to 6 Months',
      processing: '15–25 Days',
      interview: 'Usually Not Required',
      travel: 'May to September',
      description:
        'Historic destinations and luxury shopping.',
      why:
        'Explore London and iconic UK landmarks.',
      assistance:
        'Premium visitor visa consultation.',
    },

    {
      country: 'Japan',
      flag: 'https://flagcdn.com/w80/jp.png',
      image:
        'https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1400&auto=format&fit=crop',
      visa: 'Tourist Visa',
      validity: '90 Days',
      stay: 'Up to 90 Days',
      processing: '5–10 Days',
      interview: 'Not Required',
      travel: 'March to May & October to November',
      description:
        'Cherry blossoms and futuristic cities.',
      why:
        'Visit Tokyo, Osaka and Kyoto.',
      assistance:
        'Complete tourist visa support.',
    },

    {
      country: 'Europe',
      flag: 'https://flagcdn.com/w80/eu.png',
      image:
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1400&auto=format&fit=crop',
      visa: 'Schengen Visa',
      validity: 'Up to 90 Days',
      stay: 'Up to 90 Days',
      processing: '15–30 Days',
      interview: 'Depends on Embassy',
      travel: 'April to June & September to October',
      description:
        'Travel multiple European countries with one visa.',
      why:
        'Explore Paris, Switzerland and Italy.',
      assistance:
        'Visa filing and itinerary guidance.',
    },

    {
      country: 'Vietnam',
      flag: 'https://flagcdn.com/w80/vn.png',
      image:
        'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1400&auto=format&fit=crop',
      visa: 'Tourist Visa',
      validity: '30 Days',
      stay: '30 Days',
      processing: '5–7 Days',
      interview: 'Not Required',
      travel: 'November to April',
      description:
        'Affordable luxury travel and vibrant culture.',
      why:
        'Visit Hanoi and Ho Chi Minh City.',
      assistance:
        'Tourist visa filing and support.',
    },

    {
      country: 'China',
      flag: 'https://flagcdn.com/w80/cn.png',
      image:
        'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1400&auto=format&fit=crop',
      visa: 'Tourist Visa',
      validity: '30–90 Days',
      stay: '30 Days',
      processing: '7–15 Days',
      interview: 'Depends on Embassy',
      travel: 'April to May & September to October',
      description:
        'Historic culture and futuristic cities.',
      why:
        'Visit Beijing, Shanghai and the Great Wall.',
      assistance:
        'Premium tourist visa guidance.',
    },

  ];

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

      <section className="pt-40 pb-20 text-center px-5">

        <p className="text-[#D4AF37] uppercase tracking-[4px] font-semibold">
          Premium Visitor Visa Services
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold text-[#0B1F4D] mt-6 leading-tight">

          Explore The World
          <span className="block text-[#D4AF37]">
            With Eduaccess
          </span>

        </h1>

        <p className="text-gray-600 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">

          Premium visitor visa consultation and complete travel assistance
          for the world’s most preferred destinations.

        </p>

      </section>

      {/* VISA GRID */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {visas.map((visa, index) => (

              <div
                key={index}
                onClick={() => setSelectedVisa(visa)}
                className="group cursor-pointer bg-white rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >

                <div className="relative h-[500px] overflow-hidden">

                  <img
                    src={visa.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/45" />

                  <div className="absolute bottom-8 left-8 right-8 text-white">

                    <div className="flex items-center gap-3 mb-5">

                      <img
                        src={visa.flag}
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />

                      <h2 className="text-4xl font-bold">
                        {visa.country}
                      </h2>

                    </div>

                    <p className="text-lg leading-relaxed text-gray-200">
                      {visa.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* POPUP */}

      {selectedVisa && (

        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-5">

          <div className="relative bg-white w-full max-w-6xl h-[88vh] rounded-[40px] overflow-hidden shadow-2xl grid lg:grid-cols-2">

            {/* CLOSE */}

            <button
              onClick={() => setSelectedVisa(null)}
              className="absolute top-5 right-5 z-50 bg-white text-[#0B1F4D] w-12 h-12 rounded-full shadow-xl text-3xl hover:scale-110 transition"
            >
              ×
            </button>

            {/* LEFT */}

            <div className="relative h-full">

              <img
                src={selectedVisa.image}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-10 left-10 right-10 text-white">

                <div className="flex items-center gap-4 mb-5">

                  <img
                    src={selectedVisa.flag}
                    className="w-14 h-14 rounded-full border-2 border-white"
                  />

                  <h2 className="text-5xl font-bold">
                    {selectedVisa.country}
                  </h2>

                </div>

                <p className="text-lg leading-relaxed text-gray-200">
                  {selectedVisa.description}
                </p>

              </div>

            </div>

            {/* RIGHT */}

            <div className="h-full overflow-y-auto p-10 flex flex-col justify-between">

              <div>

                <div className="bg-[#F7FAFC] rounded-[30px] p-7">

                  <h3 className="text-3xl font-bold text-[#0B1F4D] mb-6">
                    Visa Information
                  </h3>

                  <div className="space-y-4 text-gray-700 text-[16px]">

                    <p><span className="font-bold text-[#0B1F4D]">Visa Type:</span> {selectedVisa.visa}</p>

                    <p><span className="font-bold text-[#0B1F4D]">Visa Validity:</span> {selectedVisa.validity}</p>

                    <p><span className="font-bold text-[#0B1F4D]">Stay Duration:</span> {selectedVisa.stay}</p>

                    <p><span className="font-bold text-[#0B1F4D]">Processing Time:</span> {selectedVisa.processing}</p>

                    <p><span className="font-bold text-[#0B1F4D]">Interview:</span> {selectedVisa.interview}</p>

                    <p><span className="font-bold text-[#0B1F4D]">Best Time To Travel:</span> {selectedVisa.travel}</p>

                  </div>

                </div>

                <div className="mt-6 bg-blue-50 rounded-[30px] p-7">

                  <h3 className="text-3xl font-bold text-[#0B1F4D] mb-4">
                    Why Visit?
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    {selectedVisa.why}
                  </p>

                </div>

                <div className="mt-6 bg-yellow-50 rounded-[30px] p-7">

                  <h3 className="text-3xl font-bold text-[#0B1F4D] mb-4">
                    Eduaccess Assistance
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    {selectedVisa.assistance}
                  </p>

                </div>

              </div>

              <div className="pt-6">

                <a
                  href="/connect-us"
                  className="w-full block text-center bg-[#0B1F4D] hover:bg-[#102A63] text-white py-5 rounded-full text-lg font-semibold transition shadow-xl"
                >
                  Apply Now
                </a>

              </div>

            </div>

          </div>

        </div>

      )}

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