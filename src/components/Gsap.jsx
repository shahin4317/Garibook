import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import car3 from "../assets/93a25b7afa97adf7cbc29810e3dae8df.jpg";

export default function Gsap() {
  const containerRef = useRef(null);
  const infoRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // 1. Context to manage animations properly
    const ctx = gsap.context(() => {
      // Shurute text info-ta bottom-e hidden thakbe (yPercent 100)
      gsap.set(infoRef.current, { yPercent: 100 });

      // Hover animation timeline create
      timelineRef.current = gsap
        .timeline({ paused: true })
        .to(infoRef.current, { yPercent: 0, duration: 0.4, ease: "power2.out" });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse In: Text slidement hobe
  const handleMouseEnter = () => {
    timelineRef.current?.timeScale(1).play();
  };

  // Mouse Out: Text rapid-ly niche fire jabe (3x speed)
  const handleMouseLeave = () => {
    timelineRef.current?.timeScale(3).reverse();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      {/* Container */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-96 w-72 overflow-hidden rounded-2xl bg-slate-900 shadow-2xl cursor-pointer border border-slate-800"
      >
        {/* Car Image */}
        <img
          src={car3}
          alt="Car"
          className="h-full w-full object-cover"
        />

        {/* Overlay Dark Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Information Box (On Hover Slide Up Hobe) */}
        <div
          ref={infoRef}
          className="absolute inset-x-0 bottom-0 bg-slate-900/90 p-5 text-white backdrop-blur-md border-t border-slate-700"
        >
          <span className="rounded bg-amber-400 px-2 py-1 text-xs font-bold text-slate-950">
            Garibook Premium
          </span>
          <h2 className="mt-2 text-xl font-bold text-amber-300">Luxury Ride</h2>
          <p className="mt-1 text-xs text-slate-300">
            Move freely and travel in comfort with our exclusive car service.
          </p>
        </div>
      </div>
    </div>
  );
}