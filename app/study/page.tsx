'use client';

export default function StudyPage() {

  return (

    <main className="bg-[#F7FAFC] min-h-screen overflow-hidden text-[#0B1F4D] relative">

      {/* WORLD MAP BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/World_map_2004_CIA_large_two-color.svg"
          className="absolute inset-0 w-full h-full object-contain opacity-[0.06]"
        />

        {/* GLOW DOTS */}

        <div className="glow glow1" />
        <div className="glow glow2" />
        <div className="glow glow3" />
        <div className="glow glow4" />
        <div className="glow glow5" />
        <div className="glow glow6" />
        <div className="glow glow7" />
        <div className="glow glow8" />
        <div className="glow glow9" />
        <div className="glow glow10" />

      </div>

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

            {/* STUDY DROPDOWN */}

            <div className="relative group">

              <a
                href="/study"
                className="text-[#D4AF37]"
              >
                Study
              </a>

              <div className="absolute top-10 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-3xl shadow-2xl w-72 p-4 border border-gray-100">

                <div className="flex flex-col">

                  <a
                    href="/study-abroad"
                    className="px-5 py-4 rounded-2xl hover:bg-[#F7FAFC] transition font-semibold"
                  >
                    Study Abroad
                  </a>

                  <a
                    href="/study-online"
                    className="px-5 py-4 rounded-2xl hover:bg-[#F7FAFC] transition font-semibold"
                  >
                    Study Online
                  </a>

                  <a
                    href="/study-india"
                    className="px-5 py-4 rounded-2xl hover:bg-[#F7FAFC] transition font-semibold"
                  >
                    Study In India
                  </a>

                </div>

              </div>

            </div>

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
                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1600&auto=format&fit=crop"
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
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
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
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1600&auto=format&fit=crop"
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

      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="relative z-10 py-24 bg-[#F7FAFC]"
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

      <footer className="relative z-10 bg-white text-[#0B1F4D] py-10 text-center border-t border-gray-200">

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

      {/* ANIMATIONS */}

      <style jsx>{`

        .glow{
          position:absolute;
          width:18px;
          height:18px;
          background:#D4AF37;
          border-radius:999px;
          opacity:0;
          box-shadow:0 0 25px #D4AF37;
          animation:glowAnimation 10s infinite;
        }

        .glow1{
          top:28%;
          left:22%;
          animation-delay:0s;
        }

        .glow2{
          top:24%;
          left:48%;
          animation-delay:1s;
        }

        .glow3{
          top:40%;
          left:73%;
          animation-delay:2s;
        }

        .glow4{
          top:52%;
          left:66%;
          animation-delay:3s;
        }

        .glow5{
          top:34%;
          left:80%;
          animation-delay:4s;
        }

        .glow6{
          top:58%;
          left:35%;
          animation-delay:5s;
        }

        .glow7{
          top:65%;
          left:55%;
          animation-delay:6s;
        }

        .glow8{
          top:45%;
          left:15%;
          animation-delay:7s;
        }

        .glow9{
          top:22%;
          left:65%;
          animation-delay:8s;
        }

        .glow10{
          top:70%;
          left:75%;
          animation-delay:9s;
        }

        @keyframes glowAnimation {

          0%{
            opacity:0;
            transform:scale(0.6);
          }

          10%{
            opacity:1;
            transform:scale(1.4);
          }

          20%{
            opacity:0;
            transform:scale(0.6);
          }

          100%{
            opacity:0;
          }

        }

      `}</style>

    </main>
  );
}