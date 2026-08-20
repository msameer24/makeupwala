"use client";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { 
  Camera, 
  Search,
  Package, 
  ShoppingBag, 
  Sparkles, 
  UserRound,
  User,
} from 'lucide-react';


export function Header() {
 

const {isSignedIn } = useAuth();

  return (
   
    
      
        <header className="sticky top-0 z-50 border-b border-[#eee2df] bg-white">

        <div className="mx-auto flex h-24 max-w-362.5 items-center justify-between px-6">

          {/* logo link */}
       
{/* style one 

from here |..

   <Link href="/" className="flex items-center gap-2"> 
         <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100"> The MakeUp </h1>
          <span className="text-xl font-bold text-zinc-900 bg-[#f5d1cc] p-1.5 rounded-md">Wala </span>
    </Link>
     



*/}
          <div >
       <Link href="/" className="cursor-pointer">
            <h1 className="font-serif text-4xl ">
              MakeUp
            </h1>

            <p className="text-center text-[12px] tracking-[0.45em]">
              Wala
            </p></Link>
          </div>


          {/* Navigations Links  */}
          <nav className="hidden gap-10 text-md lg:flex">
            
           <a href="/">Home</a>

            <a href="/shop"
              className="relative text-[#d15d61]">
              Shop <span className="absolute -bottom-9 left-0 h-1px w-full bg-[#d15d61]" />
            </a>

            <a href="#">New Arrivals</a>
            <a href="#">Best Sellers</a>
            <a href="#">Brands</a>
            <a href="/appointment">Makeup Appointment</a>
            <a href="/contact">Contact</a>




          </nav>


 {/* Icons and buttons  */}

          <div className="flex items-center gap-5">
            <button className=" cursor-pointer">
              <Search size={22} strokeWidth={1.5} />
            </button>
            <button
          >
              {/* button style maybe  className=" cursor-pointer transition-transform duration-200 hover:scale-110 hover:bg-[#d6888a] hover:text-white  hover:p-1 hover:rounded-[10px]" */}
              <ShoppingBag size={22} strokeWidth={1.5} />
            </button>

            {/* account login button  */}
            
              {isSignedIn ? (
                  <UserButton />
                ) : (
                <SignInButton mode="modal">
                    <Button  type="button" variant="outline" size="icon-lg" className=" cursor-pointer transition-transform duration-200 hover:scale-110 hover:bg-[#d6888a] hover:text-white">
                    <UserRound size={22} strokeWidth={2} />

                    </Button>
                </SignInButton>
                )}
          </div>

      </div>
    </header>
  );
}
