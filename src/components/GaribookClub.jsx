const GaribookClub = () => {
  const benefits = [
    "Earn from your car",
    "Flexible driving schedule",
    "Connect with more customers",
    "Grow your earning potential",
  ];

  return (
    <section className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid overflow-hidden rounded-[32px] border border-white/10 bg-[#111827] lg:grid-cols-2">

          {/* Left Content */}
          <div className="flex flex-col justify-center px-7 py-14 sm:px-10 lg:px-14 lg:py-20">

            <p className="mb-5 font-[Manrope] text-xs font-bold uppercase tracking-[0.3em] text-amber-400 sm:text-sm">
              Garibook Club
            </p>

            <h2 className="font-[Manrope] text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn your car
              <br />
              <span className="text-amber-400">
                into earnings.
              </span>
            </h2>

            <p className="mt-6 max-w-lg font-[DM_Sans] text-sm leading-7 text-slate-400 sm:text-base">
              Join Garibook Club and turn your vehicle into a source of
              income. Connect with customers, choose when you drive and
              earn on your own terms.
            </p>

            {/* Benefits */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-sm font-bold text-amber-400">
                    ✓
                  </div>

                  <span className="font-[DM_Sans] text-sm font-medium text-slate-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-9">
              <a
                href="#join"
                className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3.5 font-[DM_Sans] text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300"
              >
                Join Garibook Club
                <span className="text-lg">→</span>
              </a>
            </div>

          </div>

          {/* Right Visual */}
          <div className="relative min-h-[430px] overflow-hidden bg-[#0b1220] lg:min-h-[580px]">

            {/* Decorative circles */}
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-amber-400/10" />

            <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full border border-amber-400/10" />

            {/* Main Card */}
            <div className="absolute inset-0 flex items-center justify-center px-7">

              <div className="relative w-full max-w-sm">

                {/* Earnings Card */}
                <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-7 shadow-2xl backdrop-blur-md">

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-[DM_Sans] text-xs text-slate-500">
                        Garibook Club
                      </p>

                      <p className="mt-1 font-[Manrope] text-lg font-bold text-white">
                        Your earnings
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-lg text-slate-950">
                      $
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="mt-10">
                    <p className="font-[Manrope] text-5xl font-extrabold tracking-tight text-white">
                      ৳25,000
                    </p>

                    <p className="mt-2 font-[DM_Sans] text-sm text-emerald-400">
                      +12.8% this month
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="mt-8">
                    <div className="mb-2 flex justify-between">
                      <span className="font-[DM_Sans] text-xs text-slate-500">
                        Monthly target
                      </span>

                      <span className="font-[DM_Sans] text-xs font-semibold text-white">
                        78%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[78%] rounded-full bg-amber-400" />
                    </div>
                  </div>

                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-5 rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 shadow-xl">
                  <p className="font-[DM_Sans] text-xs text-slate-500">
                    Drive when you want
                  </p>

                  <p className="mt-1 font-[Manrope] text-sm font-bold text-white">
                    100% Flexible
                  </p>
                </div>

              </div>
            </div>

            {/* Glow */}
            <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-amber-400/10 blur-[110px]" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default GaribookClub;