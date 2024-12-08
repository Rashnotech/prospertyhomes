'use client'

import { Property } from '../../../types/property'
import PropertyCard from './PropertyCard'

interface PropertyListProps {
  properties: Property[]
  onPropertyClick: (property: Property) => void
}

export default function PropertyList({ properties, onPropertyClick }: PropertyListProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold mb-2">No properties found</h3>
        <p className="text-gray-600">Try adjusting your filters to see more results.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onClick={() => onPropertyClick(property)}
        />
      ))}
    </div>
  )
}

