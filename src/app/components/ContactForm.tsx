'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNotification } from '@/contexts/NotificationContext'

const ContactForm = () => {
  const { showNotification } = useNotification()
  const [process, setProcess] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
      setProcess(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(res => res.json());
      if (res.message) {
        showNotification({
          message: `${res.message}`,
          variant: 'success',
          duration: 5000,
        })
      } else {
        showNotification({
          message: `${res.error}`,
          variant: 'error',
          duration: 5000,
        })
      }
      setProcess(false);
    // Reset form after submission
    setFormData({ fullname: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.form
          className="max-w-lg mx-auto"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="fullname"
              placeholder='John Doe'
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='johndoe@gmail.com'
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder='Your message here...'
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={process}
              className="bg-yellow-500 hover:bg-yellow-600 font-base text-sm py-2 px-4 text-white transition duration-300"
            >
              {process ? 'processing...' : 'Send Message'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactForm

