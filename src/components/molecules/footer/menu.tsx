import Link from 'next/link'

interface FooterProps {
  title: string
  url: string
}

function Menu({
  title,
  data,
} : {
  title: string
  data: FooterProps[]
}) {
  return (
    <div className="text-white space-y-3 md:space-y-4">
      <span className="font-semibold leading-6 text-sm md:text-base">
        {title}
      </span>
      <ul className="space-y-3">
        {data.map((item: FooterProps, index: number) => (
          <li
            key={index}
             className="leading-6 hover:text-primary hover:font-bold text-sm md:text-base"
          >
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu
