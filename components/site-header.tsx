"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Wifi } from 'lucide-react'

const nav = [
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#packages", label: "Packages" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Vivanet Home">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm">
            <Wifi className="h-5 w-5" />
          </div>
          <span className="text-base font-semibold tracking-tight">Vivanet Communications Kenya</span>
        </Link>

        <nav className="hidden flex-grow items-center justify-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden md:flex">
          <Button asChild>
            <Link href="#packages">View Packages</Link>
          </Button>
        </div>

        <div className="ml-auto md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                    <Wifi className="h-4 w-4" />
                  </div>
                  Vivanet
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-3">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-base text-foreground transition-colors hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <Link href="#packages" onClick={() => setOpen(false)}>
                    View Packages
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}