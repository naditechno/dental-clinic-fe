import Title from "@/components/atomics/title";
import Image from "next/image";

function CardIndicator({
  icon,
  title,
  subtitle,
  variant,
  section,
}: {
  icon: string;
  title: string;
  subtitle: string;
  variant: "indicator" | "";
  section: "hero" | "header" | "categories" | "";
}) {
  return (
    <figure
      className={`flex items-center space-x-5  ${
        variant !== "indicator" &&
        "bg-white px-3 py-2 sm:px-5 sm:py-4 rounded-[20px] border-[3px] border-white hover:border-primary cursor-pointer"
      }`}
    >
      <div
        className={
          variant === "indicator"
            ? "rounded-full p-3 sm:p-[19px] bg-primary"
            : ""
        }
      >
        <Image
          src={icon}
          alt="icon"
          height={24}
          width={24}
          className="h-6 w-6 sm:h-8 sm:w-8"
        />
      </div>
      <div>
        <Title title={title} subtitle={subtitle} section={section} />
      </div>
    </figure>
  );
}

CardIndicator.defaultProps = {
  variant: "",
  section: "",
};
export default CardIndicator;
