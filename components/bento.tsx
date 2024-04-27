import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import image1 from "@/public/Image1.jpg";
import image2 from "@/public/Image2.jpg";
import image3 from "@/public/Image3.png";
import image4 from "@/public/Image4.webp";
import image5 from "@/public/Image5.png";
import image6 from "@/public/Image6.png";
import { IconBrandYoutube } from "@tabler/icons-react";
import { Globe, PieChart, Search } from "lucide-react";
import Image from "next/image";

export function BentoGridTools() {
  return (
    <div className="flex w-full justify-center">
      <div className="w-11/12 md:w-9/12">
        <div className="flex flex-col gap-10">
          <h2 className="text-left text-3xl font-bold uppercase md:text-6xl lg:text-7xl xl:text-8xl">
            Les outils que j'utilise
          </h2>
          <BentoGrid className="w-full ">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}

const Analytics = () => (
  <div className="flex h-full min-h-24 w-full justify-around overflow-hidden rounded-xl bg-gradient-to-r from-blueCustom-100 to-greenCustom-100">
    <div className="h-full w-96 rotate-[-7deg] overflow-hidden rounded-[25px]  border-[1px] border-black bg-white transition-transform duration-300 hover:rotate-[-10deg]">
      <Image
        src={image1}
        alt="Alexis"
        className="h-full w-full object-cover"
        width={900}
        height={900}
        quality={50}
        priority={true}
      />
    </div>
    <div className="hidden h-full w-96 rotate-[3deg] overflow-hidden rounded-[25px] border-[1px] border-black bg-white transition-transform duration-300  hover:rotate-[7deg] lg:flex">
      <Image
        src={image2}
        alt="Alexis"
        className="h-full w-full object-cover"
        width={900}
        height={900}
        quality={50}
        priority={true}
      />
    </div>
  </div>
);

const GoogleAds = () => (
  <div className="flex h-full min-h-24 w-full justify-around overflow-hidden rounded-xl bg-gradient-to-l from-blueCustom-100 to-greenCustom-100">
    <div className="h-full w-96 overflow-hidden ">
      <Image
        src={image3}
        alt="Alexis"
        className="h-full max-h-40 w-full rotate-[3deg] object-contain transition-transform duration-300 hover:rotate-[7deg] hover:scale-105"
        width={900}
        height={900}
        quality={50}
        priority={true}
      />
    </div>
  </div>
);

const YoutubeAds = () => (
  <div className="flex h-full min-h-24 w-full items-center justify-around overflow-hidden rounded-xl bg-gradient-to-r from-blueCustom-100 to-greenCustom-100">
    <div className="h-5/6 w-max rotate-[-7deg] overflow-hidden rounded-[25px] transition-transform duration-300 hover:rotate-[-10deg] hover:scale-105">
      <Image
        src={image4}
        alt="Alexis"
        className="h-full max-h-40 w-full object-contain "
        width={900}
        height={900}
        quality={50}
        priority={true}
      />
    </div>
  </div>
);

const GTM = () => (
  <div className="flex h-full min-h-24 w-full justify-around overflow-hidden rounded-xl bg-gradient-to-l from-blueCustom-100 to-greenCustom-100">
    <div className="hidden h-full w-96 rotate-[4deg] overflow-hidden rounded-[25px] border-[1px]  border-black bg-white transition-transform duration-300 hover:rotate-[6deg] lg:flex">
      <Image
        src={image5}
        alt="Alexis"
        className="h-full w-full object-cover"
        width={900}
        height={900}
        quality={50}
        priority={true}
      />
    </div>
    <div className=" h-full w-96 rotate-[7deg] overflow-hidden rounded-[25px] border-[1px] border-black bg-white transition-transform duration-300  hover:rotate-[9deg] ">
      <Image
        src={image6}
        alt="Alexis"
        className="h-full w-full object-cover"
        width={900}
        height={900}
        quality={50}
        priority={true}
      />
    </div>
  </div>
);

const items = [
  {
    title: "GA4 & Semrush",
    description: "J'analyse votre traffic et vos keywords.",
    header: <Analytics />,
    className: "md:col-span-2 border-2 border-b-4 border-black bg-white",
    icon: <Search className="h-4 w-4" />,
  },
  {
    title: "Google Ads & Shopping",
    description: "Je mets en place vos campagnes textuelles.",
    header: <GoogleAds />,
    className: "md:col-span-1 border-2 border-b-4 border-black bg-white",
    icon: <Globe className="h-4 w-4 " />,
  },
  {
    title: "Youtube Ads & Display",
    description: "Je mets en place vos campagnes photos et vidéos.",
    header: <YoutubeAds />,
    className: "md:col-span-1 border-2 border-b-4 border-black bg-white",
    icon: <IconBrandYoutube className="h-4 w-4 " />,
  },
  {
    title: "Google Tag Manager & Looker Studio",
    description:
      "Je mets en place un suivi des performances et un dashboard interactif.",
    header: <GTM />,
    className: "md:col-span-2 border-2 border-b-4 border-black bg-white",
    icon: <PieChart className="h-4 w-4" />,
  },
];
