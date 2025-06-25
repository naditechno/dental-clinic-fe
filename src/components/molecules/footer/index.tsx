import Link from "next/link";
import Menu from "./menu";
import DataMenu from "@/json/footer-menu.json";
import { Input } from "@/components/atomics/input";
import { Button } from "@/components/atomics/button";
import Image from "next/image";
import { Separator } from "@/components/atomics/separator";

function Footer() {
  return (
    <footer className="bg-secondary py-2">
        <div className="mt-20 px-6 md:px-10 xl:container xl:mx-auto">
          <h2 className="text-2xl text-white font-bold mb-4">
            Visit Our Clinic
          </h2>
          <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.123897126745!2d109.91395944634992!3d-7.294080548493326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700b004aaf15c3%3A0x3919ce0a60136d65!2sKhitan%2FSunat%20Center%20Pak%20Adi!5e0!3m2!1sid!2sid!4v1750842531653!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      <div className="container mx-auto py-[50px] lg:py-[100px] px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0">
          <Menu title="Solutions" data={DataMenu.data.solutions} />
          <Menu title="Product" data={DataMenu.data.product} />
          <Menu title="Company" data={DataMenu.data.company} />
          <div className="col-span-2 text-white space-y-4">
            <span className="font-semibold leading-6 text-sm md:text-base">
              Subscribe & Free Rewards
            </span>
            <div className="relative mt-3">
              <Input
                type="text"
                placeholder="Email Address"
                icon="/icons/sms.svg"
                variant="footer"
                className="w-full"
              />
              <Button
                variant="default"
                size="footer"
                className="absolute right-0 top-0"
              >
                Subscribe
              </Button>
            </div>
            <div className="mt-[30px] space-y-3">
              <span className="font-semibold leading-6 text-sm md:text-base">
                Choose Language
              </span>
              <div className="flex items-center space-x-2.5">
                <Image
                  src="/images/uk.svg"
                  alt="UK"
                  height={0}
                  width={0}
                  className="w-[26.67px] h-5"
                />
                <span className="leading-6 text-sm md:text-base">
                  English (UK)
                </span>
                <Image
                  src="/icons/arrow-down.svg"
                  alt="arrow"
                  height={0}
                  width={0}
                  className="w-[18px] h-[18px]"
                />
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-[50px] bg-separator-foreground" />
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo_transparant.png"
              alt="logo"
              height={36}
              width={133}
            />
            <h1 className="font-bold text-white text-lg md:text-2xl">
              Dental Clinic
            </h1>
          </div>
          <span className="leading-6 lg:text-right text-white text-sm md:text-base">
            All Rights Reserved by Naditechno 2025
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
