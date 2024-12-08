'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Property } from '../../../types/property'
import '../../global.css'

interface PropertyMapProps {
  properties: Property[]
  selectedProperty: Property | null
  onPropertyClick: (property: Property) => void
}

export default function PropertyMap({ properties, selectedProperty, onPropertyClick }: PropertyMapProps) {
  const mapRef = useRef<L.Map>(null)

  useEffect(() => {
    if (selectedProperty && mapRef.current) {
      mapRef.current.setView(
        [selectedProperty.location.coordinates.lat, selectedProperty.location.coordinates.lng],
        15
      )
    }
  }, [selectedProperty])

  const createCustomIcon = (price: number) => {
    return L.divIcon({
      className: 'custom-icon',
      html: `<div style="padding: 4px 8px;border-radius: 4px;font-size: 14px;font-weight: bold;white-space: nowrap;
      background: white;">£${price}</div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    })
  }
  

  return (
    <MapContainer
      center={[51.5074, -0.1278]} // London center
      zoom={12}
      style={{ height: '100%', width: '100%' }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {properties.map((property) => (
        <Marker
          key={property.id}
          position={[property.location.coordinates.lat, property.location.coordinates.lng]}
          icon={createCustomIcon(property.pricePerWeek)}
          eventHandlers={{
            click: () => onPropertyClick(property),
          }}
        >
          <Popup>
            <div>
              <h3 className="font-semibold">{property.title}</h3>
              <p>£{property.pricePerWeek}/week</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

