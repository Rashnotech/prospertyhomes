import { Loader2 } from 'lucide-react'

export function LoadingIndicator() {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="h-8 w-8 animate-spin text-yellow-500" />
    </div>
  )
}