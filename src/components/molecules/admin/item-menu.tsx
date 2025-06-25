import Image from "next/image";
import Link from "next/link";

interface ItemMenuProps {
  image: string;
  title: string;
  url: string;
  expanded?: boolean;
}

function ItemMenu({ image, title, url, expanded }: ItemMenuProps) {
  return (
    <Link href={url}>
      <li className="flex items-center space-x-2">
        <Image src={image} alt={title} height={24} width={24} />
        <span
          className={`font-semibold leading-6 capitalize ${
            expanded ? "block" : "hidden"
          }`}
        >
          {title}
        </span>
      </li>
    </Link>
  );
}

export default ItemMenu;
