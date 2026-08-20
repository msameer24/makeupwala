// import Link from "next/link";

// export type Category = {
//   _id: string;
//   title: string | null;
//   slug: string | null;
//   description?: string | null;
//   image?: {
//     asset?: {
//       _id: string;
//       url: string | null;
//     } | null;
//     hotspot?: unknown;
//   } | null;
// };

// type CategoryCardProps = {
//   category: Category;
// };

// export default function CategoryCard({
//   category,
// }: CategoryCardProps) {
//   const imageUrl = category.image?.asset?.url;

//   return (
//    <Link 
//    href={`/categories/${category.slug}`}
//    className=" group block overflow-hidden rounded-xl border bg-pink-100"
//    >

//         {/* Image */}
//     <div className=" border-2 border-amber-200 aspect-square overflow-hidden bg-gray-100">
//      {imageUrl ? (
//           <img
//             src={imageUrl}
//             alt={category.title ?? "Category"}
//             className="h-20 w-full  object-cover transition-transform duration-300 group-hover:scale-105 border-2 border-amber-200"
//           />
//         ) : (
//           <div className="flex h-full items-center justify-center">
//             <span className="text-sm text-gray-400">
//               No Image
//             </span>
//           </div>
//         )}

//     </div>

    
//       {/* Content */}

//     <div className="p-4">
//         <h3 className="text-center text-lg font-semibold">
//           {category.title ?? "Category"}
//         </h3>
//       </div>

   
//    </Link>
//   );
// }



import Link from "next/link";
import Image from "next/image";

type Category = {
  _id: string;
  title: string | null;
  slug: string | null;
  image: {
    asset: {
      _id: string;
      url: string | null;
    } | null;
  } | null;
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  if (!category.slug) {
    return null;
  }

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        
        <div className="relative aspect-square overflow-hidden">
          {category.image?.asset?.url ? (
            <Image
              src={category.image.asset.url}
              alt={category.title ?? "Category"}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-zinc-100">
              No Image
            </div>
          )}
        </div>

        <div className="p-4 text-center">
          <h3 className="font-medium">
            {category.title ?? "Category"}
          </h3>
        </div>

      </div>
    </Link>
  );
}