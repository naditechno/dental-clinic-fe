import { Button } from "@/components/atomics/button";
import Image from "next/image";

function CardOverview({
  image,
  title,
  location,
  wide,
  capacity,
  wifi,
}: {
  image: string;
  title: string;
  location: string;
  wide: string;
  capacity: number;
  wifi: number;
}) {
  return (
    <figure className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-3xl p-4 sm:p-5 border border-border shadow-indicator space-y-4 sm:space-y-0">
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 text-center sm:text-left">
        <Image
          src={image}
          alt={title}
          height={0}
          width={0}
          className="w-[100px] h-[75px] sm:w-[120px] sm:h-[90px] rounded-2xl"
        />

        <div>
          <h1 className="font-bold leading-8 text-secondary text-lg sm:text-xl">
            {title}
          </h1>
          <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2">
            <div className="flex items-center text-xs sm:text-sm font-semibold leading-[21px]">
              <Image
                src="/icons/location-dark.svg"
                alt="location-dark"
                height={0}
                width={0}
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
              />
              {location}
            </div>
            <div className="flex items-center text-xs sm:text-sm font-semibold leading-[21px]">
              <Image
                src="/icons/format-square-dark.svg"
                alt="format-square-dark"
                height={0}
                width={0}
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
              />
              {wide} sqft
            </div>
            <div className="flex items-center text-xs sm:text-sm font-semibold leading-[21px]">
              <Image
                src="/icons/profile-2user-dark.svg"
                alt="profile-2user-dark"
                height={0}
                width={0}
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
              />
              {capacity} people
            </div>
            <div className="flex items-center text-xs sm:text-sm font-semibold leading-[21px]">
              <Image
                src="/icons/wifi-dark.svg"
                alt="wifi-dark"
                height={0}
                width={0}
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
              />
              {wifi} gbps
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-end items-center space-y-2 space-x-2 sm:space-x-3.5">
        <Button variant="third" size="header">
          Manage
        </Button>
        <Button variant="third" size="header">
          Preview
        </Button>
      </div>
    </figure>
  );
}

export default CardOverview;
