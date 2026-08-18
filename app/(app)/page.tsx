
import { sanityFetch } from "@/sanity/lib/live";
import {
  FEATURED_PRODUCTS_QUERY,
  ALL_PRODUCTS_QUERY,

} from "@/sanity/queries/product"


import { Suspense } from "react";
import { SanityLive } from "@/sanity/lib/live";
import HeroSection from "@/components/app/HeroSection";
import { ProductCard } from "@/components/app/ProductCard";
import { ProductSection } from "@/components/app/ProductSection";
import { FeatureCarousel } from "@/components/app/FeatureCarousel";

import { FeatureCarouselTest } from "@/components/app/FeatureCarousel2";


export default async function Home() {

  const { data: featuredProducts } = await sanityFetch({
    query: FEATURED_PRODUCTS_QUERY,
    
  });


   const { data: products } = await sanityFetch({
    query: ALL_PRODUCTS_QUERY,
  });


    // console.log("featuredProducts:", featuredProducts);

    


  return(
    <div>  
      
      <HeroSection />
      <FeatureCarousel products={featuredProducts}/>
      <ProductSection products={products} />  

    </div>
    
  )

}