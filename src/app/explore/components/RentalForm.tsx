
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group"
import { Textarea } from "../../../components/ui/textarea"
import { useNotification } from '@/contexts/NotificationContext'
import { PaymentModal } from './PaymentModal'
import { LoadingIndicator } from '@/app/components/LoadingIndicator'

interface RentalFormModalProps {
  isOpen: boolean
  onClose: () => void
}

const RentalFormModal: React.FC<RentalFormModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1)
  const [process, setProcess] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const { showNotification } = useNotification()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    maritalStatus: '',
    occupants: '',
    additionalOccupants: '',
    presentAddress: '',
    dob: '',
    cityState: '',
    petPersonality: '',
    leaseLength: '',
    moveInDate: '',
    paymentDate: '',
    previousTenancyLength: '',
    occupation: '',
    references: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, maritalStatus: value }))
  }

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 5))
  }

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setProcess(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
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
    onClose()
    setIsPaymentModalOpen(true);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Rental Application</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telephone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label>Marital Status</Label>
                    <RadioGroup
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onValueChange={handleRadioChange}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single" id="single" />
                        <Label htmlFor="single">Single</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="married" id="married" />
                        <Label htmlFor="married">Married</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="occupants">How many proposed occupants</Label>
                    <Input
                      type='number'
                      id="occupants"
                      name="occupants"
                      value={formData.occupants}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="additionalOccupants">List all in addition to yourself including approx. age</Label>
                    <Textarea
                      id="additionalOccupants"
                      name="additionalOccupants"
                      value={formData.additionalOccupants}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="presentAddress">Present Address</Label>
                    <Input
                      type='text'
                      id="presentAddress"
                      name="presentAddress"
                      value={formData.presentAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cityState">City/State</Label>
                    <Input
                      id="cityState"
                      name="cityState"
                      value={formData.cityState}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="petPersonality">Personality of pet</Label>
                    <Input
                      id="petPersonality"
                      name="petPersonality"
                      value={formData.petPersonality}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="leaseLength">Intended length of lease</Label>
                    <Input
                      id="leaseLength"
                      name="leaseLength"
                      value={formData.leaseLength}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="moveInDate">Preferred move in date</Label>
                    <Input
                      id="moveInDate"
                      name="moveInDate"
                      type="date"
                      value={formData.moveInDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="paymentDate">Earliest possible date of payment</Label>
                    <Input
                      id="paymentDate"
                      name="paymentDate"
                      type="date"
                      value={formData.paymentDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="previousTenancyLength">Length of previous house tenancy</Label>
                    <Input
                      id="previousTenancyLength"
                      name="previousTenancyLength"
                      value={formData.previousTenancyLength}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="occupation">Present occupation</Label>
                    <Input
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="references">References</Label>
                    <Textarea
                      id="references"
                      name="references"
                      value={formData.references}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Attach the front and back pictures of your ID or your work ID</Label>
                    <Input type="file" accept="image/*" multiple />
                  </div>
                </div>
              )}
              <div className="mt-6 flex justify-between">
                {step > 1 && (
                  <Button type="button" onClick={handlePrevious} variant="outline">
                    Previous
                  </Button>
                )}
                {step < 5 ? (
                  <Button type="button" onClick={handleNext} className="ml-auto">
                    Next
                  </Button>
                ) : (
                  <Button disabled={process} type="submit" className="ml-auto">
                    {process ? <LoadingIndicator /> : 'Submit'}
                  </Button>
                )}
              </div>
            </form>
            <PaymentModal
              isOpen={isPaymentModalOpen}
              onClose={() => setIsPaymentModalOpen(false)}
              amount={200.00}
            />
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default RentalFormModal

