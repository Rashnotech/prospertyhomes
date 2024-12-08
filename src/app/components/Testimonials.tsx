'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Alice Johnson',
    rating: 5,
    text: "ProspertyHomes made finding our dream house a breeze. Their team was incredibly helpful and professional throughout the entire process.",
  },
  {
    name: 'Bob Williams',
    rating: 5,
    text: "I was impressed by the range of properties ProspertyHomes offered. They really understood our needs and found us the perfect home.",
  },
  {
    name: 'Carol Davis',
    rating: 5,
    text: "The staff at ProspertyHomes went above and beyond to ensure we had a smooth home-buying experience. Highly recommended!",
  },
  {
    name: 'David Miller',
    rating: 4,
    text: "ProspertyHomes' expertise in the local market helped us secure a great deal on our new home. We couldn't be happier with their service.",
  },
]

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative h-64">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="absolute w-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: currentTestimonial === index ? 1 : 0,
                x: currentTestimonial === index ? 0 : 100,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

