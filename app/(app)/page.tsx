
import { sanityFetch } from "@/sanity/lib/live";
import {FEATURED_PRODUCTS_QUERY } from "@/sanity/queries/product"


import { Suspense } from "react";
import { SanityLive } from "@/sanity/lib/live";
import HeroSection from "@/components/app/HeroSection";
import { ProductCard } from "@/components/app/ProductCard";
import { FeatureCarousel } from "@/components/app/featureCarousel";

export default async function Home() {

  const { data: featuredProducts } = await sanityFetch({
    query: FEATURED_PRODUCTS_QUERY,
  });

    // console.log("featuredProducts:", featuredProducts);



  return(
    <div>  

       {/* hero banner code */}

     <HeroSection />

  


<FeatureCarousel products={featuredProducts} />

  
    </div>
    
  )

}