'use client';

export default function StudyPage() {

  return (

    <main className="bg-[#F7FAFC] min-h-screen overflow-hidden text-[#0B1F4D] relative">

      {/* SMALL WORLD MAP */}

      <div className="absolute top-[110px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none z-0">

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          className="w-full h-full object-contain opacity-[0.12]"
        />

        {/* GLOWING COUNTRIES */}

        <div className="glow canada" />
        <div className="glow usa" />
        <div className="glow uk" />
        <div className="glow europe" />
        <div className="glow dubai" />
        <div className="glow india" />
        <div className="glow singapore" />
        <div className="glow malaysia" />
        <div className="glow japan" />
        <div className="glow australia" />
        <div className="glow nz" />

      </div>

      {/* NAVBAR */}

<nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200">

<div className="max-w-7xl mx-auto px-3 lg:px-8 py-3 flex items-center justify-between">

  {/* LOGO */}

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

  <div className="flex lg:hidden items-center gap-4 text-[15px] font-semibold text-[#0B1F4D]">

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

      <section className="relative z-10 pt-44 pb-24 text-center px-5">

        <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
          Global Education Ecosystem
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold mt-8 leading-tight text-[#0B1F4D]">

          Explore
          <span className="block text-[#D4AF37]">
            Global Education
          </span>

        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-xl mt-10 leading-relaxed">

          Discover international education opportunities,
          online learning and global degree programs with Eduaccess.

        </p>

      </section>

      {/* STUDY CARDS */}

      <section className="relative z-10 pb-28">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* STUDY ABROAD */}

            <a
              href="/study-abroad"
              className="group relative rounded-[40px] overflow-hidden h-[550px] shadow-2xl"
            >

              <img
                src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1400&auto=format&fit=crop"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute bottom-10 left-10 right-10 text-white">

                <h2 className="text-5xl font-bold">
                  Study Abroad
                </h2>

                <p className="text-gray-200 mt-5 text-lg leading-relaxed">

                  UK, USA, Canada, Australia,
                  Europe and global university admissions.

                </p>

              </div>

            </a>

            {/* STUDY ONLINE */}

            <a
              href="/study-online"
              className="group relative rounded-[40px] overflow-hidden h-[550px] shadow-2xl"
            >

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute bottom-10 left-10 right-10 text-white">

                <h2 className="text-5xl font-bold">
                  Study Online
                </h2>

                <p className="text-gray-200 mt-5 text-lg leading-relaxed">

                  Flexible UGC-approved online degree programs
                  from top universities.

                </p>

              </div>

            </a>

            {/* STUDY INDIA */}

            <a
              href="/study-india"
              className="group relative rounded-[40px] overflow-hidden h-[550px] shadow-2xl"
            >

              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1400&auto=format&fit=crop"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute bottom-10 left-10 right-10 text-white">

                <h2 className="text-5xl font-bold">
                  Study In India
                </h2>

                <p className="text-gray-200 mt-5 text-lg leading-relaxed">

                  International degree programs and
                  global universities in India.

                </p>

              </div>

            </a>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="relative z-10 py-24 bg-[#F7FAFC]"
      >

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#0B1F4D]">
              Connect With Eduaccess
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="bg-white rounded-[35px] p-10 shadow-xl border border-gray-100">

              <div className="space-y-10">

                <div>

                  <h3 className="text-2xl font-bold text-[#0B1F4D]">
                    Phone
                  </h3>

                  <a
                    href="tel:+919998920644"
                    className="text-gray-600 mt-3 block hover:text-[#D4AF37]"
                  >
                    +91 99989 20644
                  </a>

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#0B1F4D]">
                    Email
                  </h3>

                  <a
                    href="mailto:connect.eduaccessess@outlook.com"
                    className="text-gray-600 mt-3 block hover:text-[#D4AF37]"
                  >
                    connect.eduaccessess@outlook.com
                  </a>

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#0B1F4D]">
                    Address
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed">

                    KB House, Third Floor,
                    Next to Gopinathji Honda Showroom,
                    Vadodara, Gujarat

                  </p>

                </div>

              </div>

            </div>

            {/* MAP */}

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

      {/* ANIMATION */}

      <style jsx>{`

        .glow{
          position:absolute;
          width:18px;
          height:18px;
          background:#D4AF37;
          border-radius:999px;
          opacity:0;
          box-shadow:
            0 0 12px #D4AF37,
            0 0 25px #D4AF37,
            0 0 40px #D4AF37;
          animation:glowAnimation 11s infinite;
        }

        .canada{
          top:23%;
          left:18%;
          animation-delay:0s;
        }

        .usa{
          top:32%;
          left:20%;
          animation-delay:1s;
        }

        .uk{
          top:28%;
          left:43%;
          animation-delay:2s;
        }

        .europe{
          top:31%;
          left:47%;
          animation-delay:3s;
        }

        .dubai{
          top:39%;
          left:54%;
          animation-delay:4s;
        }

        .india{
          top:44%;
          left:60%;
          animation-delay:5s;
        }

        .singapore{
          top:55%;
          left:66%;
          animation-delay:6s;
        }

        .malaysia{
          top:58%;
          left:69%;
          animation-delay:7s;
        }

        .japan{
          top:37%;
          left:79%;
          animation-delay:8s;
        }

        .australia{
          top:72%;
          left:78%;
          animation-delay:9s;
        }

        .nz{
          top:82%;
          left:88%;
          animation-delay:10s;
        }

        @keyframes glowAnimation {

          0%{
            opacity:0;
            transform:scale(0.3);
          }

          8%{
            opacity:1;
            transform:scale(2);
          }

          16%{
            opacity:0;
            transform:scale(0.3);
          }

          100%{
            opacity:0;
          }

        }

      `}</style>

    </main>
  );
}