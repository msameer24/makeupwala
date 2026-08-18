"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { PRODUCT_BY_SLUG_QUERY_RESULT } from "@/sanity.types";

type ProductImages = NonNullable<
  NonNullable<PRODUCT_BY_SLUG_QUERY_RESULT>["images"]
>;

interface ProductGalleryProps {
  images: ProductImages | null;
  productName: string | null;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
        <span className="text-zinc-400">No images available</span>
      </div>
    );
  }

const selectedImage = images[selectedIndex];
const selectedImageUrl = selectedImage?.asset?.url;

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex w-20 flex-col gap-3">
        {images.map((image, index) => {
          const imageUrl = image.asset?.url;

          if (!imageUrl) return null;

          return (
            <button
              key={image._key}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
                selectedIndex === index
                  ? "border-pink-500"
                  : "border-transparent"
              }`}
            >
           
           <Image
                src={imageUrl}
                alt={`${productName ?? "Product"} image ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />

            </button>
          );
        })}
      </div>

      {/* Main image */}
      <div className="relative aspect-square flex-1 overflow-hidden rounded-2xl bg-[#fff7f5]">
        {selectedImage?.asset?.url ? (
       <Image
            src={selectedImage.asset.url}
            alt={productName ?? "Product image"}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw" />

        ) : (
          <div className="flex h-full items-center justify-center text-zinc-400">
            No image
          </div>
        )}
      </div>
    </div>
  );




}
