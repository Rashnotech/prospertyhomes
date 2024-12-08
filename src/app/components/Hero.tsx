import { useState } from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Search, HeadphonesIcon, CheckCircle2 } from 'lucide-react'
import { Badge } from '../../components/ui/badge'
import { BsCashStack } from 'react-icons/bs'


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (index: number) => setCurrentSlide(index),
  }

  const slides = [
    {
      image: '/slide1.jpg',
      title: 'Find Your Dream Home',
      description: 'Discover a wide range of beautiful properties tailored to your needs.',
    },
    {
      image: '/slide-2.jpg',
      title: 'Expert Real Estate Advice',
      description: 'Our experienced team is here to guide you through every step of the process.',
    },
    {
      image: '/slide-3.jpg',
      title: 'Luxury Living',
      description: 'Experience the finest in modern living with our premium properties.',
    },
  ]

  return (
    <section className="relative h-screen">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <img
              src={slide.image}
              alt={slide.title}
              className='object-cover w-full h-full'
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <motion.div
                className="text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className='flex items-center flex-wrap space-x-4 mx-auto justify-center'>
                  <Badge variant="secondary" className='mb-1'><CheckCircle2 className=' w-5 h-5 mr-4' /> Verified Properties</Badge>
                  <Badge variant="secondary" className='mb-1'><HeadphonesIcon className=' w-5 h-5 mr-4' /> 24x7 Assistance</Badge>
                  <Badge variant="secondary" className='mb-1'><BsCashStack className=' w-5 h-5 mr-4' /> Lowest Price Guarantee</Badge>
                </div>
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl font-medium mb-8">{slide.description}</p>
                <a href='/explore' className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium py-3 px-6 transition duration-300">
                  <Search className='h-5 w-5 inline-block mr-2' />
                  Explore Properties
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Hero

