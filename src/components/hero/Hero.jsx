
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import carImage from "../../assets/car1.jpg";
import BookingForm from "./BookingFrom";

const Hero = () => {
  const [bookingType, setBookingType] = useState("city");

  // Hero section-এর পুরো animation scope
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    // GSAP context ব্যবহার করলে component unmount হলে
    // animation properly cleanup হবে
    const ctx = gsap.context(() => {
      // Hero text + buttons একটার পর একটা reveal হবে
      gsap.from(".hero-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Car image একটু subtle zoom-in করবে
      gsap.from(".hero-image", {
        scale: 1.08,
        duration: 1.4,
        ease: "power3.out",
      });

      // Booking card একটু নিচ থেকে উঠে আসবে
      gsap.from(".hero-booking", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        delay: 0.45,
        ease: "power3.out",
      });
    }, heroRef);

    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-slate-950"
    >
      {/* Hero Background & Content */}
      <div className="relative min-h-[550px] w-full lg:min-h-[760px]">
        {/* Background Image */}
        <img
          src={carImage}
          alt="Garibook car rental"
          className="hero-image absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

        {/* Hero Text Content */}
        <div className="relative z-10 mx-auto flex min-h-[550px] max-w-[1200px] items-center px-4 pb-16 pt-20 sm:px-6 lg:min-h-[760px] lg:px-8 lg:pb-52 lg:pt-24">
          <div className="max-w-2xl text-white">
            {/* Small badge */}
            <div className="hero-reveal mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur-md sm:mb-6">
              City to City • Car Rental
            </div>

            {/* Main heading */}
            <h1 className="hero-reveal text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
              Choose your city,
              <br />
              pick your car and enjoy the journey.
            </h1>

            {/* Description */}
            <p className="hero-reveal mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
              Enjoy a comfortable journey with Garibook&apos;s trusted cars
              and professional drivers.
            </p>

            {/* CTA Buttons */}
            <div className="hero-reveal mb-10 mt-6 flex flex-wrap items-center gap-4 sm:mt-8">
              <button
                type="button"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Download App
              </button>

              <button
                type="button"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Book a Car
              </button>
            </div>
          </div>
        </div>

        {/* Booking Card - Desktop */}
        <div
          id="booking"
          className="hero-booking hidden lg:absolute lg:bottom-4 lg:inset-x-8 lg:z-20 lg:mx-auto lg:block lg:max-w-[1120px]"
        >
          <div className="rounded-3xl border border-white/40 bg-white/95 p-5 shadow-2xl backdrop-blur-xl">
            {/* Booking Type Toggles */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setBookingType("city")}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  bookingType === "city"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                City Booking
              </button>

              <button
                type="button"
                onClick={() => setBookingType("airport")}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  bookingType === "airport"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Airport Booking
              </button>
            </div>

            <BookingForm type={bookingType} />
          </div>
        </div>
      </div>

      {/* Booking Card - Mobile & Tablet */}
      <div className="relative z-20 -mt-10 px-4 pb-8 sm:px-6 lg:hidden">
        <div className="hero-booking mx-auto max-w-[1120px] rounded-3xl border border-white/20 bg-white p-5 shadow-2xl">
          {/* Booking Type Toggles */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setBookingType("city")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                bookingType === "city"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              City Booking
            </button>

            <button
              type="button"
              onClick={() => setBookingType("airport")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                bookingType === "airport"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Airport Booking
            </button>
          </div>

          <BookingForm type={bookingType} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

