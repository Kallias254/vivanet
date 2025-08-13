import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaqSection } from "@/components/ui/faq-section"
import { CustomerCounter } from "@/components/ui/customer-counter";
import { Check, Zap, ShieldCheck, Headphones, DollarSign, Star, Cable, Calendar, Smile, MapPin, Users, Gamepad2, Play } from 'lucide-react'

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section
          id="hero"
          className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white"
        >
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
          </div>
          <div className="container relative mx-auto grid gap-10 px-4 pb-16 pt-16 md:grid-cols-2 md:gap-12 md:pb-24 md:pt-20 lg:gap-16 lg:pt-24">
            <div className="flex flex-col justify-center">
              <Badge
                variant="secondary"
                className="w-max bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
              >
                Vivanet Communications
              </Badge>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Fast & Reliable Internet for Mombasa
              </h1>
              <p className="mt-4 max-w-prose text-muted-foreground sm:text-lg">
                Experience seamless streaming, gaming, and work-from-home with Vivanet&apos;s powerful, locally-supported
                network.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="shadow-sm">
                  <Link href="#packages">View Packages</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact">Learn More</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-emerald-600" />
                  <span>Speeds up to 100Mbps</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>99.9% uptime</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-muted/40 shadow-sm md:max-w-[560px]">
                <Image
                  src="/mombasa-fiber-homes.jpg"
                  alt="High-speed internet powering homes and businesses"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 right-0 hidden rounded-xl border bg-background p-4 shadow-sm md:flex">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
                    <Smile className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Local support</p>
                    <p className="text-xs text-muted-foreground">24/7 team in Mombasa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Features */}
        <section id="features" className="scroll-mt-24">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything You Need for a Better Connection</h2>
              <p className="mt-3 text-muted-foreground">
                Powerful speeds, reliable uptime, and local support—tailored for Mombasa.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                    <Zap className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2 text-lg">Blazing Fast Speeds</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Plans from 17Mbps up to 100Mbps—built for streaming, gaming, and work.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2 text-lg">99.9% Network Uptime</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Enterprise-grade reliability to keep you online when it matters.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2 text-lg">24/7 Local Support</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Talk to real people in Mombasa—any time, any day.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2 text-lg">Transparent Pricing</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Clear plans and costs—no hidden fees or surprises.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
              <p className="mt-3 text-muted-foreground">
                We offer a wide range of services to meet your needs.
              </p>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold">Social Media Browsing</h3>
                <p className="text-muted-foreground mt-2">
                  Enjoy seamless browsing on your favorite social media platforms.
                </p>
              </div>
              <div className="text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mx-auto mb-4">
                  <Gamepad2 className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold">Gaming</h3>
                <p className="text-muted-foreground mt-2">
                  Experience low-latency gaming with our high-speed internet.
                </p>
              </div>
              <div className="text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mx-auto mb-4">
                  <Play className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold">Streaming</h3>
                <p className="text-muted-foreground mt-2">
                  Stream your favorite movies and shows in high definition.
                </p>
              </div>
            </div>
          </div>
        </section>

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

        {/* Packages */}
        <section id="packages" className="scroll-mt-24">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Choose Your Perfect Plan</h2>
              <p className="mt-3 text-muted-foreground">
                Flexible packages for every home and business in Mombasa.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Home Lite",
                  speed: "17Mbps",
                  price: "KES 3,000/mo",
                  blurb: "Ideal for Browse & Email",
                  features: ["HD streaming", "1–3 devices", "Free installation"],
                  popular: false,
                },
                {
                  name: "Family Streamer",
                  speed: "30Mbps",
                  price: "KES 5,000/mo",
                  blurb: "Best for Streaming & Gaming",
                  features: ["4K streaming", "3–6 devices", "Free installation"],
                  popular: true,
                },
                {
                  name: "Power User",
                  speed: "50Mbps",
                  price: "KES 6,000/mo",
                  blurb: "For Heavy Users & Home Offices",
                  features: ["Ultra‑low latency", "6–10 devices", "Priority support"],
                  popular: false,
                },
                {
                  name: "Business Pro",
                  speed: "100Mbps",
                  price: "KES 10,000/mo",
                  blurb: "SMEs & High Traffic Locations",
                  features: ["Peak performance", "Unlimited devices", "Dedicated support"],
                  popular: false,
                },
              ].map((plan, i) => (
                <Card
                  key={i}
                  className={[
                    "relative flex h-full flex-col",
                    plan.popular ? "border-emerald-300 shadow-md" : "",
                  ].join(" ")}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-baseline justify-between gap-2">
                      <span>{plan.name}</span>
                      <span className="text-base font-normal text-muted-foreground">{plan.speed}</span>
                    </CardTitle>
                    <div className="mt-1 text-2xl font-bold">{plan.price}</div>
                    <p className="text-sm text-muted-foreground">{plan.blurb}</p>
                  </CardHeader>
                  <CardContent className="mt-2">
                    <ul className="grid gap-2 text-sm">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button className="w-full" asChild>
                      <Link href="#contact" aria-label={`Get started with ${plan.name}`}>Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section id="coverage" className="scroll-mt-24 border-y bg-muted/30">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Coverage Areas</h2>
              <p className="mt-3 text-muted-foreground">
                We&apos;re rapidly expanding our internet network across Mombasa. If we&apos;re not in your area yet, get in touch—we&apos;re adding new neighbourhoods regularly.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-4xl">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {["Nyali", "Bamburi", "Kizingo", "Mtwapa", "Likoni", "Old Town"].map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm shadow-sm"
                  >
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Outside these areas?{" "}
                <Link className="font-medium text-foreground underline underline-offset-4" href="#contact">
                  Contact us
                </Link>{" "}
                to register your interest.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection />

        {/* Contact Form */}
        <section id="contact" className="scroll-mt-24">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
              <p className="mt-3 text-muted-foreground">
                Have questions or ready to connect? Send us a message.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-lg">
              <form name="contact" onSubmit={async (event) => {
                event.preventDefault();
                const formData = new FormData(event.target as HTMLFormElement);
                await fetch("/__forms.html", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams(formData as any).toString(),
                });
                // You might want to add success/error handling here, e.g., show a message or redirect
                alert("Message sent successfully!"); // Simple alert for now
                (event.target as HTMLFormElement).reset(); // Clear the form
              }} className="grid gap-6">
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" type="text" placeholder="Your Name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+254 7XX XXX XXX" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
                </div>
                <Button type="submit" size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}