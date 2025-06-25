"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atomics/dropdown-menu";
import { Input } from "@/components/atomics/input";
import Title from "@/components/atomics/title";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function TopMenu() {
  const { data: session } = useSession();

  return (
    <header
      className="w-full p-4 md:p-6 rounded-[30px] bg-white flex justify-between items-center"
      aria-label="Top Navigation Menu"
    >
      <div className="flex-1 max-w-md">
        <Input
          icon="/icons/search.svg"
          variant="auth"
          placeholder="Search listing or rental by name..."
          className="w-full"
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger
          data-login={!!session?.user}
          className="data-[login=false]:hidden outline-none"
        >
          <div className="flex items-center space-x-2">
            <Title
              title={session?.user.name}
              subtitle="Customer"
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
          <DropdownMenuItem>
            <Link href={"/"}>Menu</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>My Rentals</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default TopMenu;
