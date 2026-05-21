'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { universities } from '@/data/onlineUniversities';

export default function StudyOnlinePage() {
  const [search, setSearch] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate Cards
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

  // Search
  const filteredUniversities =
    search.trim() === ''
      ? universities
      : universities.filter((u) =>
          u.name.toLowerCase().includes(search.toLowerCase())
        );

  // Show 6 at a time
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
            onClick={() => setSelectedUniversity(uni)}
            className="cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
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
                  width={28}
                  height={28}
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

              <p className="mt-4 text-sm font-medium text-gray-700">
                {uni.programs.more}
              </p>

            </div>
          </div>
        ))}

      </div>

      {/* Popup Modal */}
      {selectedUniversity && (

        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">

          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-y-auto max-h-[90vh] relative">

            {/* Close */}
            <button
              onClick={() => setSelectedUniversity(null)}
              className="absolute top-4 right-4 text-3xl font-bold text-black z-20"
            >
              ×
            </button>

            {/* Image */}
            <div className="relative h-[300px] w-full">

              <Image
                src={selectedUniversity.image}
                alt={selectedUniversity.name}
                fill
                className="object-cover"
              />

            </div>

            {/* Content */}
            <div className="p-8">

              <div className="flex items-center gap-3 mb-4">

                <Image
                  src={selectedUniversity.flag}
                  alt="flag"
                  width={32}
                  height={32}
                />

                <h2 className="text-3xl font-bold text-[#0f172a]">
                  {selectedUniversity.name}
                </h2>

              </div>

              <div className="inline-block bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full mb-4">
                {selectedUniversity.type}
              </div>

              <p className="text-gray-600 mb-6">
                {selectedUniversity.location}
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {selectedUniversity.benefits.map(
                  (benefit: any, i: number) => (

                    <div
                      key={i}
                      className="bg-gray-100 rounded-2xl p-4 text-center"
                    >

                      <Image
                        src={benefit.icon}
                        alt={benefit.title}
                        width={40}
                        height={40}
                        className="mx-auto mb-2"
                      />

                      <p className="text-sm font-medium text-gray-700">
                        {benefit.title}
                      </p>

                    </div>
                  )
                )}

              </div>

              {/* Apply */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="block mt-8 bg-[#0f172a] hover:bg-black text-white text-center py-4 rounded-2xl font-semibold transition"
              >
                Apply Now
              </a>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}