"use client";
import Image from "next/image";
import Link from "next/link";

export default function PageTitle({ title, paths = [] }) {
  return (
    <div className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          {title}
        </h1>
        <ul className="flex justify-center space-x-2 text-gray-300">
          {paths.map((path, index) => (
            <li key={index} className="flex items-center">
              <Link
                href={path.href}
                className="hover:text-blue-500 transition-colors"
              >
                {path.name}
              </Link>
              {index < paths.length - 1 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Background Particles + Shapes (from HeroSection) */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
          style={{ animationDuration: "1.5s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-2 h-2 bg-pink-400 rounded-full animate-pulse"
          style={{ animationDuration: "1.5s", animationDelay: "0.1s" }}
        ></div>
        <div
          className="absolute top-60 left-1/3 w-4 h-4 bg-blue-400 rounded-full animate-pulse"
          style={{ animationDuration: "1.5s", animationDelay: "0.2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"
          style={{ animationDuration: "1.5s", animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute bottom-60 left-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-pulse"
          style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-32 right-1/4 w-3 h-3 bg-pink-500 rounded-full animate-pulse"
          style={{ animationDuration: "1.5s", animationDelay: "0.7s" }}
        ></div>
        <div
          className="absolute bottom-32 right-1/3 w-4 h-4 bg-blue-500 rounded-full animate-pulse"
          style={{ animationDuration: "1.5s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-16 w-2 h-2 bg-purple-300 rounded-full animate-pulse"
          style={{ animationDuration: "1.5s", animationDelay: "1.2s" }}
        ></div>

        {/* Geometric Shapes */}
        <div
          className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-cyan-400 rotate-180 animate-spin"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-8 h-8 border-2 border-purple-400 rotate-180 animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        ></div>
        <div
          className="absolute bottom-32 right-32 w-8 h-8 border-2 border-pink-700 rotate-180 animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-6 h-6 border-2 border-pink-400 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  );
}


