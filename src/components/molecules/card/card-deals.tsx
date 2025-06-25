import { DealsProps } from "@/interfaces/landing-page";
import { moneyFormat } from "@/lib/utils";
import Image from "next/image";

function CardDeals({
  image,
  title,
  description,
  duration_minutes,
  doctor,
  price,
}: DealsProps) {
  return (
    <div>
      <figure className="relative">
        {image ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${image}`}
            alt={title}
            height={0}
            width={0}
            className="min-w-[220px] h-[310px] xl:w-[260px] xl:h-[350px] rounded-3xl object-cover bg-gray-300"
            unoptimized
          />
        ) : (
          <div className="min-w-[220px] h-[310px] xl:w-[260px] xl:h-[350px] rounded-3xl object-cover bg-gray-300" />
        )}

        <div className="absolute flex flex-col p-5 top-0 rounded-3xl w-[220px] h-[310px] xl:w-[260px] xl:h-[350px] text-white bg-gradient-to-t from-gradient-black to-transparent to-[45%]">
          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <div>
                <span className="block font-bold text-xl leading-[30px]">
                  {title}
                </span>
                <span className="block text-sm leading-[21px]">
                  <span className="font-semibold">
                    {moneyFormat.format(Number(price))}
                  </span>
                </span>
              </div>
              <div className="flex items-center text-sm leading-[21px]">
                <Image
                  src="/icons/star.svg"
                  alt="star-icon"
                  height={0}
                  width={0}
                  className="w-5 h-5 mr-[0.5px] -mt-1"
                />
                4/5
              </div>
            </div>

            <div className="mt-2 text-sm leading-[21px] line-clamp-2">
              {description}
            </div>

            <div className="flex flex-col gap-1 mt-[14px] text-sm leading-[21px]">
              <div className="flex items-center">
                <Image
                  src="/icons/clock.svg"
                  alt="duration"
                  height={0}
                  width={0}
                  className="w-5 h-5 mr-2"
                />
                {duration_minutes} mins
              </div>
              <div className="flex items-center">
                <Image
                  src="/icons/profile-2user.svg"
                  alt="doctor"
                  height={0}
                  width={0}
                  className="w-5 h-5 mr-2"
                />
                {doctor}
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default CardDeals;
