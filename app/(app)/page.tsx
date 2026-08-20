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
import Link from "next/link";
import CategoryCard from "@/components/app/CategoryCard";
import { ALL_CATEGORIES_QUERY } from "@/sanity/queries/categories";
import CategoryCarousel from "@/components/app/CategoryCarousel";


export default async function Home() {

  const { data: featuredProducts } = await sanityFetch({
    query: FEATURED_PRODUCTS_QUERY,
    
  });


   const { data: products } = await sanityFetch({
    query: ALL_PRODUCTS_QUERY,
  });


const { data: categories } = await sanityFetch({
  query: ALL_CATEGORIES_QUERY,
});



    // console.log("featuredProducts:", featuredProducts);

    


  return(
    <div>  
      
      {/* <HeroSection />*/}
      {/* <FeatureCarousel products={featuredProducts}/> */}
      {/* <ProductSection products={products} />    */}
      <CategoryCarousel categories={categories} />

</div>
    
  )

}