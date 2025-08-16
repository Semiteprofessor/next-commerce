"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";

// Lazy load components (like MUI’s Suspense use case)
// const MegaMenu = dynamic(
//   () => import("src/components/mega-menu/MegaMenuDesktopVertical"),
//   {
//     suspense: true,
//   }
// );
// const SingleSlideCarousel = dynamic(
//   () => import("src/components/carousels/singleSlide"),
//   {
//     ssr: false,
//   }
// );

import { data } from "./data";

type HeroProps = {
  className?: string;
};

export default function Hero({ className }: HeroProps) {
  return (
    <div className={`flex flex-row gap-4 mt-4 ${className ?? ""}`}>
      <Card className="w-1/4 shadow-lg rounded-2xl">
        <CardContent className="p-0">
          <Suspense
            fallback={
              <div className="p-4 text-sm text-muted-foreground">
                Loading menu...
              </div>
            }
          >
            {/* <MegaMenu /> */}
            Hellooooooooooooooooooooooooooo
          </Suspense>
        </CardContent>
      </Card>

      <Card className="flex-1 shadow-lg rounded-2xl">
        <CardContent className="p-0">
          {/* <SingleSlideCarousel data={data} /> */}
        </CardContent>
      </Card>
    </div>
  );
}
