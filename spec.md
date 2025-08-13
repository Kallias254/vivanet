
# Vivanet Website Updates Specification

This document outlines the requested changes to the Vivanet website.

## 1. New Components

### 1.1. Customer Counter Component

A new client component will be created at `components/ui/customer-counter.tsx` to display an animated number that counts up to a target value.

**File:** `components/ui/customer-counter.tsx`

```tsx
"use client"

import { useEffect, useState } from "react"

export function CustomerCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const step = Math.ceil(target / (duration / 16)) // 60 fps

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount + step >= target) {
          clearInterval(interval)
          return target
        }
        return prevCount + step
      })
    }, 16)

    return () => clearInterval(interval)
  }, [target])

  return (
    <div className="text-6xl font-bold text-emerald-600">
      {count.toLocaleString()}+
    </div>
  )
}
```

## 2. Page Modifications

The `app/page.tsx` file will be modified to include the new "Customer Counter" and "Services" sections.

### 2.1. Add Services Section

A new "Services" section will be added after the "Features" section.

**File:** `app/page.tsx`

**New Code (to be inserted after the "Features" section):**

```tsx
        {/* Services */}
        <section id="services" className="scroll-mt-24 bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
              <p className="mt-3 text-muted-foreground">
                We offer a wide range of services to meet your needs.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                    <Zap className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2 text-lg">Social Media Browsing</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Enjoy seamless browsing on your favorite social media platforms.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                    <Zap className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2 text-lg">Gaming</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Experience low-latency gaming with our high-speed internet.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                    <Zap className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2 text-lg">Streaming</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Stream your favorite movies and shows in high definition.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                    <Zap className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2 text-lg">Work from Home</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Stay productive with a reliable connection for your home office.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2 text-lg">24/7 Support</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Our team is always here to help you with any issues.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
```

### 2.2. Add Customer Counter to Testimonials Section

The new `CustomerCounter` component will be added to the "Testimonials" section.

**File:** `app/page.tsx`

**Modified "Testimonials" section:**

```tsx
        {/* Testimonials */}
        <section id="testimonials" className="scroll-mt-24 border-y bg-muted/30">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Loved by Homes & Businesses in Mombasa
              </h2>
              <p className="mt-3 text-muted-foreground">
                Join thousands of happy customers enjoying reliable, fast internet.
              </p>
              <div className="mt-8">
                <CustomerCounter target={7000} />
                <p className="text-lg font-medium text-muted-foreground">Happy Customers</p>
              </div>
            </div>
            <Carousel opts={{ loop: true }} className="mt-10 w-full">
              <CarouselContent className="-ml-4">
                {[
                  {
                    quote:
                      "Streaming and work calls are crystal clear—finally an ISP I can rely on.",
                    name: "Amina K.",
                    role: "Home User, Nyali",
                  },
                  {
                    quote:
                      "Our café Wi‑Fi is now a customer favorite. Setup was quick and professional.",
                    name: "Brian M.",
                    role: "Business Owner, Kizingo",
                  },
                  {
                    quote:
                      "Excellent support. They solved my issue at 2am within minutes.",
                    name: "Lina O.",
                    role: "Freelancer, Bamburi",
                  },
                ].map((t, i) => (
                  <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="flex h-full flex-col">
                      <CardHeader>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star key={idx} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <CardTitle className="sr-only">5 star review</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        “{t.quote}”
                      </CardContent>
                      <CardFooter className="mt-auto flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
```

### 2.3. Import new component

The new `CustomerCounter` component will be imported in `app/page.tsx`.

```tsx
import { CustomerCounter } from "@/components/ui/customer-counter";
```
