import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import PropertyList from './components/PropertyList'
import FilterBar from './components/FilterBar'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { Property, FilterState } from '../../types/property'
import 'leaflet/dist/leaflet.css'
import '../global.css'

// Dynamically import the map component to avoid SSR issues
const PropertyMap = dynamic(() => import('./components/PropertyMap'), {
  ssr: false,
})

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'GoBritanya Paddington Citi View',
    location: {
      address: 'Talbot Square',
      city: 'London',
      postcode: 'W2 1TR',
      coordinates: {
        lat: 51.5074,
        lng: -0.1278,
      },
    },
    details: {
      distanceFromCenter: '2.6 mi',
    },
    amenities: ['Instant Booking', 'Pay In Instalment', 'Bills Included', 'Gym', 'Laundry Facility', 'TV'],
    images: ['/building-4.png', '/building.png', '/building-2.png', '/building-3.png',],
    roomOptions: 4,
    offers: 2,
    pricePerWeek: 475,
    features: ['No Visa No Pay', 'Bills Included', 'Gym Access'],
  },
  {
    id: '2',
    title: 'Millfield House, Sunderland',
    location: {
      address: 'Hylton Rd',
      city: 'Sunderland',
      postcode: 'SR4 7BB',
      coordinates: {
        lat: 54.9034,
        lng: -1.4153,
      },
    },
    details: {
      distanceFromCenter: '0.7 mi',
    },
    amenities: ['24/7 Security', 'TV (Communal)', 'Laundry Room', 'High-Speed Wi-Fi', 'Bike Storage'],
    images: ['https://assets.amberstudent.com/inventories/146974/da94dbbb.jpg?w=400&h=260&fit=crop&q=40&auto=format&trim=auto',
      'https://assets.amberstudent.com/inventories/931533/7d782bc2.jpeg?w=720&h=480&q=70&auto=format&trim=auto',
      'https://assets.amberstudent.com/inventories/931533/7d782bc2.jpeg?w=720&h=480&q=70&auto=format&trim=auto'
    ],
    roomOptions: 4,
    offers: 2,
    pricePerWeek: 110,
    features: ['No visa no pay', 'Pay In instalment', 'Laundry Facility', 'Bill Included'],
  },
  {
    id: '3',
    title: 'Park Lane House',
    location: {
      address: 'Stockon Rd, Sunderland',
      city: 'London',
      postcode: 'SR2 7AQ',
      coordinates: {
        lat: 54.8586,
        lng: -1.36749,
      },
    },
    details: {
      distanceFromCenter: '0.6 mi',
    },
    amenities: ['Gas', 'TV (Communal)', 'Laundry Facility', 'Wi-Fi', 'Bike Storage'],
    images: ['https://assets.amberstudent.com/inventories/146982/6e0913e1.jpg?w=720&fit=fill&q=80&auto=format&trim=auto','https://assets.amberstudent.com/inventories/146983/e21ea40e.jpg?w=720&h=480&q=70&auto=format&trim=auto', 'https://assets.amberstudent.com/inventories/146982/fed07e16.jpg?w=720&fit=fill&q=80&auto=format&trim=auto', 'https://assets.amberstudent.com/inventories/146982/7b8452e5.jpg?w=720&fit=fill&q=80&auto=format&trim=auto'],
    roomOptions: 2,
    offers: 2,
    pricePerWeek: 130,
    features: ['Bills Included', 'Pay In Instalment', 'Laundry Facility'],
  },
]

export default function ExplorePage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [filters, setFilters] = useState<FilterState>({})
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(mockProperties)
  const [isLoading, setIsLoading] = useState(false)

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property)
  }

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters)
    setIsLoading(true)
  }

  useEffect(() => {
    const applyFilters = () => {
      let result = mockProperties

      if (filters.university) {
        result = result.filter(property => property.university === filters.university)
      }

      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number)
        result = result.filter(property => property.pricePerWeek >= min && property.pricePerWeek <= max)
      }

      // Add more filter logic here as needed

      setFilteredProperties(result)
      setIsLoading(false)
    }

    const timer = setTimeout(applyFilters, 500) // Debounce filter application

    return () => clearTimeout(timer)
  }, [filters])

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="container-md mx-auto px-4 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/5">
            {isLoading ? (
              <LoadingIndicator />
            ) : (
              <PropertyList 
                properties={filteredProperties} 
                onPropertyClick={handlePropertyClick}
              />
            )}
          </div>
          <div className="w-full lg:w-2/5 h-[calc(100vh-200px)] sticky top-24">
            <PropertyMap 
              properties={filteredProperties}
              selectedProperty={selectedProperty}
              onPropertyClick={handlePropertyClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

