
const getTitleStyle = (section: string) => {
  switch (section) {
    case "hero":
      return "md:w-3/4 text-white md:text-secondary text-[32px] leading-[48px] sm:text-[40px] sm:leading-[60px] lg:text-[55px] lg:leading-[82.5px]";
    case "header":
      return "text-sm sm:text-base font-semibold leading-6";
    case "categories":
      return "text-lg sm:text-xl font-semibold leading-6";
    case "facility":
      return "text-lg sm:text-xl font-semibold leading-[30px]";
    case "detail":
      return "font-bold text-base sm:text-lg leading-[27px] text-secondary";
    case "booking":
      return "font-bold text-base sm:text-lg leading-[27px] text-secondary";
    case "empty":
      return "font-bold text-base sm:text-lg leading-[27px] text-secondary text-center";
    default:
      return "text-xl sm:text-2xl leading-9";
  }
};

const getSubtitleStyle = (section: string) => {
  switch (section) {
    case "hero":
      return "hidden lg:inline-block text-base sm:text-lg leading-7 sm:leading-8 text-secondary";
    case "header":
      return "text-xs sm:text-sm leading-[18px] sm:leading-[21px] text-subtitle";
    case "categories":
      return "text-sm sm:text-base leading-6 text-subtitle";
    case "facility":
      return "text-sm sm:text-base leading-6 text-subtitle";
    case "detail":
      return "text-sm sm:text-base leading-[24px] sm:leading-[30px] text-secondary pt-2.5";
    case "booking":
      return "text-sm sm:text-base leading-[24px] sm:leading-[30px] text-subtitle pt-2.5";
    case "empty":
      return "text-sm sm:text-base leading-[24px] sm:leading-[30px] text-subtitle pt-2.5 text-center";
    default:
      return "text-sm sm:text-base leading-6 text-subtitle";
  }
};

function Title({
  title = '',
  subtitle,
  section = '',
  reverse = false
}: {
  title: string
  subtitle?: string | undefined
  section?: 'hero' | 'header' | 'categories' | 'detail' | 'facility' | 'booking' | 'admin' | 'overview' | 'empty' | ''
  reverse?: boolean
}) {
  return (
    <div data-reverse={reverse} className='flex data-[reverse=false]:flex-col data-[reverse=true]:flex-col-reverse data-[reverse=true]:text-right'>
      <h1 className={`font-bold text-secondary ${getTitleStyle(section)}`}>
        { title }  
      </h1>
      <h2 className={getSubtitleStyle(section)}>
        { subtitle }  
      </h2>   
    </div>
  )
}
export default Title
