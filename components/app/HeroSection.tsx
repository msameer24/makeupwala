"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Truck, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#d15d61] h-135">

        {/* background girl image  */}
         <img 
          src="/images/hero-section-girl.png"
          alt="Beauty Model Girl Image"
          className="absolute inset-0 h-full w-full object-cover object-left"
         />
         {/* overlay image  */}

         <div className="absolute inset-0 bg-linear-to-r from-[#fff7f5]/95 via-[#fff7f5]/20 to-transparent" />

         {/* content  */}
         <div className="relative z-10 mx-auto flex h-full max-w-362.5 items-center px-6 sm:px-10 lg:px-16">
             <div className="max-w-xl">

   {/* Small label */}
          <div className="mb-5 flex items-center gap-2">

            <p className="text-sm uppercase tracking-[0.25em] text-[#d15d61]">
              Beauty That Feels Like You
            </p>

          </div>
           {/* Heading */}
          <h1 className="font-serif text-5xl leading-[1.05] text-[#281817] sm:text-6xl">

            Discover Your

            <span className="block italic text-[#d15d61]">
              Perfect Look
            </span>

          </h1>
           <p className="mt-5 max-w-md text-sm leading-6 text-[#6e5c59] sm:text-base">
            Explore beauty essentials curated to help you
            express your unique style.
          </p>

             {/* Buttons */}
          <div className="mt-7 flex gap-3">

            <Link
              href="/products"
              className="
                flex
                items-center
                gap-2
                rounded-md
                bg-[#d15d61]
                px-6
                py-3
                text-sm
                font-medium
                uppercase
                tracking-wide
                text-white
                transition
                hover:bg-[#bd5055]
               
              "
            >
              Shop Now
              <ArrowRight size={16} />
            </Link>

            <Link
              href="#"
              className="
                rounded-md
                border
                border-[#d15d61]
                bg-white/60
                px-6
                py-3
                text-sm
                font-medium
                uppercase
                tracking-wide
                text-[#d15d61]
                backdrop-blur-sm
                transition
                hover:bg-[#d15d61]
                hover:text-white
              "
            >
              Explore
            </Link>

          </div>

        
          </div>
         </div>






    </section>
  );
}