import { Badge } from "@/components/atomics/badge";
import { Button } from "@/components/atomics/button";
import { CityTransactionProps } from "@/interfaces/city-transaction";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineClock, HiOutlineCurrencyDollar } from "react-icons/hi";

function CardTransaction({
  id,
  image,
  title,
  location,
  days,
  price,
  status,
}: CityTransactionProps) {
  return (
    <figure className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-3xl p-4 border border-border shadow-indicator space-y-4 sm:space-y-0">
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 text-center sm:text-left">
        <Image
          src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${image}`}
          alt={title}
          height={0}
          width={0}
          className="w-[100px] h-[75px] sm:w-[120px] sm:h-[90px] rounded-2xl"
          unoptimized
        />

        <div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <h1 className="font-bold leading-8 text-secondary text-sm sm:text-base">
              {title}
            </h1>
            {status === "waiting" && (
              <Badge variant={"waiting"}>{status}</Badge>
            )}
            {status === "approved" && (
              <Badge variant={"approved"}>{status}</Badge>
            )}
            {status === "canceled" && (
              <Badge variant={"canceled"}>{status}</Badge>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2">
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
                <HiOutlineClock className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                {days} days
              </div>
              <div className="flex items-center text-xs sm:text-sm font-semibold leading-[21px]">
                <HiOutlineCurrencyDollar className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                {price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-end items-center space-y-2 space-x-2 sm:space-x-3.5">
              <Button variant="third" size="header">
                Manage
              </Button>
              <Link href={`/booking-success/${id}/success`}>
                <Button variant="third" size="header">
                  Preview
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default CardTransaction;
