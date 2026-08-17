'use client';

import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ProductCard } from "./ProductCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';
import { urlFor } from "@/sanity/lib/image";
import { cn , formatPrice} from "@/lib/utils";
import type { FEATURED_PRODUCTS_QUERY_RESULT } from "@/sanity.types";


type FeaturedProduct = FEATURED_PRODUCTS_QUERY_RESULT[number];

interface FeaturedCarouselProps{
  products: FEATURED_PRODUCTS_QUERY_RESULT;
}


export function FeatureCarousel({ products }: FeaturedCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#fff7f5] px-6 py-16 h-200">
      <div className="mx-auto max-w-350 ">

       
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ce5960]">
            Best Sellers
          </p>

          <h2 className="mt-2 font-serif text-4xl text-[#281817]">
            Our Most Loved Picks ♡
          </h2>

          <p className="mt-2 text-[#665856]">
            Discover customer favorites that are loved and trusted.
          </p>
        </div>
        

        {/* Carousel */}
        <div className="relative">

          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >

            <CarouselContent className="-ml-4">

              {products.map((product) => (
                <CarouselItem
                  key={product._id}
                   className="basis-full pl-4 sm:basis-1/2 lg:basis-1/5"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}

            </CarouselContent>

            <CarouselPrevious className= "left-4 border-zinc-700 bg-zinc800/80 text-white hover:bg-pink-700  hover:text-white sm:left-8 "/>
            <CarouselNext className= "right-4 border-zinc-700 bg-zinc-800/80 text-white hover:bg-pink-700  hover:text-white sm:right-8"/>


          </Carousel>

        </div>

        {count > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  current === index
                    ? "w-6 bg-[#ce5960]"
                    : "bg-[#b67669]"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}