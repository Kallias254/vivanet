import Link from "next/link"
import { Wifi, Mail, Phone, MapPin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <Wifi className="h-5 w-5" />
            </div>
            <span className="text-base font-semibold tracking-tight">Vivanet</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Fast, reliable internet for homes and businesses across Mombasa. Locally supported. Built for speed.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="#features">
                Features
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="#how-it-works">
                How It Works
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="#testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="#packages">
                Packages
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="#coverage">
                Coverage
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Legal</h3>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="/terms">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="text-muted-foreground hover:text-foreground" href="/privacy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Contact Us</h3>
          <ul className="grid gap-3 text-sm">
            <li className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 text-foreground" />
              <a href="tel:+254700123456" className="hover:text-foreground">
                Sales: +254 700 123 456
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 text-foreground" />
              <a href="tel:+254700654321" className="hover:text-foreground">
                Support: +254 700 654 321
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 text-foreground" />
              <a href="mailto:support@vivanet.co.ke" className="hover:text-foreground">
                support@vivanet.co.ke
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-foreground" />
              <span>Mombasa, Kenya</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vivanet Communications Ltd. All Rights Reserved.
          </p>
          <Link
            href="#packages"
            className="text-xs font-medium text-foreground underline-offset-4 hover:underline"
            aria-label="View our packages"
          >
            View Our Packages
          </Link>
        </div>
      </div>
    </footer>
  )
}
