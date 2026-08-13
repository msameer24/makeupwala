
import { sanityFetch } from "@/sanity/lib/live";
import {FEATURED_PRODUCTS_QUERY } from "@/sanity/queries/product"
import { FeatureCarousel } from "@/components/featureCarousel";
import { FeaturedCarouselSkeleton } from "@/components/app/FeaturedCarouselSkeleton";
import { Suspense } from "react";
import { SanityLive } from "@/sanity/lib/live";




export default async function Home() {





  const { data: featuredProducts } = await sanityFetch({
    query: FEATURED_PRODUCTS_QUERY,
  });

    console.log("featuredProducts:", featuredProducts);

  
  
  return(
    <div>
      

       {/* Featured Products Carousel */}
     <Suspense fallback={<FeaturedCarouselSkeleton />}>
        <FeatureCarousel products={featuredProducts} />
      </Suspense>
     
    </div>
    
  )

}