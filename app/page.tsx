'use client';

import Image from 'next/image';
import {
  GraduationCap,
  Globe2,
  Laptop2,
  Quote,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from 'lucide-react';

const reviews = [
  {
    name: 'Priya Shah',
    flag: 'https://flagcdn.com/w80/in.png',
    review:
      'Eduaccess made my international admission journey smooth, transparent and stress-free. The counseling support was exceptional.',
  },

  {
    name: 'Rahul Mehta',
    flag: 'https://flagcdn.com/w80/in.png',
    review:
      'I enrolled into an online MBA through Eduaccess and the entire process was handled professionally from start to finish.',
  },

  {
    name: 'Ayesha Khan',
    flag: 'https://flagcdn.com/w80/gb.png',
    review:
      'The visa guidance and university shortlisting support helped me secure my dream opportunity abroad.',
  },

  {
    name: 'Rohan Patel',
    flag: 'https://flagcdn.com/w80/ca.png',
    review:
      'Eduaccess genuinely cares about students. Their premium guidance and support gave me confidence throughout.',
  },
];

export default function Home() {
  return (
    <main className="bg-[#F7FAFC] text-[#0B1F4D] overflow-hidden">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex items-center justify-between">

          {/* LEFT SIDE LOGO */}

          <div className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt="Eduaccess"
              width={65}
              height={65}
              className="object-contain"
            />

            <div>

              <h1 className="text-2xl font-bold tracking-wide">
                EDU<span className="text-[#D4AF37]">ACCESS</span>
              </h1>

              <p className="text-xs text-gray-500">
                Your Access To Education
              </p>

            </div>

          </div>

          {/* RIGHT SIDE NAVIGATION */}

          <div className="hidden lg:flex items-center gap-12 font-medium text-[16px]">

            <a href="#" className="hover:text-[#D4AF37] transition">
              Home
            </a>

            <a href="#study" className="hover:text-[#D4AF37] transition">
              Study
            </a>

            <a href="/visitor-visa"
  className="hover:text-[#D4AF37] transition"
>
  Visitor Visa
</a>

<a href="/connect-us">
  Connect Us
</a>


          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="relative pt-36 pb-24 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 bg-white border border-yellow-200 px-5 py-2 rounded-full shadow-sm mb-8">

              <span className="h-2 w-2 bg-[#D4AF37] rounded-full" />

              <p className="text-sm font-medium text-gray-700">
                Study Globally. Grow Limitlessly.
              </p>

            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">

              Your Future

              <span className="block text-[#D4AF37]">
                Starts Here
              </span>

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">

              Eduaccess helps students achieve international education dreams
              through Study Abroad, Online Degrees and International Programs.

            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-[#0B1F4D] hover:bg-[#102A63] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition shadow-xl">

                Explore Programs

                <ArrowRight size={18} />

              </button>

              <button className="border border-[#0B1F4D] px-8 py-4 rounded-full font-semibold hover:bg-[#0B1F4D] hover:text-white transition">

                Talk To Counselor

              </button>

            </div>

          </div>

          {/* HERO IMAGE */}

          <div className="relative">

            <div className="absolute inset-0 bg-yellow-300/20 blur-[120px]" />

            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-gray-200 bg-white">

              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
                alt="Students"
                className="w-full h-[650px] object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* STUDY SECTION */}

      <section id="study" className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              What We Provide
            </h2>

            <p className="text-gray-600 mt-5 text-lg">
              Explore premium global education opportunities.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* CARD 1 */}

            <div className="group [perspective:1000px] h-[500px]">

              <div className="relative h-full w-full rounded-[35px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* FRONT */}

                <div className="absolute inset-0 rounded-[35px] overflow-hidden shadow-xl [backface-visibility:hidden]">

                  <img
                    src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1400&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute bottom-8 left-8 text-white">

                    <Globe2 size={45} className="mb-5 text-yellow-400" />

                    <h3 className="text-4xl font-bold">
                      Study Abroad
                    </h3>

                  </div>

                </div>

                {/* BACK */}

                <div className="absolute inset-0 rounded-[35px] bg-[#0B1F4D] text-white p-10 shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">

                  <h3 className="text-4xl font-bold mb-6">
                    Study Abroad
                  </h3>

                  <p className="text-gray-300 leading-relaxed">

                    Admissions, scholarships, SOPs, visa support and
                    global universities across UK, USA, Canada and more.

                  </p>

                </div>

              </div>

            </div>

            {/* CARD 2 */}

            <div className="group [perspective:1000px] h-[500px]">

              <div className="relative h-full w-full rounded-[35px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                <div className="absolute inset-0 rounded-[35px] overflow-hidden shadow-xl [backface-visibility:hidden]">

                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute bottom-8 left-8 text-white">

                    <Laptop2 size={45} className="mb-5 text-yellow-400" />

                    <h3 className="text-4xl font-bold">
                      Study Online
                    </h3>

                  </div>

                </div>

                <div className="absolute inset-0 rounded-[35px] bg-[#0B1F4D] text-white p-10 shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">

                  <h3 className="text-4xl font-bold mb-6">
                    Study Online
                  </h3>

                  <p className="text-gray-300 leading-relaxed">

                    UGC-approved online degree programs from India’s
                    top universities with flexible learning support.

                  </p>

                </div>

              </div>

            </div>

            {/* CARD 3 */}

            <div className="group [perspective:1000px] h-[500px]">

              <div className="relative h-full w-full rounded-[35px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                <div className="absolute inset-0 rounded-[35px] overflow-hidden shadow-xl [backface-visibility:hidden]">

                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1400&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute bottom-8 left-8 text-white">

                    <GraduationCap size={45} className="mb-5 text-yellow-400" />

                    <h3 className="text-4xl font-bold">
                      Study In India
                    </h3>

                  </div>

                </div>

                <div className="absolute inset-0 rounded-[35px] bg-[#0B1F4D] text-white p-10 shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">

                  <h3 className="text-4xl font-bold mb-6">
                    Study In India
                  </h3>

                  <p className="text-gray-300 leading-relaxed">

                    International degree programs and global university
                    pathways within India.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* REVIEWS */}

      <section className="py-24 bg-[#F7FAFC] overflow-hidden">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Student Reviews
          </h2>

        </div>

        <div className="relative overflow-hidden">

          <div className="flex gap-8 animate-[scroll_35s_linear_infinite] w-max">

            {[...reviews, ...reviews].map((review, index) => (

              <div
                key={index}
                className="bg-white rounded-[35px] p-10 shadow-lg border border-gray-100 w-[420px] flex-shrink-0"
              >

                <div className="flex items-center justify-between mb-6">

                  <Quote className="text-[#D4AF37]" size={40} />

                  <img
                    src={review.flag}
                    alt="flag"
                    className="w-10 h-10 rounded-full object-cover border"
                  />

                </div>

                <p className="text-gray-600 leading-relaxed text-lg">

                  {review.review}

                </p>

                <div className="mt-8">

                  <h4 className="font-bold text-xl">
                    {review.name}
                  </h4>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FOUNDER */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

          {/* ROUND IMAGE */}

          <div className="flex justify-center">

            <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden border-[10px] border-white shadow-2xl">

              <img
                src="/founder.png"
                alt="Founder"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <p className="text-[#D4AF37] font-semibold uppercase tracking-[3px]">
              Founder’s Message
            </p>

            <h2 className="text-5xl font-bold mt-5 leading-tight">

              Empowering Students To Build Global Careers

            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">

              At Eduaccess, our mission is to simplify international education
              and help students unlock opportunities worldwide with trusted guidance,
              transparency and premium support.

            </p>

          </div>

        </div>

      </section>

            {/* CONTACT */}

      <section id="contact" className="py-24 bg-[#F7FAFC]">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              Connect With Eduaccess
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* CONTACT */}

            <div className="bg-white rounded-[35px] p-10 shadow-xl border border-gray-100">

              <div className="space-y-10">

                {/* PHONE */}

                <div className="flex gap-5">

                  <div className="bg-yellow-100 p-4 rounded-2xl h-fit">

                    <Phone className="text-[#D4AF37]" />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
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

                    <Mail className="text-[#0B1F4D]" />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
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

                    <MapPin className="text-[#D4AF37]" />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
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
          className="w-14 h-14 hover:scale-110 transition"
        />

      </a>

      {/* ANIMATION */}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </main>
  );
}
