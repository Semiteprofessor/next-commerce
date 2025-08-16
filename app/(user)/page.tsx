
import dynamic from "next/dynamic";

// components
import Hero from "../../components/_main/home/hero";
// import WhyUs from "src/components/_main/home/whyUs";
// import TopBanners from "src/components/_main/home/topBanners";

// // dynamic imports
// const Categories = dynamic(
//   () => import("src/components/_main/home/categories")
// );
// const BestSellingProducs = dynamic(
//   () => import("src/components/_main/home/bestSelling")
// );
// const Banner = dynamic(() => import("src/components/_main/home/banner"));
// const Brands = dynamic(() => import("src/components/_main/home/brands"));
// const TopCollection = dynamic(() => import("src/components/_main/home/top"));
// const Shops = dynamic(() => import("src/components/_main/home/shop"));
// const Compaigns = dynamic(() => import("src/components/_main/home/compaign"));
// const Testimonials = dynamic(
//   () => import("src/components/_main/home/testimonials")
// );
// const FeaturedProducts = dynamic(
//   () => import("src/components/_main/home/featured")
// );
// const SubscriptionModal = dynamic(
//   () => import("src/components/_main/home/subscription"),
//   {
//     ssr: false,
//   }
// );

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <Hero />
      </div>

    
    </>
  );
}
