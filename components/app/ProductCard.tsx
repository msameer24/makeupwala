import { Heart, ShoppingBag, Star } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import type { FEATURED_PRODUCTS_QUERY_RESULT } from "@/sanity.types";
import Link from "next/link";
type ProductCardProps = {
  product: FEATURED_PRODUCTS_QUERY_RESULT[number];
};

export function ProductCard({ product }: ProductCardProps) {
  return (

<article className="w-70 shrink-0 rounded-2xl border border-[#eadbd8] bg-[#fffafa] p-4">
      <div className="relative h-65 overflow-hidden rounded-xl bg-[#fff5f3]">
     

    

         <Link href={`/products/${product.slug}`}>
         
          {product.images?.[0] && (
              <img
              src={urlFor(product.images[0])
                .width(800)
                .url()}
                
                className="h-full w-full object-cover p-2 rounded-xl"
                />
            )}
        </Link>

        {product.discount && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-[#c9575e] px-3 py-1 text-[10px] font-semibold text-white">
            {product.discount}
          </span>
        )}

        <button className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <Heart size={19} />
        </button>

      
      </div>

      <div className="pt-5">

        <h3 className="text-sm text-[#332927]">
          {product.name}
        </h3>

        <div className="mt-3 flex gap-1 text-[#ce5960]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              fill="currentColor"
            />
          ))}
        </div>

        <p className="mt-4 font-semibold"> ₹ {product.price}</p>

        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#ce5960] py-3 text-sm font-medium uppercase text-white hover:cursor-pointer">
          Add to Bag
          <ShoppingBag size={17} />
        </button>

      </div>
    </article>
  );
}