
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Privacy Policy</h1>
            <div className="prose mt-8">
              <p>Last updated: August 08, 2025</p>

              <h2>1. Introduction</h2>
              <p>Vivanet Communications is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information.</p>

              <h2>2. Information We Collect</h2>
              <p>We may collect personal information from you, such as your name, email address, phone number, and billing information, when you sign up for our services.</p>

              <h2>3. How We Use Your Information</h2>
              <p>We use your information to provide and improve our services, to communicate with you, and to process payments. We do not sell your personal information to third parties.</p>

              <h2>4. Data Security</h2>
              <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.</p>

              <h2>5. Third-Party Services</h2>
              <p>We may use third-party services to help us provide our services. These third parties may have access to your personal information, but they are obligated to protect it.</p>

              <h2>6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain processing of your personal information.</p>

              <h2>7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
