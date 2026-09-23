const JourneyStep = ({ number, title, description, active = false }) => {
  return (
    <div className="relative flex gap-5">
      {/* Number */}
      <div
        className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300 ${
          active
            ? "bg-blue-600 text-white"
            : "bg-white text-slate-500 ring-1 ring-slate-200"
        }`}
      >
        {number}
      </div>

      {/* Content */}
      <div className="pb-8">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>

        <p className="mt-2 max-w-md text-[15px] leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default JourneyStep;