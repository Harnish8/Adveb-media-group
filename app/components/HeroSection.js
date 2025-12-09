"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  console.log("Hero component rendered");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#02132A] via-[#03244A] to-[#0B5ED7] text-white">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -top-32 -left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-40 mx-auto h-40 max-w-2xl rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        {/* <div className="mb-6 flex items-center justify-center animate-fade-in">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 shadow-[0_0_40px_rgba(59,130,246,0.4)] backdrop-blur">
            <Image
              src="/images/logo.png"
              alt="Adveb Media Group Logo"
              width={64}
              height={64}
              priority
              className="drop-shadow-lg"
            />
          </div>
        </div> */}

        {/* Sub-heading text above main headline */}
        {/* <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200/80 animate-slide-up">
          Adveb Media Group
        </p> */}

        {/* Main headline */}
        <div className="max-w-3xl text-center animate-slide-up">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            <span className="block">The Only</span>

            <span className="mt-3 inline-block">
              <span className="relative inline-block -rotate-2 rounded-3xl bg-white px-5 py-2 shadow-xl">
                <span className="absolute inset-0 -z-10 rounded-3xl border border-blue-500/40" />
                <span className="text-[2rem] font-extrabold tracking-tight text-[#0B5ED7] sm:text-[3rem] lg:text-[3.75rem]">
                  Digital Growth Partner
                </span>
              </span>
            </span>

            <span className="mt-4 block">You’ll Ever Need.</span>
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-5 max-w-2xl text-base text-blue-100/90 sm:text-lg">
            Discover how our integrated approach transforms businesses across{" "}
            <span className="font-semibold text-white">
              IT, marketing growth, and strategic consulting.
            </span>
          </p>

          {/* Small feature tags */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-blue-100/80">
            <span className="rounded-full border border-blue-300/30 bg-white/5 px-3 py-1">
              Websites &amp; CX
            </span>
            <span className="rounded-full border border-blue-300/30 bg-white/5 px-3 py-1">
              Automation &amp; CRM
            </span>
            <span className="rounded-full border border-blue-300/30 bg-white/5 px-3 py-1">
              Data-Driven Strategy
            </span>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0B5ED7] via-[#1D8CF8] to-[#33C4FF] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(37,99,235,0.55)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_22px_60px_rgba(37,99,235,0.75)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#03244A] focus:ring-cyan-300"
            >
              Let&apos;s Grow
              <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">
                ↗
              </span>
            </Link>

            {/* <Link
              href="/solutions"
              className="inline-flex items-center justify-center rounded-full border border-blue-200/50 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-blue-100 transition-colors duration-300 hover:bg-white hover:text-[#03244A]"
            >
              Explore Solutions
            </Link> */}
          </div>

          {/* Bottom text / trust hint */}
          {/* <p className="mt-5 text-xs text-blue-100/70">
            Integrated IT, marketing, and strategy — built to scale with you.
          </p> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.9s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.9s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
