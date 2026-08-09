import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import {All_CATEGORIE_QUERY} from "@/sanity/queries/categories"
import { featureCarousel } from "@/components/featureCarousel";

interface PageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    
  }>;
}

export default async function Home( { searchParams }: PageProps) {
  


const params = await searchParams;

const searchQuery = params.q ?? "";
const categorySlug = params.category ?? "";


 console.log("--- Incoming Search Params ---");
 console.log({ params});
  console.log({ searchQuery});
  console.log({ categorySlug });


// qurey by category

// const categories = await sanityFetch( 
//     {
//       query : '*[_type == "category"]'
//     }
// )
// console.log(categories);
  



// query by customer 

// const customer = await sanityFetch( 
//     {
//       query : '*[_type == "customer"]',
//     }
// )
// console.log(customer);
  


//  query by orders

// const orders = await sanityFetch( 
//     {
       
//        query : ORDER_BY_USER_QUERY,
    
//     }
// )
//  console.log(orders);
  



  return (
      <div>
          <h1 className='flex justify-center m-10 p-10'>Welcome to the MakeUp Wala</h1>
          <p className='flex justify-center '>Welcome to the MakeUp Wala offical ! This route is automatically created by Next.js based on the folder structure.</p>
      </div> 
        
  );
}
