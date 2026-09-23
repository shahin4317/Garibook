const UseCaseCard = ({ title, image, className = "" }) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-[28px] ${className}`}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Bottom gradient only */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 sm:p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h3>

        <div className="mt-3 h-px w-10 bg-white/70 transition-all duration-300 group-hover:w-16" />
      </div>
    </article>
  );
};

export default UseCaseCard;