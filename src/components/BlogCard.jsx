const BlogCard = ({ title, category, image }) => {
  return (
    <article className="group overflow-hidden rounded-2xl bg-slate-50">
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
          {category}
        </p>

        <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-900 transition group-hover:text-blue-600">
          {title}
        </h3>

        <button className="mt-5 text-sm font-semibold text-slate-600 transition hover:text-blue-600">
          Read More →
        </button>
      </div>
    </article>
  );
};

export default BlogCard;