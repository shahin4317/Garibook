import BlogCard from "./BlogCard";

import travelTips from "../../src/assets/travel-tips.jpg";
import roadTrip from "../../src/assets/road-trip.jpg";
import airportGuide from "../../src/assets/airport-guide.jpg";

const blogs = [
  {
    id: 1,
    title: "10 Tips for a Comfortable Long-Distance Car Journey",
    category: "Travel Tips",
    image: travelTips,
  },
  {
    id: 2,
    title: "How to Plan the Perfect Road Trip in Bangladesh",
    category: "Travel Guide",
    image: roadTrip,
  },
  {
    id: 3,
    title: "Your Complete Guide to Airport Pick & Drop",
    category: "Airport Travel",
    image: airportGuide,
  },
];

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Beyond Destinations
            </p>

            <h2 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              Stories, Tips &
              <span className="block text-slate-400">
                Travel Inspiration
              </span>
            </h2>
          </div>

          <button className="w-fit text-sm font-semibold text-slate-900 transition hover:text-blue-600">
            View All Blogs →
          </button>
        </div>

        {/* Blog Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              category={blog.category}
              image={blog.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;