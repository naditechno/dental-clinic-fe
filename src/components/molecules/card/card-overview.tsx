import Title from '@/components/atomics/title'
import Image from 'next/image'

function CardOverview({
  image,
  title,
  subtitle,
} : {
  image: string
  title: string
  subtitle: string
}) {
  return (
    <figure className="bg-white border-2 border-white hover:border-primary p-4 sm:p-5 space-y-3 sm:space-y-4 rounded-[20px] flex flex-col items-center text-center lg:items-start lg:text-start">
      <Image
        src={image}
        alt={title}
        height={40}
        width={40}
        className="w-10 h-10 sm:w-12 sm:h-12" 
      />
      <Title section="overview" title={title} subtitle={subtitle} />
    </figure>
  );
}

export default CardOverview
