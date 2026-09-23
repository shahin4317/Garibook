const stats = [
  {
    value: "0+",
    label: "Trip Requests",
  },
  {
    value: "0+",
    label: "Total Customers",
  },
  {
    value: "0+",
    label: "Active Drivers",
  },
  {
    value: "0",
    label: "District Covered",
  },
];

const Stats = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Our Journey
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            From Everyday Rides
            <span className="block text-slate-500">
              to Meaningful Journeys
            </span>
          </h2>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-3xl border border-slate-200 bg-slate-50/70 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl sm:p-8"
            >
              <h3 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {stat.value}
              </h3>

              <p className="mt-3 text-sm font-medium text-slate-500 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;