'use client'

import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../components/ui/dropdown-menu'
import { FilterState } from '../../../types/property'
import { MdRemove } from 'react-icons/md'

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({})

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    setFilters({})
    onFilterChange({})
  }

  return (
    <div className="sticky top-0 z-10 bg-white border-b">
      <div className="container-md mx-auto px-4 lg:px-12 py-4">
        <div className="flex flex-wrap gap-2 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Price Range</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleFilterChange('priceRange', '0-500')}>
                £0 - £500 per week
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFilterChange('priceRange', '501-1000')}>
                £501 - £1000 per week
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFilterChange('priceRange', '1001-1500')}>
                £1001 - £1500 per week
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline">Locality</Button>
          <Button variant="outline">Room Type</Button>
          
          <Button variant="outline" onClick={clearFilters} className="ml-auto">
            <MdRemove className="mr-2" />
            Clear All
          </Button>
        </div>
      </div>
    </div>
  )
}

