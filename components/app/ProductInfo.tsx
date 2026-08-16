// import Link from "next/link";
// import { AddToCartButton } from "@/components/app/AddToCartButton";
// import { AskAISimilarButton } from "@/components/app/AskAISimilarButton";
// import { StockBadge } from "@/components/app/StockBadge";
// import { formatPrice } from "@/lib/utils";
// import type { PRODUCT_BY_SLUG_QUERY_RESULT } from "@/sanity.types";

// interface ProductInfoProps {
//   product: NonNullable<PRODUCT_BY_SLUG_QUERY_RESULT>;
// }

// export function ProductInfo({ product }: ProductInfoProps) {
//   const imageUrl = product.images?.[0]?.asset?.url;

//   return (
//     <div className="flex flex-col">
//       {/* Category */}
//       {product.category && (
//         <Link
//           href={`/?category=${product.category.slug}`}
//           className="text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
//         >
//           {product.category.title}
//         </Link>
//       )}

//       {/* Title */}
//       <h1 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
//         {product.name}
//       </h1>

//       {/* Price */}
//       <p className="mt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
//         {formatPrice(product.price)}
//       </p>

//       {/* Description */}
//       {product.description && (
//         <p className="mt-4 text-zinc-600 dark:text-zinc-400">
//           {product.description}
//         </p>
//       )}

//       {/* Stock & Add to Cart */}
//       <div className="mt-6 flex flex-col gap-3">
//         <StockBadge productId={product._id} stock={product.stock ?? 0} />
//         <AddToCartButton
//           productId={product._id}
//           name={product.name ?? "Unknown Product"}
//           price={product.price ?? 0}
//           image={imageUrl ?? undefined}
//           stock={product.stock ?? 0}
//         />
//         <AskAISimilarButton productName={product.name ?? "this product"} />
//       </div>

//       {/* Metadata */}
//       <div className="mt-6 space-y-2 border-t border-zinc-200 pt-6 dark:border-zinc-800">
//         {product.material && (
//           <div className="flex justify-between text-sm">
//             <span className="text-zinc-500 dark:text-zinc-400">Material</span>
//             <span className="font-medium capitalize text-zinc-900 dark:text-zinc-100">
//               {product.material}
//             </span>
//           </div>
//         )}
//         {product.color && (
//           <div className="flex justify-between text-sm">
//             <span className="text-zinc-500 dark:text-zinc-400">Color</span>
//             <span className="font-medium capitalize text-zinc-900 dark:text-zinc-100">
//               {product.color}
//             </span>
//           </div>
//         )}
//         {product.dimensions && (
//           <div className="flex justify-between text-sm">
//             <span className="text-zinc-500 dark:text-zinc-400">Dimensions</span>
//             <span className="font-medium text-zinc-900 dark:text-zinc-100">
//               {product.dimensions}
//             </span>
//           </div>
//         )}
//         {product.assemblyRequired !== null &&
//           product.assemblyRequired !== undefined && (
//             <div className="flex justify-between text-sm">
//               <span className="text-zinc-500 dark:text-zinc-400">Assembly</span>
//               <span className="font-medium text-zinc-900 dark:text-zinc-100">
//                 {product.assemblyRequired ? "Required" : "Not required"}
//               </span>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// }


// *************************




"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Truck,
  Gift,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
  product: any;
}

