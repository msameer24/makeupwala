import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/components/app/Header";
import { SanityLive } from "@/sanity/lib/live";
import { FeatureCarousel } from "@/components/app/FeatureCarousel";
import { Footer } from "@/components/app/Footer";
import { sanityFetch } from "@/sanity/lib/live";
  
function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
   
      <main className="flex-1">
        <Header />     
        {children}
        <Footer />
      </main>
    
    </ClerkProvider>
   
  );
}

export default AppLayout;
