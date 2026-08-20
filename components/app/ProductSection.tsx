import type { ALL_PRODUCTS_QUERY_RESULT } from "@/sanity.types";
import { ProductCard } from "./ProductCard";

interface ProductSectionProps  {
  products: ALL_PRODUCTS_QUERY_RESULT;
};

export function ProductSection({ products }: ProductSectionProps) {
    if (!products || products.length === 0) {
    return null;
  }

  return (
    // <section className="mx-auto max-w-7xl px-6 py-12">
  <section className="bg-[#fff7f5] px-6 py-12">
    <div className="mb-8">
      <h2 className="mt-2 font-serif text-4xl text-[#281817]">
            Shop All Product ♡
          </h2>

          <p className="mt-2 text-[#665856]">
            Discover customer favorites that are loved and trusted.
          </p>
        </div>
        
<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>


    </section>
  );
}