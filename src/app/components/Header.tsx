'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation();

  const url = location.pathname.includes('/explore')

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isSticky || url ? `bg-white shadow-md py-6` : `bg-transparent py-2`
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-md mx-auto px-4 lg:px-12 flex justify-between items-center">
        <a href="/" className='text-2xl font-black'>
          <img src="/logo.png" alt="ProspertyHomes" className='w-20 object-contain h-20' />
        </a>
        <nav className='hidden md:block'>
          <ul className="flex items-center text-sm space-x-6">
            <li><a href="/explore" className={`${ isSticky || url ? `text-black` : `text-white`} p-2 font-medium hover:text-gray-400`}>Explore</a></li>
            <li><a href="#about" className={`${ isSticky || url ? `text-black` : `text-white`} p-2 font-medium hover:text-gray-400`}>About</a></li>
            <li><a href="#staff" className={`${ isSticky || url ? `text-black` : `text-white`} p-2 font-medium hover:text-gray-400`}>Staff</a></li>
            <li><a href="#testimonials" className={`${ isSticky || url ? `text-black` : `text-white`} p-2 font-medium hover:text-gray-400`}>Testimonials</a></li>
            <li><a href="#contact" className={`${ isSticky || url ? `text-black` : `text-white`} p-2 font-medium hover:text-gray-400`}>Contact</a></li>
            <li><button className='bg-yellow-600 p-3 px-6 text-white font-medium'>Enquire Now</button></li>
          </ul>
        </nav>
        <button
          className={`md:hidden ${isSticky ? `text-black hover:text-gray-800`: `text-white hover:text-gray-50`}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.nav
          className="md:hidden bg-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center py-4">
            <li className='py-3'><a href="/explore" className="text-gray-700 hover:text-blue-600" onClick={toggleMobileMenu}>Explore</a></li>
            <li className="py-2"><a href="#about" className="text-gray-700 hover:text-blue-600" onClick={toggleMobileMenu}>About</a></li>
            <li className="py-2"><a href="#staff" className="text-gray-700 hover:text-blue-600" onClick={toggleMobileMenu}>Staff</a></li>
            <li className="py-2"><a href="#testimonials" className="text-gray-700 hover:text-blue-600" onClick={toggleMobileMenu}>Testimonials</a></li>
            <li className="py-2"><a href="#contact" className="text-gray-700 hover:text-blue-600" onClick={toggleMobileMenu}>Contact</a></li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header

