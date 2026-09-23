import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import JourneyStep from "./JourneyStep";
import journey from "../../assets/meet.jpg";

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
  {
    number: "01",
    title: "Choose the Car",
    description: "Pick what suits your comfort.",
  },
  {
    number: "02",
    title: "Choose the Driver",
    description: "Based on ratings and reviews.",
  },
  {
    number: "03",
    title: "Choose the Fare",
    description: "Select the bid that fits your budget.",
  },
];

const Journey = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const floatingRef = useRef(null);
  const contentRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -70,
        scale: 0.96,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Floating card
      gsap.from(floatingRef.current, {
        opacity: 0,
        y: 25,
        scale: 0.95,
        duration: 0.7,
        delay: 0.45,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Right content
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Steps
      gsap.from(stepsRef.current.children, {
        opacity: 0,
        x: 35,
        duration: 0.65,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* Left - Visual */}
          <div className="relative">
            <div
              ref={imageRef}
              className="overflow-hidden rounded-[28px] bg-slate-100"
            >
              <img
                src={journey}
                alt="Garibook journey"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>

            {/* Floating detail */}
            <div
              ref={floatingRef}
              className="absolute -bottom-5 right-5 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg sm:block"
            >
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                Your Journey
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                Your choice, your ride.
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div ref={contentRef}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              How it works
            </p>

            <h2 className="mt-3 max-w-lg text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              Freedom in
              <span className="block text-slate-400">
                Every Journey
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
              Choose what works best for you and make every journey feel
              comfortable, flexible and personal.
            </p>

            {/* Steps */}
            <div ref={stepsRef} className="relative mt-10">
              {/* Vertical line */}
              <div className="absolute bottom-8 left-[21px] top-5 w-px bg-slate-200" />

              {journeySteps.map((step, index) => (
                <JourneyStep
                  key={step.number}
                  {...step}
                  active={index === 0}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;