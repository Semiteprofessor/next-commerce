"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSelector } from "react-redux";
// import type { RootState } from "@/store"; // <-- adjust path to your Redux store

// icons
import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import { Skeleton } from "@/components/ui/skeleton";
// import { Separator } from "@/components/ui/separator";

// Lazy load UserSelect with skeleton fallback
// const UserSelect = dynamic(() => import("src/components/select/userSelect"), {
//   ssr: false,
//   loading: () => (
//     <div className="flex items-center gap-2">
//       <Skeleton className="h-[19px] w-[30px] rounded-md" />
//       {/* <Separator orientation="vertical" className="h-5" /> */}
//       <Skeleton className="h-[19px] w-[48px] rounded-md" />
//     </div>
//   ),
// });

export default function UserTopbar() {
  //   const { user, isAuthenticated } = useSelector(
  //     (state: RootState) => state.user
  //   );

  return (
    <div className="hidden md:flex w-full bg-background border-b z-50 bg-red-300">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 text-sm">
        {/* Left side - contact info */}
        <div className="flex items-center gap-2">
          <Link
            href="tel:+13866883295"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <MdOutlinePhone /> +1 386-688-3295
          </Link>
          {/* <Separator orientation="vertical" className="h-4" /> */}
          <Link
            href="mailto:johndoe@yahoo.com"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <MdOutlineMail /> johndoe@yahoo.com
          </Link>
        </div>

        {/* Right side - user actions */}
        <div className="flex items-center gap-2">
          {/* <UserSelect />
          {(isAuthenticated && user?.role === "user") || !isAuthenticated ? (
            <>
              <Separator orientation="vertical" className="h-4" />
              <Link
                href={
                  isAuthenticated
                    ? "/create-shop"
                    : "/auth/register?redirect=/create-shop"
                }
                className="text-muted-foreground hover:text-foreground"
              >
                Become a seller
              </Link>
            </>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}
