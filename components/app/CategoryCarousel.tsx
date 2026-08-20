'use client';

import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
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
import CategoryCard from "./CategoryCard";

import type { ALL_CATEGORIES_QUERY_RESULT } from "@/sanity.types";

interface CategoryCarouselProps {
  categories: ALL_CATEGORIES_QUERY_RESULT;
}

export default function CategoryCarousel({
  categories,
}: CategoryCarouselProps) {

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
    


  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#fff7f5] px-6 py-12">
      <div className="mx-auto max-w-350">

        <div className="mb-8">
          <h2 className="font-serif text-4xl text-[#281817]">
            Shop by Category
          </h2>

          <p className="mt-2 text-[#665856]">
            Explore our beauty collection by category.
          </p>
        </div>

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

            {categories.map((category) => (
              <CarouselItem
                key={category._id}
                className="
                  basis-full
                  pl-4
                  sm:basis-1/2
                  md:basis-1/3
                  lg:basis-1/4
                  xl:basis-1/5
                "
              >
                <CategoryCard category={category} />
              </CarouselItem>
            ))}

          </CarouselContent>

         
        </Carousel>

      </div>
    </section>
  );
}