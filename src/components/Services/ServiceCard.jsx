
const ServiceCard = ({ title, description, image }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {description}
        </p>

        <button
          type="button"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-all duration-200 group-hover:gap-3"
        >
          Explore
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;