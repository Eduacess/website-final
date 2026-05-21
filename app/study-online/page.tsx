'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { universities } from '@/data/onlineUniversities';

export default function StudyOnlinePage() {
  const [search, setSearch] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Rotate
  useEffect(() => {
    if (search.trim() !== '') return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev + 6 >= universities.length) {
          return 0;
        }

        return prev + 6;
      });
    }, 12000);

    return () => clearInterval(interval);
  }, [search]);

  // Search Filter
  const filteredUniversities =
    search.trim() === ''
      ? universities
      : universities.filter((u) =>
          u.name.toLowerCase().includes(search.toLowerCase())
        );

  // Display 6 Universities
  const displayedUniversities =
    search.trim() === ''
      ? filteredUniversities.slice(currentIndex, currentIndex + 6)
      : filteredUniversities;

  return (
    <div className="min-h-screen bg-[#f7f9fc] py-16 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#0f172a]">
          Study Online
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Explore Top Online Universities
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-14">
        <input
          type="text"
          placeholder="Search University..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-[600px] px-6 py-4 rounded-full border border-gray-200 shadow-sm outline-none text-black"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedUniversities.map((uni, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <div className="relative h-[240px] w-full">
              <Image
                src={uni.image}
                alt={uni.name}
                fill
                className="object-cover"
              />

              {/* Flag */}
              <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
                <Image
                  src={uni.flag}
                  alt="flag"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#0f172a]">
                {uni.name}
              </h2>

              <div className="mt-3 inline-block bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full">
                {uni.type}
              </div>

              <p className="text-gray-500 mt-4">
                {uni.location}
              </p>

              {/* Programs */}
              <p className="mt-5 text-sm text-gray-700 font-medium">
                {uni.programs.more}
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {uni.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2"
                  >
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={22}
                      height={22}
                    />

                    <span className="text-xs font-medium text-gray-700">
                      {benefit.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="block mt-8 bg-[#0f172a] hover:bg-black text-white text-center py-3 rounded-2xl font-semibold transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* No Result */}
      {displayedUniversities.length === 0 && (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold text-gray-700">
            University Not Found
          </h2>

          <p className="text-gray-500 mt-3">
            Contact us to find your right university.
          </p>

          <a
            href="https://wa.me/919998920644"
            target="_blank"
            className="inline-block mt-6 bg-[#0f172a] text-white px-8 py-3 rounded-2xl font-semibold"
          >
            Find Your Right University
          </a>
        </div>
      )}
    </div>
  );
}