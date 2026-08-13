
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
      <h1>Hello welcome </h1>


       {/* Featured Products Carousel */}
     <Suspense fallback={<FeaturedCarouselSkeleton />}>
        <FeatureCarousel products={featuredProducts} />
      </Suspense>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quis sunt ducimus, iusto voluptatem suscipit dolor, maiores optio facere perspiciatis esse, rerum officia dolorum. Asperiores excepturi nulla adipisci et suscipit aspernatur similique tenetur esse velit recusandae voluptas voluptatum, officia totam ad culpa magni architecto, nihil eos iure placeat. Labore, tempora.</p>
      
    </div>
    
  )

}