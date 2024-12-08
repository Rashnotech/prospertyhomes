'use client'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container-md mx-auto px-4 lg:px-12">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About ProspertyHomes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 text-sm mb-6">
              At ProspertyHomes, we're committed to helping you find the perfect place to call home. With years of experience and a passion for real estate, we strive to make your home-buying journey smooth and enjoyable.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="list-disc marker:text-yellow-400 text-sm list-inside text-gray-700">
              <li>Integrity in every transaction</li>
              <li>Customer satisfaction as our top priority</li>
              <li>Innovation in real estate solutions</li>
              <li>Community engagement and support</li>
            </ul>
          </motion.div>
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src="/slide-3.jpg"
              alt="About ProspertyHomes"
              className="rounded-lg shadow-lg bg-cover object-fill"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

