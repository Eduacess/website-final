export default function VisitorVisaPage() {
    return (
      <main className="bg-[#F7FAFC] min-h-screen py-24">
  
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
  
          {/* HEADING */}
  
          <div className="text-center mb-20">
  
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0B1F4D]">
  
              Visitor Visa Services
  
            </h1>
  
            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
  
              Explore premium visitor visa assistance for top destinations worldwide.
  
            </p>
  
          </div>
  
          {/* COUNTRY GRID */}
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  
            {/* USA */}
  
            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl">
  
              <img
                src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1200&auto=format&fit=crop"
                className="h-[250px] w-full object-cover"
              />
  
              <div className="p-8">
  
                <div className="flex items-center gap-3 mb-5">
  
                  <img
                    src="https://flagcdn.com/w80/us.png"
                    className="w-10 h-10 rounded-full"
                  />
  
                  <h2 className="text-3xl font-bold text-[#0B1F4D]">
                    USA
                  </h2>
  
                </div>
  
                <div className="space-y-4 text-gray-600">
  
                  <p>
                    <span className="font-semibold text-[#0B1F4D]">
                      Visa Validity:
                    </span> Up to 10 Years
                  </p>
  
                  <p>
                    <span className="font-semibold text-[#0B1F4D]">
                      Processing:
                    </span> Depends on Interview Dates
                  </p>
  
                  <p>
                    <span className="font-semibold text-[#0B1F4D]">
                      Support:
                    </span> We assist with interview date bookings
                  </p>
  
                </div>
  
                <a
                  href="/#contact"
                  className="mt-8 inline-block bg-[#0B1F4D] text-white px-6 py-3 rounded-full font-semibold"
                >
                  Apply Now
                </a>
  
              </div>
  
            </div>
  
            {/* CANADA */}
  
            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl">
  
              <img
                src="https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1200&auto=format&fit=crop"
                className="h-[250px] w-full object-cover"
              />
  
              <div className="p-8">
  
                <div className="flex items-center gap-3 mb-5">
  
                  <img
                    src="https://flagcdn.com/w80/ca.png"
                    className="w-10 h-10 rounded-full"
                  />
  
                  <h2 className="text-3xl font-bold text-[#0B1F4D]">
                    Canada
                  </h2>
  
                </div>
  
                <div className="space-y-4 text-gray-600">
  
                  <p>
                    <span className="font-semibold text-[#0B1F4D]">
                      Visa Validity:
                    </span> Up to 10 Years
                  </p>
  
                  <p>
                    <span className="font-semibold text-[#0B1F4D]">
                      Processing:
                    </span> 30–60 Days
                  </p>
  
                  <p>
                    <span className="font-semibold text-[#0B1F4D]">
                      Stay:
                    </span> Up to 6 Months
                  </p>
  
                </div>
  
                <a
                  href="/#contact"
                  className="mt-8 inline-block bg-[#0B1F4D] text-white px-6 py-3 rounded-full font-semibold"
                >
                  Apply Now
                </a>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </main>
    );
  }
  