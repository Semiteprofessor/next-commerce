import React, { ReactNode } from "react";

// components
// import Navbar from "../../layout/_main/navbar";
// import Footer from "../../layout/_main/footer";
import Topbar from "../../layout/_main/topbar";
// import ActionBar from "../../layout/_main/actionbar";

// Meta information
export const metadata = {
  title:
    "Nextall E-commerce Script | Your Gateway to Seamless Shopping and Secure Transactions",
  description:
    "Log in to Nextall for secure access to your account. Enjoy seamless shopping, personalized experiences, and hassle-free transactions. Your trusted portal to a world of convenience awaits. Login now!",
  applicationName: "Nextall",
  authors: [{ name: "Nextall" }],
  keywords: [
    "ecommerce",
    "Nextall",
    "Commerce",
    "Login Nextall",
    "LoginFrom Nextall",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    images: "https://nextall.vercel.app/opengraph-image.png?1c6a1fa20db2840f",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Topbar />
      {/* <Navbar /> */}
      {/* <ActionBar /> */}
      <main>{children}</main>
      {/* Replaced MUI Toolbar with Tailwind spacer */}
      <div className="block md:hidden h-12" />
      {/* <Footer /> */}
    </>
  );
}
