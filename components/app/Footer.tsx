
import Link from "next/link";
import {
//   Instagram,
//   Facebook,
//   Youtube,
  ArrowRight,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#2b211f] text-[#fff7f5]">

      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e58b8f]">
              Stay Beautiful
            </p>

            <h2 className="mt-2 font-serif text-3xl">
              Get beauty updates in your inbox
            </h2>

            <p className="mt-2 max-w-lg text-sm text-white/60">
              Be the first to know about new arrivals, exclusive offers,
              beauty tips, and special collections.
            </p>
          </div>

          <form className="flex w-full max-w-md overflow-hidden rounded-lg bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 px-4 py-3 text-sm text-zinc-900 outline-none"
            />

            <button
              type="submit"
              className="flex items-center gap-2 bg-[#ce5960] px-5 text-sm font-medium text-white transition hover:bg-[#b94c54]"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5">

        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block">
            <h2 className="font-serif text-4xl">
              MakeUp
            </h2>

            <p className="text-center text-[11px] tracking-[0.45em]">
              Wala
            </p>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
            Beauty essentials curated to help you discover products
            that make you feel confident, expressive, and uniquely you.
          </p>

          {/* Social Icons */}
         



         <div className="mt-6 flex gap-3">
  <a
    href="#"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-[#ce5960]"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="#"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-[#ce5960]"
  >
    <FaFacebookF size={17} />
  </a>

  <a
    href="#"
    aria-label="YouTube"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-[#ce5960]"
  >
    <FaYoutube size={18} />
  </a>
</div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">
            Shop
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
            <Link href="#" className="transition hover:text-white">
              All Products
            </Link>

            <Link href="#" className="transition hover:text-white">
              Categories
            </Link>

            <Link href="#" className="transition hover:text-white">
              New Arrivals
            </Link>

            <Link href="#" className="transition hover:text-white">
              Best Sellers
            </Link>
          </div>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">
            Help
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
            <Link href="/contact" className="transition hover:text-white">
              Contact Us
            </Link>

            <Link href="#" className="transition hover:text-white">
              Shipping
            </Link>

            <Link href="#" className="transition hover:text-white">
              Returns & Refunds
            </Link>

            <Link href="#" className="transition hover:text-white">
              FAQs
            </Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">
            Company
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
            <Link href="/about" className="transition hover:text-white">
              About Us
            </Link>

            <Link
              href="/appointment"
              className="transition hover:text-white"
            >
              Makeup Appointment
            </Link>

            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} MakeUp Wala. All rights reserved.
          </p>

          <p>
            Made with care for beauty lovers.
          </p>
        </div>
      </div>

    </footer>
  );
}

