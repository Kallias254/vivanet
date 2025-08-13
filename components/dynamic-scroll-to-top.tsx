"use client"

import dynamic from "next/dynamic"

export const DynamicScrollToTopButton = dynamic(
  () =>
    import("@/components/ui/scroll-to-top-button").then(
      (mod) => mod.ScrollToTopButton
    ),
  { ssr: false }
)
