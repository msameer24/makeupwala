import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCT_BY_SLUG_QUERY } from "@/sanity/queries/product";
import ProductInfo from "@/components/app/ProductInfo";
import { ProductGallery } from "@/components/app/ProductGallery";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: product } = await sanityFetch({
    query: PRODUCT_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery
          images={product.images}
          productName={product.name}
        />

        {/* <ProductDetails 
          name={product.name}
          description={product.description}
          price={product.price}
          discount={product.discount}
          category={product.category}
          stock={product.stock}
          
          
        />
          */}
      </div>
    </main>
  );
}