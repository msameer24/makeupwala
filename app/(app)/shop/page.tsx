import { Metadata } from 'next';
import { ProductSection } from '@/components/app/ProductSection';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_PRODUCTS_QUERY } from '@/sanity/queries/product';



const { data: products } = await sanityFetch({
    query: ALL_PRODUCTS_QUERY,
  });



export default function ShopPage() {
  return (
    <section>

    <div>

        <ProductSection products={products} />
    </div>
    </section>
    
  );
}