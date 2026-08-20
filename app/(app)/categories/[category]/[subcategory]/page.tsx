// import { sanityFetch } from "@/sanity/lib/live";
// import { PRODUCTS_BY_CATEGORY_QUERY } from "@/sanity/queries/product";
// import { CATEGORY_BY_SLUG_QUERY } from "@/sanity/queries/categories";
// import { ProductCard } from "@/components/app/ProductCard";
// import Link from "next/link";

// interface SubcategoryPageProps {
//   params: Promise<{
//     category: string;
//     subcategory: string;
//   }>;
// }

// export default async function SubcategoryPage({
//   params,
// }: SubcategoryPageProps) {
//   const { category, subcategory } = await params;

//   console.log("CATEGORY:", category);
//   console.log("SUBCATEGORY:", subcategory);

//   const { data: subcategoryData } = await sanityFetch({
//     query: CATEGORY_BY_SLUG_QUERY,
//     params: {
//       slug: subcategory,
//     },
//   });

//   console.log("SUBCATEGORY DATA:", subcategoryData);

//   const { data: products } = await sanityFetch({
//     query: PRODUCTS_BY_CATEGORY_QUERY,
//     params: {
//       categorySlug: subcategory,
//     },
//   });

//   console.log("PRODUCTS:", products);

//   return (
//     <main className="min-h-screen px-6 py-10">
//       <div className="mx-auto max-w-7xl">

//         {/* Breadcrumb */}
//         <div className="mb-6">
//           <Link href={`/categories/${category}`}>
//             ← Back to {category}
//           </Link>
//         </div>

//         {/* Subcategory name */}
//         <h1 className="mb-2 text-3xl font-bold">
//           {subcategoryData?.title ?? subcategory}
//         </h1>

//         {/* Description */}
//         {subcategoryData?.description && (
//           <p className="mb-8 text-zinc-500">
//             {subcategoryData.description}
//           </p>
//         )}

//         {/* Products */}
//         {!products || products.length === 0 ? (
//           <div className="py-20 text-center">
//             <h2 className="text-xl font-semibold">
//               No products found
//             </h2>

//             <p className="mt-2 text-zinc-500">
//               No products are available in this subcategory.
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




import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCTS_BY_SUBCATEGORY_QUERY } from "@/sanity/queries/product";
import { CATEGORY_BY_SLUG_QUERY } from "@/sanity/queries/categories";
import { ProductCard } from "@/components/app/ProductCard";
import Link from "next/link";

interface SubcategoryPageProps {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}

export default async function SubcategoryPage({
  params,
}: SubcategoryPageProps) {

  const { category, subcategory } = await params;

  // Get subcategory information
  const { data: subcategoryData } = await sanityFetch({
    query: CATEGORY_BY_SLUG_QUERY,
    params: {
      slug: subcategory,
    },
  });

  // Get products belonging to this subcategory
  const { data: products } = await sanityFetch({
    query: PRODUCTS_BY_SUBCATEGORY_QUERY,
    params: {
      subcategorySlug: subcategory,
    },
  });

  return (
    <main className="min-h-screen px-6 py-10">

      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          href={`/categories/${category}`}
          className="mb-6 inline-block text-sm text-zinc-500 hover:text-black"
        >
          ← Back to {category}
        </Link>

        {/* Title */}
        <h1 className="mb-2 text-3xl font-bold">
          {subcategoryData?.title ?? subcategory}
        </h1>

        {/* Description */}
        {subcategoryData?.description && (
          <p className="mb-8 text-zinc-500">
            {subcategoryData.description}
          </p>
        )}

        {/* Products */}
        {products.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-xl font-semibold">
              No products found
            </h2>

            <p className="mt-2 text-zinc-500">
              No products are available in this subcategory.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}

          </div>
        )}

      </div>

    </main>
  );
}