'use client';

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay"


import { ArrowRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';

// import  from '';
import { Button } from "./ui/button";
import {Badge}  from '@/components/ui/badge';
import { cn , formatPrice} from "@/lib/utils";

import type { FEATURED_PRODUCTS_QUERY_RESULT } from "@/sanity.types";


type featureProduct = FEATURED_PRODUCTS_QUERY_RESULT[number]

interface featureCarouselProps{
    products: FEATURED_PRODUCTS_QUERY_RESULT;
 }



 export function featureCarousel( {products} : featureCarouselProps) {
     const [api, setApi] = useState<CarouselApi>()
     const [current, setCurrent] = useState(0);
     const [count, setCount] = useState(0);


   useEffect( () => {
     if(!api) return;

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
    [api],
   );

   if( products.length === 0){
    return null;
   }
  return (
    <div >
        <Carousel
          setApi={setApi}
          opts={{
            loop:true,
            align:"start",
          }}

          plugins={[
             Autoplay({
             delay: 2000,
             stopOnIneraction: false,
             stopOnMouseEnter: false,
                }),
            ]}
            className="w-full"
        >

        <CarouselContent>
 
          {
            products.map((product) => (
                <CarouselItem key={product._id} className="pl-0">
                  <FeaturedSlide product={product} />
                </CarouselItem>
              ))
          }
        </CarouselContent>


        <CarouselPrevious className= "left-4 border-zinc-700 bg-zinc800/80 text-white hover:bg-zinc-700  hover:text-white sm:left-8 "/>
        <CarouselNext className= "right-4 border-zinc-700 bg-zinc-800/80 text-white hover:bg-zinc-700  hover:text-white sm:right-8"/>

        </Carousel>
    </div>
  )
}

