'use client';

export default function VisitorVisaPage() {
  const visas = [
    {
      country: 'United States',
      flag: 'https://flagcdn.com/w80/us.png',
      image:
        'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1400&auto=format&fit=crop',
      visa: 'B1/B2 Visitor Visa',
      validity: 'Up to 10 Years',
      stay: 'Up to 6 Months Per Visit',
      processing: 'Depends on Interview Slot',
      interview: 'Mandatory',
      travel: 'April to June & September to November',
      description:
        'Experience iconic cities, luxury shopping, business travel, entertainment hubs and unforgettable tourism experiences.',
      why:
        'Visit New York, Las Vegas, Miami, Los Angeles and explore world-famous attractions and premium lifestyle destinations.',
      assistance:
        'We assist with DS-160 guidance, interview slot bookings, profile review and premium visa consultation.',
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
        'Explore breathtaking mountains, luxury tourism, vibrant multicultural cities and natural beauty.',
      why:
        'Visit Toronto, Vancouver, Niagara Falls and enjoy premium tourism experiences and family visits.',
      assistance:
        'We provide application guidance, profile review and complete visitor visa assistance.',
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
        'Enjoy beaches, luxury lifestyle, vibrant cities and unforgettable adventure tourism.',
      why:
        'Visit Sydney Opera House, Melbourne, Gold Coast and Australia’s world-famous coastlines.',
      assistance:
        'Eduaccess helps with visitor visa filing, profile assistance and documentation guidance.',
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
        'Explore royal heritage, luxury shopping, iconic architecture and historic destinations.',
      why:
        'Visit London, Scotland and premium European travel gateways through the UK.',
      assistance:
        'We assist with complete visitor visa filing and application support.',
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
        'Experience cherry blossoms, advanced cities, rich culture and luxury tourism.',
      why:
        'Visit Tokyo, Osaka, Kyoto and explore Japan’s world-famous culture and technology.',
      assistance:
        'Eduaccess provides complete tourist visa assistance and consultation.',
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
        'Travel across multiple European countries with one Schengen Visa.',
      why:
        'Explore Paris, Switzerland, Italy, Germany and Europe’s luxury tourism experiences.',
      assistance:
        'We help with visa filing, itinerary guidance and profile consultation.',
    },

    {
      country: 'New Zealand',
      flag: 'https://flagcdn.com/w80/nz.png',
      image:
        'https://images.unsplash.com/photo-1469521669194-babb45599def?q=80&w=1400&auto=format&fit=crop',
      visa: 'Visitor Visa',
      validity: 'Up to 12 Months',
      stay: 'Up to 6 Months',
      processing: '20–40 Days',
      interview: 'Not Required',
      travel: 'December to March',
      description:
        'Experience nature, adventure tourism and premium travel experiences.',
      why:
        'Visit Auckland, Queenstown and New Zealand’s scenic landscapes.',
      assistance:
        'Eduaccess offers complete visitor visa consultation and filing support.',
    },

    {
      country: 'China',
      flag: 'https://flagcdn.com/w80/cn.png',
      image:
        'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1400&auto=format&fit=crop',
      visa: 'Tourist Visa',
      validity: '30–90 Days',
      stay: 'Up to 30 Days',
      processing: '5–10 Days',
      interview: 'Usually Not Required',
      travel: 'April to May & September to October',
      description:
        'Explore rich heritage, advanced cities and luxury shopping experiences.',
      why:
        'Visit Beijing, Shanghai and the Great Wall of China.',
      assistance:
        'We assist with complete tourist visa application guidance.',
    },

    {
      country: 'Vietnam',
      flag: 'https://flagcdn.com/w80/vn.png',
      image:
        'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1400&auto=format&fit=crop',
      visa: 'Tourist Visa',
      validity: '30–90 Days',
      stay: 'Up to 30 Days',
      processing: '5–7 Days',
      interview: 'Not Required',
      travel: 'November to April',
      description:
        'Enjoy beaches, luxury resorts, nightlife and affordable tourism.',
      why:
        'Visit Hanoi, Ho Chi Minh City and Vietnam’s stunning coastal destinations.',
      assistance:
        'Eduaccess provides complete visa filing support and consultation.',
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
                className="group [perspective:2000px] h-[650px]"
              >

                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* FRONT */}

                  <div className="absolute inset-0 rounded-[35px] overflow-hidden shadow-2xl [backface-visibility:hidden]">

                    <img
                      src={visa.image}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/50" />

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

                  {/* BACK */}

                  <div className="absolute inset-0 rounded-[35px] bg-white p-8 shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">

                    <div className="flex items-center gap-3 mb-6">

                      <img
                        src={visa.flag}
                        className="w-12 h-12 rounded-full"
                      />

                      <h2 className="text-3xl font-bold text-[#0B1F4D]">
                        {visa.country}
                      </h2>

                    </div>

                    <div className="space-y-4 text-gray-600">

                      <p>
                        <span className="font-semibold text-[#0B1F4D]">
                          Visa Type:
                        </span> {visa.visa}
                      </p>

                      <p>
                        <span className="font-semibold text-[#0B1F4D]">
                          Visa Validity:
                        </span> {visa.validity}
                      </p>

                      <p>
                        <span className="font-semibold text-[#0B1F4D]">
                          Stay Duration:
                        </span> {visa.stay}
                      </p>

                      <p>
                        <span className="font-semibold text-[#0B1F4D]">
                          Processing Time:
                        </span> {visa.processing}
                      </p>

                      <p>
                        <span className="font-semibold text-[#0B1F4D]">
                          Interview:
                        </span> {visa.interview}
                      </p>

                      <p>
                        <span className="font-semibold text-[#0B1F4D]">
                          Best Time To Travel:
                        </span> {visa.travel}
                      </p>

                    </div>

                    {/* WHY VISIT */}

                    <div className="mt-8 bg-[#F7FAFC] rounded-2xl p-5">

                      <h4 className="font-bold text-[#0B1F4D] mb-3">
                        Why Visit?
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        {visa.why}
                      </p>

                    </div>

                    {/* ASSISTANCE */}

                    <div className="mt-6 bg-blue-50 rounded-2xl p-5">

                      <h4 className="font-bold text-[#0B1F4D] mb-3">
                        Eduaccess Assistance
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        {visa.assistance}
                      </p>

                    </div>

                    {/* BUTTON */}

                    <a
                      href="/#contact"
                      className="mt-8 inline-block bg-[#0B1F4D] hover:bg-[#102A63] text-white px-6 py-3 rounded-full font-semibold transition"
                    >
                      Apply Now
                    </a>

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