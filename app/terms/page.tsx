
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Terms of Service</h1>
            <div className="prose mt-8">
              <p>Last updated: August 08, 2025</p>

              <h2>1. Introduction</h2>
              <p>Welcome to Vivanet Communications. These Terms of Service govern your use of our internet services. By using our services, you agree to these terms.</p>

              <h2>2. User Responsibilities</h2>
              <p>You are responsible for all activity on your account, including keeping your password secure. You may not use our services for any illegal or unauthorized purpose.</p>

              <h2>3. Service Availability and Limitations</h2>
              <p>Our services are provided on an "as is" and "as available" basis. We do not warrant that the service will be uninterrupted, timely, secure, or error-free.</p>

              <h2>4. Payment and Billing</h2>
              <p>You agree to pay all charges associated with your account in a timely manner. We may suspend or terminate your account if payments are not made on time.</p>

              <h2>5. Termination of Service</h2>
              <p>We may terminate or suspend your account at any time, without prior notice or liability, for any reason, including if you breach these Terms.</p>

              <h2>6. Limitation of Liability</h2>
              <p>In no event shall Vivanet Communications be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>

              <h2>7. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.</p>

              <h2>8. Changes to the Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect.</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
