"use client";
import React from "react";
import Title from "@/components/atomics/title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atomics/carousel";
import listings from "@/json/listings.json";
import CardDeals from "@/components/molecules/card/card-deals";
import { Listing } from "@/interfaces/listing";
// import { useGetAllListingQuery } from "@/services/listing.service";

interface ListingShowcaseProps {
  id: string;
  title: string;
  subtitle: string;
}

function ListingShowcase({ id, title, subtitle }: ListingShowcaseProps) {
  // const { data: listings } = useGetAllListingQuery({});

  return (
    <section id={id} className="px-10 xl:container xl:mx-auto pt-16 pb-[100px]">
      <div className="flex justify-center text-center">
        <Title title={title} subtitle={subtitle} />
      </div>
      <Carousel className="w-full mt-[30px]">
        <CarouselContent className="md:gap-x-1 lg:gap-x-0">
          {listings?.data.map((item: Listing, index: number) => (
            <CarouselItem key={index} className="basis-auto">
              <CardDeals
                image={item.attachments?.[0] || "/images/default.jpg"}
                title={item.title}
                description={item.description}
                subtitle={item.description.slice(0, 60) + "..."} // opsional
                duration_minutes={item.duration_minutes}
                duration={`${item.duration_minutes} mins`}
                doctor={item.doctor}
                price={item.price}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default ListingShowcase;
