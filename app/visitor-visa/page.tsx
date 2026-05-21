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
        'Luxury tourism, business travel, shopping and world-famous attractions.',
      why:
        'Visit New York, Las Vegas, Miami and Los Angeles for unforgettable experiences.',
      assistance:
        'We assist with DS-160 guidance, interview slots and complete consultation.',
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
        'Premium tourism, scenic nature, luxury cities and family travel.',
      why:
        'Explore Toronto, Vancouver, Niagara Falls and breathtaking landscapes.',
      assistance:
        'Complete visitor visa guidance and profile consultation.',
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
        'Luxury beaches, premium lifestyle and adventure experiences.',
      why:
        'Visit Sydney, Melbourne and Gold Coast for world-class tourism.',
      assistance:
        'Eduaccess assists with visa filing and consultation.',
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
        'Historic destinations, luxury shopping and royal experiences.',
      why:
        'Explore London, Scotland and iconic UK landmarks.',
      assistance:
        'Premium visitor visa assistance and consultation.',
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
        'Cherry blossoms, advanced cities and premium tourism.',
      why:
        'Visit Tokyo, Osaka and Kyoto for unforgettable experiences.',
      assistance:
        'Complete tourist visa guidance and application support.',
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
        'Explore Paris, Switzerland, Italy and luxury European tourism.',
      assistance:
        'Visa filing, itinerary guidance and profile consultation.',
    },
  ];

  return (
    <main className="bg-[#F7FAFC] min-h-screen">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex items-center justify-between">

          {/* LOGO */}

          <a href="/" className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="Eduaccess"
              className="w-[60px] h-[60px] object-contain"
            />

            <div>

              <h1 className="text-2xl font-bold tracking-wide text-[#0B1F4D]">
                EDU<span className="text-[#D4AF37]">ACCESS</span>
              </h1>

              <p className="text-xs text-gray-500">
                Your Access To Education
              </p>

            </div>

          </a>

          {/* NAVIGATION */}

          <div className="hidden lg:flex items-center gap-12 font-medium text-[16px] text-[#0B1F4D]">

            <a href="/" className="hover:text-[#D4AF37] transition">
              Home
            </a>

            <a href="/#study" className="hover:text-[#D4AF37] transition">
              Study
            </a>

            <a href="/visitor-visa" className="text-[#D4AF37]">
              Visitor Visa
            </a>

            <a href="/#contact" className="hover:text-[#D4AF37] transition">
              Connect
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

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-5">

          <div className="bg-white max-w-3xl w-full rounded-[40px] overflow-hidden shadow-2xl relative max-h-[95vh] overflow-y-auto">

            {/* CLOSE */}

            <button
              onClick={() => setSelectedVisa(null)}
              className="absolute top-5 right-5 bg-white w-10 h-10 rounded-full shadow-lg text-2xl z-20"
            >
              ×
            </button>

            {/* IMAGE */}

            <div className="relative h-[320px]">

              <img
                src={selectedVisa.image}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-8 left-8 text-white">

                <div className="flex items-center gap-4 mb-4">

                  <img
                    src={selectedVisa.flag}
                    className="w-14 h-14 rounded-full border-2 border-white"
                  />

                  <h2 className="text-5xl font-bold">
                    {selectedVisa.country}
                  </h2>

                </div>

                <p className="text-lg text-gray-200 max-w-2xl">
                  {selectedVisa.description}
                </p>

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-10">

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-[#F7FAFC] rounded-3xl p-6">

                  <h3 className="text-2xl font-bold text-[#0B1F4D] mb-5">
                    Visa Information
                  </h3>

                  <div className="space-y-4 text-gray-600">

                    <p><span className="font-semibold text-[#0B1F4D]">Visa Type:</span> {selectedVisa.visa}</p>

                    <p><span className="font-semibold text-[#0B1F4D]">Visa Validity:</span> {selectedVisa.validity}</p>

                    <p><span className="font-semibold text-[#0B1F4D]">Stay Duration:</span> {selectedVisa.stay}</p>

                    <p><span className="font-semibold text-[#0B1F4D]">Processing Time:</span> {selectedVisa.processing}</p>

                    <p><span className="font-semibold text-[#0B1F4D]">Interview:</span> {selectedVisa.interview}</p>

                    <p><span className="font-semibold text-[#0B1F4D]">Best Time To Travel:</span> {selectedVisa.travel}</p>

                  </div>

                </div>

                <div className="bg-blue-50 rounded-3xl p-6">

                  <h3 className="text-2xl font-bold text-[#0B1F4D] mb-5">
                    Why Visit?
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {selectedVisa.why}
                  </p>

                  <h3 className="text-2xl font-bold text-[#0B1F4D] mt-8 mb-5">
                    Eduaccess Assistance
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {selectedVisa.assistance}
                  </p>

                </div>

              </div>

              {/* BUTTON */}

              <a
                href="/#contact"
                className="mt-10 inline-block bg-[#0B1F4D] hover:bg-[#102A63] text-white px-8 py-4 rounded-full font-semibold transition"
              >
                Apply Now
              </a>

            </div>

          </div>

        </div>

      )}

      {/* CONTACT */}

