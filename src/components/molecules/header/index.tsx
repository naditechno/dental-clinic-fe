"use client";
import { Button } from "@/components/atomics/button";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atomics/dropdown-menu";
import Title from "@/components/atomics/title";
import { signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <header className="container mx-auto fixed inset-x-0 top-[30px] z-20 px-4 md:px-0">
      <div className="px-4 py-2 md:px-6 md:py-0 rounded-[20px] md:rounded-[30px] bg-white flex justify-between items-center shadow">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_dental_clinic.jpg"
            alt="logo dental"
            height={36}
            width={133}
            className="w-[100px] md:w-[133px]"
          />
          <h1 className="font-bold text-secondary text-lg md:text-2xl">
            Dental Clinic
          </h1>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-[20px] md:space-x-[30px] text-sm md:text-base">
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              <Link href="#categories-section">Categories</Link>
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              <Link href="#benefits-section">Benefit</Link>
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              <Link href="#review-section">Testimonials</Link>
            </li>
          </ul>
        </nav>

        {/* <div
          data-login={!!session?.user}
          className="data-[login=true]:hidden data-[login=false]:flex items-center space-x-2 md:space-x-3"
        >
          <Button
            variant="secondary"
            size="header"
            className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-base"
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button
            variant="default"
            size="header"
            className="shadow-button px-4 py-2 text-sm md:px-6 md:py-3 md:text-base"
          >
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div> */}

        <DropdownMenu>
          <DropdownMenuTrigger
            data-login={!!session?.user}
            className="data-[login=false]:hidden outline-none"
          >
            <div className="flex items-center space-x-2">
              <Title
                title={session?.user.name}
                section="header"
              />
              <Image
                src="/images/download.png"
                alt="avatar"
                height={48}
                width={48}
                className="rounded-full w-10 h-10 lg:w-12 lg:h-12"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[240px] mr-8 space-y-4">
            <DropdownMenuItem>
              <Link href={"/dashboard"}>Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/dashboard/my-listings"}>My Listings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>My Rentals</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut()}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Image
                src="/images/mnu.png"
                alt="menu"
                height={24}
                width={24}
                className="w-8 h-8"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] p-4 space-y-2 mx-4">
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#categories-section">Categories</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#benefits-section">Benefits</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#testimonials-section">Testimonials</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
