"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqItems = [
    {
      question: "Can I take my connection with me if I move to a new location?",
      answer:
        "Yes, in most cases, you can. Please contact our support team with your new address, and we will check for service availability and guide you through the process.",
    },
    {
      question: "How can I improve my Wi-Fi connection?",
      answer:
        "For the best signal, place your router in a central location, away from walls and obstructions. Keep it away from other electronic devices that might cause interference. You can also try restarting your router.",
    },
    {
      question: "Can I change my subscription package?",
      answer:
        "Yes, you can upgrade or downgrade your package at any time. Please contact our customer support to find the best plan for your needs.",
    },
    
    {
      question: "What is your uptime guarantee?",
      answer:
        "We offer a 99.9% network uptime guarantee, ensuring you have a consistent and reliable internet connection.",
    },
    {
      question: "How can I get support?",
      answer:
        "Vivanet provides 24/7 local support in Mombasa. You can reach our team via phone, email, or through the contact form on our website.",
    },
  ]

  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-muted-foreground">
            Find answers to common questions about Vivanet internet services.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}