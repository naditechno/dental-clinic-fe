"use client";
import Image from "next/image";
import Breadcrumbs from "@/components/molecules/breadcrumbs";
import CardBooking from "@/components/molecules/card/card-booking";
import { Button } from "@/components/atomics/button";
import { Separator } from "@/components/atomics/separator";
import { Checkbox } from "@/components/atomics/checkbox";
import { DatePickerDemo } from "@/components/molecules/date-picker";
import Link from "next/link";
import Listing from "./listing";
import Review from "./review";
import { useGetDetailListingQuery } from "@/services/listing.service";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import moment from "moment";
import { moneyFormat } from "@/lib/utils";
import { useTransactionMutation } from "@/services/transaction.service";
import { useToast } from "@/components/atomics/use-toast";

function Checkout({ params }: { params: { id: string } }) {
  const { data: listing } = useGetDetailListingQuery(params.id);
  const [transaction, { isLoading }] = useTransactionMutation();

  const router = useRouter();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const [startDate, setStartDate] = useState<Date | undefined>(
    moment(searchParams.get("start_date")).toDate()
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    moment(searchParams.get("end_date")).toDate()
  );

  const booking = useMemo(() => {
    let totalDays = 0,
      subTotal = 0,
      tax = 0,
      grandTotal = 0;

    if (startDate && endDate) {
      totalDays = moment(endDate).diff(startDate, "days") + 1;
      subTotal = totalDays * listing?.data.price_per_day;
      tax = subTotal * 0.1;
      grandTotal = subTotal + tax;
    }

    return { totalDays, subTotal, tax, grandTotal };
  }, [startDate, endDate, listing]);

  const handlePayment = async () => {
    try {
      const data = {
        listing_id: listing.data.id,
        start_date: moment(startDate).format("YYYY-MM-DD"),
        end_date: moment(endDate).format("YYYY-MM-DD"),
      };

      const res = await transaction(data).unwrap();

      if (res.success) {
        router.push(`/booking-success/${res.data.id}/success`);
      }
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.data.message,
        variant: "destructive",
      });
    }
  };

  return (
    <main>
      <section className="bg-gray-light pt-[170px] pb-[178px]">
        <div className="container mx-auto px-4 md:px-10">
          <Breadcrumbs />
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-10 flex flex-col lg:flex-row lg:space-x-[50px] -mt-[148px]">
        {listing?.data && <Listing listing={listing.data} />}

        <div className="w-full lg:max-w-[460px] pt-[50px]">
          <h1 className="font-bold text-[22px] leading-[33px] text-secondary">
            Booking Informations
          </h1>
          <div className="rounded-[30px] mt-2.5 p-[30px] bg-white border border-border shadow-indicator space-y-5">
            <DatePickerDemo
              placeholder="Start date"
              date={startDate}
              setDate={setStartDate}
            />
            <DatePickerDemo
              placeholder="End date"
              date={endDate}
              setDate={setEndDate}
            />

            <CardBooking
              title="Total days"
              value={`${booking.totalDays || 0} days`}
            />
            <CardBooking
              title="Sub total"
              value={moneyFormat.format(booking.subTotal || 0)}
            />
            <CardBooking
              title="Tax (10%)"
              value={moneyFormat.format(booking.tax || 0)}
            />
            <CardBooking
              title="Grand total price"
              value={moneyFormat.format(booking.grandTotal || 0)}
            />
          </div>

          <h1 className="mt-[30px] font-bold text-[22px] leading-[33px] text-secondary">
            Payment
          </h1>
          <div className="rounded-[30px] mt-2.5 p-[30px] bg-white border border-border shadow-indicator space-y-5">
            <div className="flex flex-wrap gap-3">
              <Button
                variant="third"
                size="button"
                className="flex-1 border-2 border-gray-light hover:border-primary"
                aria-label="Transfer"
              >
                <Image
                  src="/icons/card.svg"
                  alt="card"
                  height={24}
                  width={24}
                  className="mr-2.5"
                />
                Transfer
              </Button>
              <Button
                variant="third"
                size="button"
                className="flex-1 border-2 border-gray-light hover:border-primary"
                aria-label="Visa Payment"
              >
                <Image
                  src="/icons/visa.svg"
                  alt="visa"
                  height={0}
                  width={0}
                  className="h-full w-auto"
                />
              </Button>
            </div>
            <CardBooking title="Bank Name" value="BCA" />
            <CardBooking title="Bank Account" value="Nidejia Listings" />
            <CardBooking title="Number" value="2311103096" />
            <Separator className="bg-border" />
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-semibold leading-[21px]"
              >
                I agree with terms & conditions
              </label>
            </div>
            <Button
              variant="default"
              size="default"
              className="mt-4"
              onClick={handlePayment}
              disabled={isLoading}
            >
              Make a Payment
            </Button>
          </div>
        </div>
      </section>
      <Review />
    </main>
  );
}

export default Checkout;
