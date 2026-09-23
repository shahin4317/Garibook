import { useState } from "react";

const BookingForm = ({ type }) => {
  const [tripType, setTripType] = useState("one-way");

  const isAirport = type === "airport";

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">
      {/* Car Type */}
      <div>
        <label
          htmlFor="car-type"
          className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
        >
          Choose a Car
        </label>

        <select
          id="car-type"
          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
          defaultValue=""
        >
          <option value="" disabled>
            Select Car Type
          </option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      {/* Pickup */}
      <div>
        <label
          htmlFor="pickup"
          className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
        >
          {isAirport ? "Pickup Airport" : "Pickup Location"}
        </label>

        {isAirport ? (
          <select
            id="pickup"
            defaultValue=""
            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
          >
            <option value="" disabled>
              Select Airport
            </option>
            <option value="dac">Hazrat Shahjalal Airport</option>
            <option value="zyl">Osmani Airport</option>
          </select>
        ) : (
          <input
            id="pickup"
            type="text"
            placeholder="Enter Pickup Location"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
          />
        )}
      </div>

      {/* Drop-off */}
      <div>
        <label
          htmlFor="dropoff"
          className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
        >
          Drop-off Location
        </label>

        <input
          id="dropoff"
          type="text"
          placeholder="Enter Drop-off Location"
          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
        />
      </div>

      {/* Date / Time */}
      <div>
        <label
          htmlFor="pickup-date"
          className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
        >
          Pickup Date & Time
        </label>

        <input
          id="pickup-date"
          type="datetime-local"
          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
        />
      </div>

      {/* Continue */}
      <button
        type="button"
        className="h-12 rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
      >
        Continue
      </button>

      {/* Trip Type */}
      {!isAirport && (
        <div className="lg:col-span-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm font-medium text-slate-600">
              Trip Type:
            </span>

            {[
              { label: "One Way", value: "one-way" },
              { label: "Round Way", value: "round-way" },
              { label: "Hourly", value: "hourly" },
            ].map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setTripType(item.value)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                  tripType === item.value
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Airport options */}
      {isAirport && (
        <div className="lg:col-span-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm font-medium text-slate-600">
              Pickup From:
            </span>

            <button
              type="button"
              className="rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-xs font-medium text-white"
            >
              From Airport
            </button>

            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 transition hover:border-slate-400"
            >
              From Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;