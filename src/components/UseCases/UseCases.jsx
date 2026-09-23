import UseCaseCard from "./UseCaseCard";
import trip from '../../assets/trip.jpg'
import airport from '../../assets/airport.jpg'
import tour from '../../assets/tour.jpg'
const useCases = [
  {
    id: 1,
    title: "Airport Rentals",
    image: airport,
  },
  {
    id: 2,
    title: "Family Trips",
    image: trip ,
  },
  {
    id: 3,
    title: "Long Tours",
    image: tour
  },
];

const UseCases = () => {
  return (
    <section
      id="use-cases"
      className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Explore More
          </p>

          <h2 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
            More Than Miles —
            <span className="block text-slate-400">
              We Bring People Together
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {useCases.map((item) => (
            <UseCaseCard
              key={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;