export default function ProductPage({
  product,
}: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedShade, setSelectedShade] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  /*
   * Your Sanity images
   *
   * If your schema uses `images`, this works.
   * If your field is named differently, change it here.
   */
  const images = product.images || [];

  /*
   * Temporary shades for frontend practice.
   *
   * Later you can replace these with your
   * actual Sanity shade data.
   */
  const shades = [
    "#5B3025",
    "#A66B4B",
    "#C78965",
    "#DFA07E",
    "#EFBD9B",
  ];

  return (
    <main className="min-h-screen bg-[#fffafa] text-[#24191a]">

      {/* =========================================
          ANNOUNCEMENT BAR
      ========================================= 

      <div className="flex h-10 items-center justify-center gap-6 bg-[#f5d1cc] px-4 text-xs text-[#4d3435]">

        <span>
          ✦ Free Shipping on Orders Over $499
        </span>

        <span className="h-4 w-px bg-[#b88986]" />

        <span>
          🎁 Exclusive Offers on First Order
        </span>

      </div>

      */}

      {/* =========================================
          BREADCRUMB
      ========================================= */}

      <div className="mx-auto max-w-362.5 px-6 py-6 text-xs text-[#77696b]">

        Home

        <span className="mx-3">›</span>

        Shop

        <span className="mx-3">›</span>

        Face

        <span className="mx-3">›</span>

        {product.category?.title || "Foundation"}

        <span className="mx-3">›</span>

        <span className="text-[#403335]">
          {product.name}
        </span>

      </div>

      {/* =========================================
          PRODUCT AREA
      ========================================= */}

      <section className="mx-auto grid max-w-362.5 gap-10 px-6 pb-10 lg:grid-cols-[1.1fr_1fr]">

        {/* =====================================
            IMAGE GALLERY
        ===================================== */}

        <div className="flex gap-4">

          {/* Thumbnails */}

          <div className="flex w-16 flex-col gap-4">

            {images.map(
              (image: any, index: number) => (
                <button
                  key={index}
                  onClick={() =>
                    setSelectedImage(index)
                  }
                  className={`relative h-20 w-16 overflow-hidden rounded-lg border bg-[#fffafa] ${
                    selectedImage === index
                      ? "border-[#d65c60]"
                      : "border-[#eee0dc]"
                  }`}
                >

                  <Image
                    src={urlFor(image)
                      .width(200)
                      .height(200)
                      .url()}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />

                </button>
              )
            )}

            <button className="flex h-10 w-10 items-center justify-center">
              <ChevronDown size={18} />
            </button>

          </div>

          {/* Main Image */}

          <div className="relative flex min-h-140 flex-1 items-center justify-center overflow-hidden rounded-xl border border-[#eadedb] bg-[#fffafa]">

            {/* Badge */}

            <span className="absolute left-5 top-5 z-10 rounded-full bg-[#c94d55] px-4 py-2 text-[10px] font-semibold text-white">
              BEST SELLER
            </span>

            {images.length > 0 && (
              <Image
                src={urlFor(images[selectedImage])
                  .width(1000)
                  .height(1000)
                  .url()}
                alt={product.name}
                fill
                priority
                className="object-contain p-10"
              />
            )}

            {/* Zoom */}

            <button className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
              <Search size={17} />
            </button>

          </div>

        </div>

        {/* =====================================
            PRODUCT INFORMATION
        ===================================== */}

        <div className="pt-2">

          <h1 className="font-serif text-4xl leading-tight">
            {product.name}
          </h1>

          {/* Rating */}

          <div className="mt-4 flex items-center gap-3">

            <div className="text-[#d9585c]">
              ★★★★★
            </div>

            <span className="text-sm">
              4.8 (256 Reviews)
            </span>

          </div>

          {/* Price */}

          <div className="mt-5 flex items-center gap-4">

            <span className="text-3xl font-semibold">
              ${product.price}
            </span>

            <span className="text-sm text-gray-400 line-through">
              $66.00
            </span>

            <span className="rounded bg-[#fae5e2] px-3 py-1 text-xs text-[#d45c5c]">
              26% OFF
            </span>

          </div>

          {/* Description */}

          <p className="mt-8 max-w-xl text-sm leading-7 text-[#625658]">
            {product.description}
          </p>

          {/* =====================================
              SHADE
          ===================================== */}

          <div className="mt-7">

            <p className="mb-4 text-sm">
              Shade:{" "}
              <span className="font-medium">
                3 Warm Beige
              </span>
            </p>

            <div className="flex gap-4">

              {shades.map(
                (shade, index) => (
                  <button
                    key={shade}
                    onClick={() =>
                      setSelectedShade(index)
                    }
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      selectedShade === index
                        ? "border-2 border-[#d65c60]"
                        : "border border-[#eadedb]"
                    }`}
                  >

                    <span
                      className="h-7 w-7 rounded-full"
                      style={{
                        backgroundColor: shade,
                      }}
                    />

                  </button>
                )
              )}

            </div>

          </div>

          {/* =====================================
              QUANTITY
          ===================================== */}

          <div className="mt-7">

            <p className="mb-3 text-sm">
              Quantity:
            </p>

            <div className="flex w-fit overflow-hidden rounded-md border border-[#eadedb]">

              <button
                onClick={() =>
                  setQuantity(
                    Math.max(
                      1,
                      quantity - 1
                    )
                  )
                }
                className="px-4 py-3"
              >
                <Minus size={14} />
              </button>

              <span className="border-x border-[#eadedb] px-6 py-3 text-sm">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="px-4 py-3"
              >
                <Plus size={14} />
              </button>

            </div>

          </div>

          {/* =====================================
              ACTION BUTTONS
          ===================================== */}

          <div className="mt-7 grid grid-cols-2 gap-4">

            <button className="rounded-md bg-[#d65c60] py-4 text-sm font-medium text-white hover:bg-[#c75055]">
              ADD TO CART
            </button>

            <button className="rounded-md border border-[#d65c60] py-4 text-sm font-medium text-[#d65c60] hover:bg-[#fff2f0]">
              BUY NOW
            </button>

          </div>

          {/* =====================================
              PRODUCT BENEFITS
          ===================================== */}

          <div className="mt-8 grid grid-cols-4 gap-3 border-t border-[#eee3e0] pt-7">

            <SmallBenefit
              icon={<ShieldCheck size={24} />}
              title="100%"
              subtitle="Authentic"
            />

            <SmallBenefit
              icon={<Heart size={24} />}
              title="Easy"
              subtitle="Returns"
            />

            <SmallBenefit
              icon={<Truck size={24} />}
              title="Free"
              subtitle="Shipping"
            />

            <SmallBenefit
              icon={<ShoppingBag size={24} />}
              title="Secure"
              subtitle="Payment"
            />

          </div>

        </div>

      </section>

      {/* =========================================
          PRODUCT DETAILS
      ========================================= */}

      <section className="mx-auto max-w-350 border-t border-[#eee3e0] px-6 py-12">

        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr]">

          {/* Details */}

          <div>

            <div className="flex gap-8 border-b border-[#eee3e0]">

              {[
                "description",
                "ingredients",
                "how to use",
                "reviews",
              ].map((tab) => (

                <button
                  key={tab}
                  onClick={() =>
                    setActiveTab(tab)
                  }
                  className={`pb-4 text-xs font-semibold uppercase ${
                    activeTab === tab
                      ? "border-b-2 border-[#d65c60] text-[#d65c60]"
                      : "text-[#514548]"
                  }`}
                >
                  {tab}
                  {tab === "reviews" &&
                    " (256)"}
                </button>

              ))}

            </div>

            <div className="pt-7">

              <p className="max-w-2xl text-sm leading-7 text-[#625658]">
                {product.description}
              </p>

              <ul className="mt-6 space-y-4 text-sm text-[#625658]">

                <li>
                  <span className="mr-3 text-[#d65c60]">
                    ✓
                  </span>
                  Full coverage, lightweight feel
                </li>

                <li>
                  <span className="mr-3 text-[#d65c60]">
                    ✓
                  </span>
                  24-hour wear & oil control
                </li>

                <li>
                  <span className="mr-3 text-[#d65c60]">
                    ✓
                  </span>
                  Waterproof & sweat-resistant
                </li>

                <li>
                  <span className="mr-3 text-[#d65c60]">
                    ✓
                  </span>
                  Suitable for all skin types
                </li>

              </ul>

            </div>

          </div>

          {/* Shade Finder */}

          <div className="relative overflow-hidden rounded-xl bg-[#fceceb] p-8">

            <h2 className="font-serif text-2xl">
              Need help choosing
              <br />
              the right shade?
            </h2>

            <p className="mt-3 text-sm text-[#756668]">
              Try our shade finder
            </p>

            <button className="mt-5 rounded-md border border-[#d65c60] px-5 py-3 text-xs text-[#d65c60]">
              FIND MY SHADE
            </button>

          </div>

        </div>

      </section>

      {/* =========================================
          FOOTER BENEFITS
      ========================================= */}

      <section className="mx-6 rounded-xl bg-[#fff0ee]">

        <div className="grid grid-cols-2 lg:grid-cols-4">

          <LargeBenefit
            icon={<Truck />}
            title="Free Shipping"
            subtitle="On orders over $499"
          />

          <LargeBenefit
            icon={<Gift />}
            title="Exclusive Offers"
            subtitle="On your first order"
          />

          <LargeBenefit
            icon={<ShieldCheck />}
            title="100% Authentic"
            subtitle="Genuine products"
          />

          <LargeBenefit
            icon={<Headphones />}
            title="24/7 Support"
            subtitle="We're here to help"
          />

        </div>

      </section>

      {/* =========================================
          NEWSLETTER
      ========================================= */}

      <section className="mx-6 mt-5 rounded-xl bg-[#fff0ee] px-7 py-10">

        <div className="mx-auto flex max-w-325 flex-col justify-between gap-6 lg:flex-row lg:items-center">

          <div>

            <h2 className="font-serif text-3xl">
              Stay Glowing
            </h2>

            <p className="mt-2 max-w-md text-sm text-[#756668]">
              Get exclusive offers, new arrivals and beauty
              tips straight to your inbox.
            </p>

          </div>

          <div className="flex w-full max-w-xl">

            <input
              type="email"
              placeholder="Enter your email address"
              className="h-12 flex-1 border border-[#e5d6d3] bg-white px-4 text-sm outline-none"
            />

            <button className="bg-[#d65c60] px-8 text-xs font-medium text-white">
              SUBSCRIBE
            </button>

          </div>

        </div>

      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="mx-auto max-w-350 px-6 pb-8 pt-14">

        <div className="grid gap-10 border-b border-[#eee3e0] pb-10 md:grid-cols-5">

          <div>

            <h2 className="font-serif text-3xl">
              Glamora
            </h2>

            <p className="text-[9px] tracking-[0.45em]">
              BEAUTY
            </p>

            <p className="mt-5 max-w-47.5 text-xs leading-6 text-[#756668]">
              Enhancing your beauty with premium products.
            </p>

          </div>

          <FooterColumn
            title="SHOP"
            links={[
              "All Products",
              "New Arrivals",
              "Best Sellers",
              "Brands",
              "Sale",
            ]}
          />

          <FooterColumn
            title="CUSTOMER CARE"
            links={[
              "Contact Us",
              "FAQs",
              "Shipping Policy",
              "Return Policy",
              "Track Order",
            ]}
          />

          <FooterColumn
            title="ABOUT US"
            links={[
              "Our Story",
              "Blog",
              "Terms & Conditions",
              "Privacy Policy",
            ]}
          />

          <FooterColumn
            title="SUPPORT"
            links={[
              "Live Chat",
              "Email Us",
              "+1 234 567 8900",
            ]}
          />

        </div>

        <div className="flex justify-between pt-6 text-xs text-[#756668]">

          <p>
            © 2025 Glamora Beauty. All Rights Reserved.
          </p>

          <div className="hidden gap-5 md:flex">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
            <span>G Pay</span>
          </div>

        </div>

      </footer>

    </main>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function SmallBenefit({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">

      <div className="text-[#d65c60]">
        {icon}
      </div>

      <p className="mt-2 text-xs font-medium">
        {title}
      </p>

      <p className="text-[10px] text-[#756668]">
        {subtitle}
      </p>

    </div>
  );
}


function LargeBenefit({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center border-r border-[#ead3d0] px-4 py-9 text-center">

      <div className="text-[#d65c60]">
        {icon}
      </div>

      <h3 className="mt-3 font-serif text-lg">
        {title}
      </h3>

      <p className="mt-1 text-xs text-[#756668]">
        {subtitle}
      </p>

    </div>
  );
}


function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>

      <h3 className="mb-5 text-xs font-semibold">
        {title}
      </h3>

      <ul className="space-y-3">

        {links.map((link) => (
          <li
            key={link}
            className="text-xs text-[#756668]"
          >
            {link}
          </li>
        ))}

      </ul>

    </div>
  );
}