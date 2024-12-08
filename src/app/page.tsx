import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Staff from './components/Staff'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import GovernmentApproval from './components/GovernmentApproved'
import PartnershipLogos from './components/Partnership'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <GovernmentApproval />
      <Staff />
      <Testimonials />
      <PartnershipLogos />
      <ContactForm />
    </>
  )
}

