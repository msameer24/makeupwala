// import { sanityFetch } from "@/sanity/lib/live";
// import { PRODUCTS_BY_CATEGORY_QUERY } from "@/sanity/queries/product";
// import { ALL_CATEGORIES_QUERY } from "@/sanity/queries/categories";
// import { ProductCard } from "@/components/app/ProductCard";
// import { notFound } from "next/navigation";
// import { CATEGORY_BY_SLUG_QUERY } from "@/sanity/queries/categories";
// import Link from "next/link";


// interface CategoryPageProps {
//   params: Promise<{
//     category: string;
//   }>;
// }

// export default async function CategoryPage({ params, }: CategoryPageProps) {

//   const { category } = await params;

//   const { data: products } = await sanityFetch({
//     query: PRODUCTS_BY_CATEGORY_QUERY,
//     params: {
//       categorySlug: category,
//     },
//   });

//   const { category } = await params;

// const { data } = await sanityFetch({
//   query: CATEGORY_BY_SLUG_QUERY,
//   params: {
//     slug: category,
//   },
// });


  

//   if (!products) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen px-6 py-10">

//       <div className="mx-auto max-w-7xl">

//         <h1 className="mb-8 text-3xl font-bold capitalize">
//           {category}

//         </h1>

// {data.subcategories?.map((subcategory) => (
//   <p key={subcategory._id}>
//     <Link href={`/categories/${category}/${subcategory.slug}`}>
//       {subcategory.title}
//     </Link>
//   </p>
// ))}
      
                 

//         {products.length === 0 ? (
//           <div className="py-20 text-center">
//             <h2 className="text-xl font-semibold">
//               No products found
//             </h2>

//             <p className="mt-2 text-zinc-500">
//               There are no products in this category yet.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

//             {products.map((product) => (
//               <ProductCard
//                 key={product._id}
//                 product={product}
//               />
//             ))}

//           </div>
//         )}

//       </div>

//     </main>
//   );
// }





// *********######################******************



import { sanityFetch } from "@/sanity/lib/live";

import {
  PRODUCTS_BY_CATEGORY_QUERY,
} from "@/sanity/queries/product";

import {
  CATEGORY_BY_SLUG_QUERY,
} from "@/sanity/queries/categories";

import { ProductCard } from "@/components/app/ProductCard";

import { notFound } from "next/navigation";

import Link from "next/link";


interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}


export default async function CategoryPage({
  params,
}: CategoryPageProps) {

  // Get category slug from URL
  const { category } = await params;


  // Get products belonging to this category
  const { data: products } = await sanityFetch({
    query: PRODUCTS_BY_CATEGORY_QUERY,
    params: {
      categorySlug: category,
    },
  });


  // Get category + its subcategories
  const { data: categoryData } = await sanityFetch({
    query: CATEGORY_BY_SLUG_QUERY,
    params: {
      slug: category,
    },
  });


  if (!categoryData) {
    notFound();
  }


  return (
    <main className="min-h-screen px-6 py-10">

      <div className="mx-auto max-w-7xl">


        {/* CATEGORY TITLE */}

        <h1 className="mb-8 text-3xl font-bold capitalize">
          {categoryData.title}
        </h1>


        {/* SUBCATEGORIES */}

        {categoryData.subcategories?.length > 0 && (
          <section className="mb-12">
{/* change style from here to show subcategory button and links  */}
            <h2 className="mb-4 text-xl font-semibold">
              Subcategories
            </h2>


            <div className="flex flex-wrap gap-4">

              {categoryData.subcategories.map((subcategory) => (

                <Link
                  key={subcategory._id}
                  href={`/categories/${category}/${subcategory.slug}`}
                  className="rounded-lg border px-5 py-3 transition hover:bg-pink-100"
                >
                  {subcategory.title}
                </Link>

              ))}

            </div>

          </section>
        )}


        {/* PRODUCTS */}

        {products.length === 0 ? (

          <div className="py-20 text-center">

            <h2 className="text-xl font-semibold">
              No products found
            </h2>

            <p className="mt-2 text-zinc-500">
              There are no products in this category yet.
            </p>

          </div>

        ) : (

          <section>

            <h2 className="mb-6 text-2xl font-semibold">
              Products
            </h2>


            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

              {products.map((product) => (

                <ProductCard
                  key={product._id}
                  product={product}
                />

              ))}

            </div>

          </section>

        )}

      </div>

    </main>
  );
}