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

      <section className="pt-40 pb-16 px-5">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <h1 className="text-5xl font-bold text-[#0B1F4D]">
              Study In India
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Explore International Universities In India
            </p>

          </div>

          <div className="max-w-2xl mx-auto mb-14">

            <input
              type="text"
              placeholder="Search Universities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 text-lg outline-none shadow-lg"
            />

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {displayedUniversities.map((university: any, index) => (

              <div
                key={index}
                onClick={() => setSelectedUniversity(university)}
                className="group cursor-pointer bg-white rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >

                <div className="relative h-[340px] overflow-hidden">

                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

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

  <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md overflow-y-auto p-5">

    <div className="relative bg-white w-full max-w-6xl mx-auto rounded-[35px] overflow-hidden shadow-2xl grid lg:grid-cols-2 my-10">

      {/* CLOSE BUTTON */}

      <button
        onClick={() => setSelectedUniversity(null)}
        className="absolute top-5 right-5 z-50 bg-white w-12 h-12 rounded-full text-3xl shadow-xl"
      >
        ×
      </button>

      {/* LEFT */}

      <div className="relative min-h-[750px]">

        <img
          src={selectedUniversity.image}
          alt={selectedUniversity.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-10 right-10 text-white">

          <div className="flex items-center gap-4">

            <img
              src={selectedUniversity.flag}
              alt="flag"
              className="w-10 h-7 rounded-sm object-cover"
            />

            <h2 className="text-5xl font-bold">
              {selectedUniversity.name}
            </h2>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="p-10 bg-white overflow-y-auto">

        {/* PROGRAMS */}

        <div>

          <h3 className="text-3xl font-bold text-[#0B1F4D] mb-6">
            Programs Available
          </h3>

          <div className="flex flex-wrap gap-4">

            {selectedUniversity.programs?.ug?.map((program: string, index: number) => (

              <div
                key={index}
                className="bg-[#F7FAFC] px-6 py-3 rounded-full shadow font-semibold text-[#0B1F4D]"
              >
                {program}
              </div>

            ))}

            {selectedUniversity.programs?.pg?.map((program: string, index: number) => (

              <div
                key={`pg-${index}`}
                className="bg-[#D4AF37] text-[#0B1F4D] px-6 py-3 rounded-full shadow font-semibold"
              >
                {program}
              </div>

            ))}

          </div>

        </div>

        {/* BENEFITS */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">

          {selectedUniversity.benefits?.map((benefit: any, index: number) => (

            <div
              key={index}
              className="bg-[#F7FAFC] rounded-3xl p-6 shadow text-center"
            >

              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-14 h-14 mx-auto mb-4 object-contain"
              />

              <h4 className="text-lg font-bold text-[#0B1F4D]">
                {benefit.title}
              </h4>

            </div>

          ))}

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