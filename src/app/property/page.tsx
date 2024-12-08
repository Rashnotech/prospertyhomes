import { useState } from 'react'
import Slider from 'react-slick'
import { Button } from '../../components/ui/button'
import { mockProperties } from '../explore/page'
import { useParams } from 'react-router-dom'
import { CheckCircle2Icon } from 'lucide-react'
import RentalFormModal from '../explore/components/RentalForm'

export default function PropertyDetailPage() {
  const [activeTab, setActiveTab] = useState('photos')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const params = useParams<{ id: string }>()

  const property = mockProperties.find((property) => property.id === params.id);

  if (!property) {
    return <div>Property not found</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="min-h-screen pt-32 bg-gray-50">
      <div className="container-md mx-auto px-4 lg:px-12 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
            <p className="text-gray-600 mb-6">
              {property.location.address}, {property.location.city}, {property.location.postcode}
            </p>

            <div className="mb-8">
              <div className="flex gap-4 mb-4">
                <button
                  className={`px-4 py-2 rounded-sm ${
                    activeTab === 'photos' ? 'bg-yellow-600 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('photos')}
                >
                  Photos
                </button>
                <button
                  className={`px-4 py-2 rounded-sm ${
                    activeTab === 'videos' ? 'bg-yellow-600 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('videos')}
                >
                  Videos
                </button>
              </div>

              {activeTab === 'photos' && (
                <Slider {...sliderSettings}>
                  {property.images.map((image: any, index: number) => (
                    <div key={index} className="relative h-[500px]">
                      <img
                        src={image}
                        alt={`${property.title} - Image ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </Slider>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-extrabold mb-4">Property Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p>{property.details.distanceFromCenter} from City Center</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Amenities</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {property.amenities.map((amenity: any, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle2Icon />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-6">
                  <p className="text-sm text-gray-600">From</p>
                  <p className="text-3xl font-bold">£{property.pricePerWeek}/week</p>
                </div>

                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    Enquire Now
                  </Button>
                  <Button onClick={() => setIsModalOpen(true)} className="w-full" variant="outline" size="lg">
                    Apply Now
                  </Button>
                </div>
                <RentalFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2Icon />
                    <span>Instant Booking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2Icon />
                    <span>Lowest Price Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2Icon />
                    <span>Verified Properties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2Icon />
                    <span>24x7 Personal Assistance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

