'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion"

const faqs = [
  {
    question: "How do I book a property?",
    answer: "To book a property, browse our listings and select the one you're interested in. Click on the 'Enquire' or 'Book Now' button on the property page. Follow the prompts to complete your booking, which may include selecting your move-in date, room type, and providing necessary personal information."
  },
  {
    question: "What is included in the rent?",
    answer: "Rent typically includes accommodation, utilities (water, electricity, and gas), internet, and access to common areas and amenities. Some properties may also include additional services like cleaning or gym access. Always check the specific property listing for a detailed breakdown of what's included."
  },
  {
    question: "Is there a minimum stay duration?",
    answer: "Minimum stay durations can vary depending on the property and time of year. Most of our student accommodations are available for full academic years or semesters. Some properties may offer short-term stays during summer months. Check the specific property listing for stay duration options."
  },
  {
    question: "Can I choose my roommates?",
    answer: "If you're booking with friends, you can often request to be placed together. Use the 'Group Booking' option during the reservation process. Keep in mind that while we try to accommodate all requests, it may not always be possible depending on availability and room configurations."
  },
  {
    question: "What's the cancellation policy?",
    answer: "Cancellation policies can vary by property. Generally, if you cancel more than 30 days before your move-in date, you may be eligible for a full refund minus any booking fees. Cancellations within 30 days of move-in may be subject to additional charges. Always review the specific cancellation policy for your chosen property before booking."
  },
  {
    question: "Are the properties safe and secure?",
    answer: "Yes, safety is our top priority. Our properties typically feature 24/7 security, CCTV cameras in common areas, secure entry systems, and on-site staff. Many also have additional safety features like fire alarms and extinguishers. We regularly review and update our safety measures to ensure a secure living environment for all residents."
  }
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prevItems) =>
      prevItems.includes(value)
        ? prevItems.filter((item) => item !== value)
        : [...prevItems, value]
    )
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="multiple" value={openItems} className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger onClick={() => toggleItem(`item-${index}`)}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

