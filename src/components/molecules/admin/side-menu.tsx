'use client'
import Image from "next/image";
import ItemMenu from "./item-menu";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/atomics/button";
import { Moon, Sun, Settings } from "lucide-react";

function SideMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav
      className={`bg-white h-[100vh] md:min-h-[90vh] flex flex-col items-center px-4 py-6 rounded-2xl md:transition-all md:duration-300 ${
        isExpanded ? "w-60 absolute z-10 md:static md:z-0" : "w-16"
      }`}
    >
      <button
        className="self-end mb-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Image src="/images/mnu.png" alt="toggle-menu" height={24} width={24} />
      </button>

      <Link href="/" className="mb-6">
        <Image
          src="/images/logo.svg"
          alt="logo"
          height={36}
          width={isExpanded ? 133 : 36}
        />
      </Link>

      <ul className="flex flex-col space-y-4 w-full">
        <ItemMenu
          image="/icons/building.svg"
          title="Dashboard"
          url="/dashboard"
          expanded={isExpanded}
        />
        <ItemMenu
          image="/icons/house-2 2.svg"
          title="My Listing"
          url="/dashboard/my-listings"
          expanded={isExpanded}
        />
        <ItemMenu
          image="/icons/card.svg"
          title="My Transactions"
          url="/dashboard/my-transactions"
          expanded={isExpanded}
        />
        <ItemMenu
          image="/icons/profile-2user-fill.svg"
          title="Customer"
          url="/"
          expanded={isExpanded}
        />
        <ItemMenu
          image="/icons/ticket-discount.svg"
          title="Voucher"
          url="/"
          expanded={isExpanded}
        />
        <ItemMenu
          image="/images/settings.png"
          title="Settings"
          url="/settings"
          expanded={isExpanded}
        />
      </ul>

      <div className="mt-auto flex flex-col items-center space-y-4 w-full">
        <ItemMenu
          image="/images/logout.png"
          title="Log out"
          url={`/sign-in`}
          expanded={isExpanded}
        />

        <div className="flex items-center justify-between w-full p-2 bg-gray-200 rounded-xl">
          <Button variant="ghost">
            <Sun className="w-5 h-5" />
          </Button>
          <Button variant="ghost">
            <Moon className="w-5 h-5" />
          </Button>
          <Button variant="ghost">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default SideMenu;
