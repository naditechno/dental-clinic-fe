import CardIndicator from "@/components/molecules/card/card-indicator";
import { Button } from "@/components/atomics/button";
import { Input } from "@/components/atomics/input";
import { Separator } from "@/components/atomics/separator";
import Title from "@/components/atomics/title";
import categories from "@/json/categories.json";
import { CategoriesProps } from "@/interfaces/landing-page";
import Image from "next/image";
import CardBenefit from "@/components/molecules/card/card-benefit";
import CardPurpose from "@/components/molecules/card/card-purpose";
import CardReview from "@/components/molecules/card/card-review";
import ListingShowcase from "@/components/molecules/listing/listing-showcase";
import BookAppointmentButton from "@/components/atomics/BookAppointmentButton";

function Home() {
  return (
    <main>
      <section
        id="hero-section"
        className="h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/images/bg-img2.jpg')]"
      >
        <div className="relative z-10 flex items-center h-full container mx-auto px-4">
          <div className="max-w-full lg:max-w-[555px] mt-20">
            <Title
              title="Find Glorious Smiles and Confident Living"
              subtitle="Comfortable dental care at a great price, always here when you need a confident smile."
              section="hero"
            />
            <div className="pt-[20px] lg:pt-[30px] flex items-center">
              <div className="grow">
                <Input placeholder="Search by doctor name..." variant="hero" />
              </div>
              <Button variant="default" size="hero">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="indicator-section"
        className="px-10 xl:container xl:mx-auto -mt-16 pb-9"
      >
        <div className="min-h-[128px] flex flex-wrap md:flex-nowrap justify-start md:justify-center xl:justify-between items-center space-y-2 md:space-x-5 bg-white shadow-indicator rounded-[20px] px-9 py-5 xl:px-[50px] xl:py-[29px]">
          <CardIndicator
            icon="/icons/tooth.svg"
            title="5,200+"
            subtitle="Patients Served"
            variant="indicator"
          />
          <Separator orientation="vertical" />
          <CardIndicator
            icon="/icons/smile.svg"
            title="98%"
            subtitle="Patient Satisfaction Rate"
            variant="indicator"
          />
          <Separator orientation="vertical" />
          <CardIndicator
            icon="/icons/security.svg"
            title="100%"
            subtitle="Sterilization & Safety Protocols"
            variant="indicator"
          />
          <Separator orientation="vertical" />
          <CardIndicator
            icon="/icons/team.svg"
            title="15+"
            subtitle="Professional Doctors & Staff"
            variant="indicator"
          />
        </div>
      </section>

      <ListingShowcase
        id="deals-section"
        title="Our Dental Services"
        subtitle="Explore the treatments we offer for a healthier and more confident smile."
      />

      <section
        id="categories-section"
        className="bg-gray-light container xl:mx-auto px-5 py-[50px]"
      >
        <div className="flex flex-col text-center lg:text-left sm:flex-row items-center justify-between gap-4">
          <Title
            title="Our Services"
            subtitle="Comprehensive dental care for your family"
          />
          <Button variant="default" size="button" className="shadow-button">
            Explore All
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[20px] sm:gap-[30px] mt-[30px]">
          {categories.data.map((item: CategoriesProps, index: number) => (
            <CardIndicator
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              section="categories"
            />
          ))}
        </div>
      </section>

      <section
        id="benefits-section"
        className="px-6 md:px-10 xl:container xl:mx-auto mt-[100px]"
      >
        <div className="flex justify-center lg:justify-between flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-4">
          <div className="max-w-[320px] xl:max-w-[383px]">
            <h1 className="font-bold text-[24px] md:text-[28px] leading-[36px] md:leading-[42px] max-w-[350px]">
              Dental Care That Brings Out Your Best Smile
            </h1>
            <ul className="mt-[20px] md:mt-[30px] space-y-4 md:space-y-5 text-left">
              <CardBenefit benefit="Personalized treatment for every patient" />
              <CardBenefit benefit="24/7 emergency dental support" />
              <CardBenefit benefit="Advanced dental equipment & technology" />
              <CardBenefit benefit="Certified and experienced dentists" />
              <CardBenefit benefit="Comfortable, clean, and modern clinic" />
            </ul>
            <div className="mt-[20px] md:mt-[30px] flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 xl:space-x-[14px]">
              <BookAppointmentButton />
              <Button variant="third" size="header">
                All Services
              </Button>
            </div>
          </div>

          <div className="max-w-[650px] grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 xl:gap-[30px]">
            <CardPurpose
              image="/images/dental-benefit-1.jpg"
              title="Teeth Whitening"
              purpose="Safe & Quick"
            />
            <CardPurpose
              image="/images/dental-benefit-2.jpg"
              title="Orthodontics (Braces)"
              purpose="For All Ages"
            />
            <CardPurpose
              image="/images/dental-benefit-3.jpg"
              title="Dental Implants"
              purpose="Natural-Looking Results"
            />
            <CardPurpose
              image="/images/dental-benefit-4.jpg"
              title="Routine Check-ups"
              purpose="Preventive Care"
            />
          </div>
        </div>
      </section>

      <section
        id="review-section"
        className="container mx-auto px-5 my-[100px]"
      >
        <div className="flex justify-center text-center">
          <Title
            title="Happy Customers"
            subtitle={`We’d love to come back again soon`}
            section=""
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px] mt-[30px]">
          <div className="space-y-[30px]">
            <CardReview
              rating={5}
              review="The dental team was incredibly friendly and made me feel comfortable throughout the treatment."
              avatar="/images/avatar-review.svg"
              username="Ayu Hartono"
              jobdesk="Patient"
            />
            <CardReview
              rating={4}
              review="Teeth whitening was fast and the results were visible immediately. Thank you for the excellent service!"
              avatar="/images/avatar-review.svg"
              username="Bima Prasetyo"
              jobdesk="Patient"
            />
            <CardReview
              rating={5}
              review="Getting braces here was the best decision! My teeth are finally aligned and I love my smile."
              avatar="/images/avatar-review.svg"
              username="Clara Wijaya"
              jobdesk="Patient"
            />
          </div>

          <div className="space-y-[30px]">
            <CardReview
              rating={5}
              review="Easy online appointment system and the dentist explained the procedure very clearly."
              avatar="/images/avatar-review.svg"
              username="Dani Setiawan"
              jobdesk="Patient"
            />
            <CardReview
              rating={5}
              review="My kids were scared of the dentist, but now they enjoy visiting thanks to the friendly pediatric team."
              avatar="/images/avatar-review.svg"
              username="Eka Lestari"
              jobdesk="Parent"
            />
            <CardReview
              rating={4}
              review="The implant looks natural and feels just like a real tooth. Professional and clean environment!"
              avatar="/images/avatar-review.svg"
              username="Farhan Nugraha"
              jobdesk="Patient"
            />
          </div>

          <div className="space-y-[30px]">
            <CardReview
              rating={5}
              review="Impressed with the clinic’s cleanliness and modern equipment. Highly recommended."
              avatar="/images/avatar-review.svg"
              username="Gita Salim"
              jobdesk="Patient"
            />
            <CardReview
              rating={4}
              review="Receptionist was helpful, and the environment felt calm and reassuring. Great experience!"
              avatar="/images/avatar-review.svg"
              username="Hari Wibowo"
              jobdesk="Patient"
            />
            <CardReview
              rating={5}
              review="I got veneers here and my smile looks fantastic now. Thank you, doctor!"
              avatar="/images/avatar-review.svg"
              username="Indah Putri"
              jobdesk="Patient"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
