"use client";
import { Badge } from "@/components/atomics/badge";
import { Button } from "@/components/atomics/button";
import { Separator } from "@/components/atomics/separator";
import Title from "@/components/atomics/title";
import { Transaction } from "@/interfaces/transaction";
import { useGetDetailTransactionQuery } from "@/services/transaction.service";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

function BookingSuccess({ params }: { params: { id: string } }) {
  const { data } = useGetDetailTransactionQuery(params?.id);
  const booking: Transaction = useMemo(() => data?.data, [data]);

  const propertyDetails = useMemo(
    () => [
      {
        icon: "/icons/location-dark.svg",
        alt: "Location Icon",
        text: booking?.listing?.address,
      },
      {
        icon: "/icons/format-square-dark.svg",
        alt: "Size Icon",
        text: `${booking?.listing?.sqft} sqft`,
      },
      {
        icon: "/icons/profile-2user-dark.svg",
        alt: "Max Person Icon",
        text: `${booking?.listing?.max_person} people`,
      },
      {
        icon: "/icons/wifi-dark.svg",
        alt: "WiFi Speed Icon",
        text: `${booking?.listing?.wifi_speed} gbps`,
      },
    ],
    [booking]
  );

  return (
    <main aria-label="Booking Success Page">
      <section
        id="title-section"
        className="bg-gray-light pt-[190px] pb-[148px] px-4 md:px-10 text-center"
        aria-label="Booking Success Message"
      >
        <div className="container mx-auto flex justify-center">
          <h1 className="max-w-[360px] font-bold text-[32px] leading-[48px] text-secondary">
            Booking Successfully 🎉 Congratulations!
          </h1>
        </div>
      </section>

      <section
        id="card-section"
        className="container mx-auto -mt-[98px] max-w-[650px] mb-[150px] space-y-5 rounded-[30px] bg-white border border-border shadow-indicator p-[30px] px-4 md:px-10"
        aria-label="Booking Details"
      >
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {booking?.listing?.attachments && (
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${booking?.listing?.attachments[0]}`}
              alt={`Property Image - ${booking?.listing?.title}`}
              height={0}
              width={0}
              className="w-[180px] h-[130px] rounded-[28px] object-cover"
              unoptimized
            />
          )}
          <div className="space-y-2.5 text-center sm:text-left">
            <h1 className="font-bold text-[22px] leading-[33px] text-secondary">
              {booking?.listing?.title}
            </h1>
            <Badge variant="secondary">{booking?.status}</Badge>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4">
          {propertyDetails.map(
            (item, index) =>
              item.text && (
                <div
                  key={index}
                  className="flex items-center font-semibold leading-6"
                >
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    height={0}
                    width={0}
                    className="w-5 h-5 mr-1"
                  />
                  {item.text}
                </div>
              )
          )}
        </div>

        <Separator className="bg-border" />

        <Title
          section="booking"
          title="What’s next?"
          subtitle="The owner will accept your booking once they receive your payment today. Please be patient."
        />

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Button
            variant="default"
            size="header"
            className="flex items-center w-full max-w-[209px]"
          >
            <Image
              src="/icons/message-notif.svg"
              alt="Message Notification Icon"
              height={0}
              width={0}
              className="h-5 w-5 mr-2.5"
            />
            Message Owner
          </Button>
          <Link href="/" passHref>
            <Button
              variant="third"
              size="header"
              className="w-full max-w-[180.5px]"
            >
              Explore Again
            </Button>
          </Link>
          <Link href="/dashboard/overview" passHref>
            <Button
              variant="third"
              size="header"
              className="w-full max-w-[180.5px]"
            >
              My Dashboard
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default BookingSuccess;
