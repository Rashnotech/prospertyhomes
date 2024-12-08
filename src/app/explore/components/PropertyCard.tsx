import { useState } from 'react'
import { Heart } from 'lucide-react'
import Slider from 'react-slick'
import { Property } from '@/types/property'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import RentalFormModal from './RentalForm'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface PropertyCardProps {
  property: Property
  onClick: () => void
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 relative">
          <Slider {...sliderSettings}>
            {property.images.map((image, index) => (
              <div key={index} className="relative h-64 md:h-full">
                <img
                  src={image}
                  alt={`${property.title} - Image ${index + 1}`}
                  className='object-cover w-full h-full'
                />
              </div>
            ))}
          </Slider>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsFavorite(!isFavorite)
            }}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md"
          >
            <Heart
              className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'}`}
            />
          </button>
        </div>

        <div className="w-full md:w-3/5 p-6">
          <a href={`/explore/property/${property.id}/${property.title}`} className="block">
            <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-4">
              {property.location.address}, {property.location.city}, {property.location.postcode}
            </p>
          </a>

          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">{property.details.distanceFromCenter}</span> from City Center
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {property.features.map((feature, index) => (
              <Badge key={index} variant="secondary">
                {feature}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between mt-4">
            <div>
              <p className="text-sm text-gray-600">From</p>
              <p className="text-xl font-bold">£{property.pricePerWeek}/week</p>
            </div>
            <Button className='bg-yellow-500 hover:bg-yellow-600' onClick={() => setIsModalOpen(true)}>Apply Now</Button>
          </div>
        </div>
      </div>
      <RentalFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