<section
  id="contact"
  className="py-24 bg-[#F7FAFC]"
>

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-[#0B1F4D]">
        Connect With Eduaccess
      </h2>

      <p className="text-gray-600 mt-5 text-lg">
        Start your global journey with premium guidance.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* CONTACT CARD */}

      <div className="bg-white rounded-[35px] p-10 shadow-xl border border-gray-100">

        <div className="space-y-10">

          {/* PHONE */}

          <div className="flex gap-5">

            <div className="bg-yellow-100 p-4 rounded-2xl h-fit">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#D4AF37]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>

            </div>

            <div>

              <h3 className="text-2xl font-bold text-[#0B1F4D]">
                Phone
              </h3>

              <a
                href="tel:+919998920644"
                className="text-gray-600 mt-2 block hover:text-[#D4AF37]"
              >
                +91 99989 20644
              </a>

            </div>

          </div>

          {/* EMAIL */}

          <div className="flex gap-5">

            <div className="bg-blue-100 p-4 rounded-2xl h-fit">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#0B1F4D]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m8 0l-8 0m8 0l4-4m-4 4l4 4"
                />
              </svg>

            </div>

            <div>

              <h3 className="text-2xl font-bold text-[#0B1F4D]">
                Email
              </h3>

              <a
                href="mailto:connect.eduaccessess@outlook.com"
                className="text-gray-600 mt-2 block hover:text-[#D4AF37]"
              >
                connect.eduaccessess@outlook.com
              </a>

            </div>

          </div>

          {/* ADDRESS */}

          <div className="flex gap-5">

            <div className="bg-yellow-100 p-4 rounded-2xl h-fit">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#D4AF37]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.243-4.243a8 8 0 1111.313 0z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

            </div>

            <div>

              <h3 className="text-2xl font-bold text-[#0B1F4D]">
                Address
              </h3>

              <p className="text-gray-600 mt-2 leading-relaxed">

                KB House, Third Floor,
                Next to Gopinathji Honda Showroom,
                Vadodara, Gujarat

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* GOOGLE MAP */}

      <div className="rounded-[35px] overflow-hidden shadow-xl border border-gray-200 h-[500px]">

        <iframe
          src="https://www.google.com/maps?q=KB%20House%20Vadodara&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />

      </div>

    </div>

  </div>

</section>


      {/* FOOTER */}

      <footer className="bg-[#0B1F4D] text-white py-10 text-center">

        <p>
          © 2026 EDUACCESS. All Rights Reserved.
        </p>

      </footer>

      {/* FLOATING WHATSAPP */}

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