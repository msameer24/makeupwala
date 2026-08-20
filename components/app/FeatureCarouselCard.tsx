"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { FEATURED_PRODUCTS_QUERY_RESULT } from "@/sanity.types";
import { AddToCartButton } from "./AddToCartButton";

type Product = FEATURED_PRODUCTS_QUERY_RESULT[number];

interface FeaturedProductCardProps {
  product: Product;
}

export function FeatureProductCard({
  product,
}: FeaturedProductCardProps) {
  const imageUrl = product.images?.[0]?.asset?.url;

  return (
    <Card className="group flex h-120 flex-col overflow-hidden rounded-2xl border border-[#eadbd8] bg-white p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <Link href={`/products/${product.slug ?? ""}`}>
        <div className="relative h-70 w-full overflow-hidden bg-[#fff5f3]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={product.name ?? "Product image"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="300px"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-zinc-400">
              No image
            </div>
          )}

          {product.category?.title && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur">
              {product.category.title}
            </span>
          )}

          {product.discount && product.discount > 0 && (
            <span className="absolute right-3 top-3 z-10 rounded-full bg-[#ce5960] px-3 py-1 text-xs font-medium text-white">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </Link>

      {/* Details */}
      <CardContent className="flex flex-1 flex-col ">
        <Link href={`/products/${product.slug ?? ""}`}>
          <h3 className="line-clamp-2 text-sm font-medium leading-5 text-zinc-900 hover:text-[#ce5960]">
            {product.name ?? "Product Name"}
          </h3>
        </Link>

        <p className="mt-auto pt-3 text-lg font-semibold text-zinc-900">
          ₹ {product.price ?? 0}
        </p>
      </CardContent>

      {/* Cart */}
      <CardFooter className="p-4 pt-0">
      <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#ce5960] mt-2 py-2 text-sm font-medium text-white transition hover:bg-[#b94c54]">
          Add To Cart
          <ShoppingBag size={15} />
        </button> 
            
      </CardFooter>
    </Card>
  );
}