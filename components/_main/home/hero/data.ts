import type { StaticImageData } from "next/image";

import slide1 from "@/public/images/hero-banner.png";
import slide2 from "@/public/images/hero-banner-2.png";

export type Slide = {
  cover: StaticImageData;
  heading: string;
  description: string;
  color: string;
  btnPrimary: {
    btnText: string;
    url: string;
  };
  btnSecondary: {
    btnText: string;
    url: string;
  };
};

export const data: Slide[] = [
  {
    cover: slide1,
    heading: "Top Products Of The Year!",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    color: "#FBCA66",
    btnPrimary: {
      btnText: "Shop Now",
      url: "/products?top=-1",
    },
    btnSecondary: {
      btnText: "See All",
      url: "/products",
    },
  },
  {
    cover: slide2,
    heading: "Top Products Of The Year!",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    color: "#FBCA66",
    btnPrimary: {
      btnText: "Shop Now",
      url: "/products?top=-1",
    },
    btnSecondary: {
      btnText: "See All",
      url: "/products",
    },
  },
];
