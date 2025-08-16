"use client"

import React from "react"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { useRouter } from "next-nprogress-bar"
import { FaAngleRight } from "react-icons/fa6"
import { useQuery } from "react-query"
import { useDispatch } from "react-redux"
import { setShops } from "src/redux/slices/shops"
import * as api from "src/services"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

// types
type Shop = {
  slug: string
  title: string
  logo?: {
    url: string | StaticImageData
    blurDataURL?: string
  }
}

function ParentItem({
  shop,
  isLast,
  isLoading,
}: {
  shop?: Shop
  isLast?: boolean
  isLoading?: boolean
}) {
  return (
    <Link
      href={`/shops/${shop?.slug}`}
      className={`flex items-center justify-between px-4 py-3 text-sm font-medium capitalize transition-colors border-b 
        ${isLast ? "border-transparent" : "border-border"}
        hover:bg-primary/10 hover:text-primary`}
    >
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border">
          {isLoading ? (
            <Skeleton className="w-10 h-10 rounded-full" />
          ) : (
            <Image
              src={shop?.logo?.url || "/placeholder.png"}
              alt={shop?.title || "shop logo"}
              fill
              className="object-cover"
              placeholder={shop?.logo?.blurDataURL ? "blur" : "empty"}
              blurDataURL={shop?.logo?.blurDataURL}
              sizes="30vw"
            />
          )}
        </div>
        {isLoading ? (
          <Skeleton className="h-4 w-28" />
        ) : (
          <span className="text-base font-medium text-foreground">
            {shop?.title}
          </span>
        )}
      </div>
    </Link>
  )
}

function MegaMenuItem({
  shop,
  isLast,
  isLoading,
}: {
  shop?: Shop
  isLast?: boolean
  isLoading?: boolean
}) {
  return <ParentItem shop={shop} isLast={isLast} isLoading={isLoading} />
}

export default function MegaMenuDesktopVertical() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { data, isLoading } = useQuery(["get-home-shops-all"], () =>
    api.getHomeShops()
  )

  React.useEffect(() => {
    if (!isLoading && data?.data) {
      dispatch(setShops(data?.data))
    }
  }, [data, isLoading, dispatch])

  return (
    <Card className="min-w-[280px] h-[343px] flex flex-col justify-between rounded-xl overflow-hidden border border-border hidden md:flex">
      <div className="overflow-y-auto">
        {(isLoading ? Array.from({ length: 5 }) : data?.data?.slice(0, 5))?.map(
          (shop: Shop, i: number) => (
            <MegaMenuItem
              key={shop?.slug || i}
              isLoading={isLoading}
              shop={shop}
              isLast={i === 4}
            />
          )
        )}
      </div>
      <Button
        variant="outline"
        className="w-full rounded-none py-4 border-0 bg-primary/20 text-primary hover:bg-primary/30"
        onClick={() => router.push("/shops")}
      >
        View All <FaAngleRight size={14} className="ml-2" />
      </Button>
    </Card>
  )
}
