import car2 from "../assets/93a25b7afa97adf7cbc29810e3dae8df.jpg";

const Business = () => {
  return (
    <section
      id="business"
      className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section */}
        <div className="relative min-h-[600px] overflow-hidden rounded-[32px]">

          {/* Background Image */}
          <img
            src={car2}
            alt="Business car rental"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/20" />

          {/* Bottom Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[600px] items-center px-7 py-14 sm:px-10 lg:px-16">

            <div className="max-w-xl">

              {/* Small Heading */}
              <p className="mb-5 font-[Manrope] text-xs font-bold uppercase tracking-[0.3em] text-amber-400 sm:text-sm">
                For Business
              </p>

              {/* Main Heading */}
              <h2 className="font-[Manrope] text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Modern car rentals
                <br />
                <span className="text-amber-400">
                  for business.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-lg font-[DM_Sans] text-sm leading-7 text-slate-300 sm:text-base">
                Make business travel simple with comfortable vehicles,
                professional drivers and flexible rental options designed
                around your needs.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-slate-950">
                    ✓
                  </div>

                  <span className="font-[DM_Sans] text-sm font-medium text-white">
                    Professional and reliable service
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-slate-950">
                    ✓
                  </div>

                  <span className="font-[DM_Sans] text-sm font-medium text-white">
                    Flexible rental solutions
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-slate-950">
                    ✓
                  </div>

                  <span className="font-[DM_Sans] text-sm font-medium text-white">
                    Comfortable cars for every occasion
                  </span>
                </div>

              </div>

              {/* Button */}
              <a
                href="#booking"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3.5 font-[DM_Sans] text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300"
              >
                Explore Business
                <span className="text-lg">→</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Business;