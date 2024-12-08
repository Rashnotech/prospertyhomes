'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bitcoin, Building2, ShoppingCartIcon as PaypalIcon, Copy, Clock } from 'lucide-react'
import { Button } from "../../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog"

type PaymentMethod = 'crypto' | 'bank' | 'paypal'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  amount: number
}

export function PaymentModal({ isOpen, onClose, amount }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('bank')
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }
  
  const payingPal = (email: string) => {
    window.open(`https://www.paypal.com/paypalme/${email}`)
  }

  const paymentMethods = [
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building2,
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      icon: Bitcoin,
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: PaypalIcon,
    },
  ]

  const renderPaymentContent = () => {
    switch (selectedMethod) {
      case 'bank':
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <label className="text-sm text-gray-500">BANK NAME</label>
                <div className="flex items-center justify-between">
                  <p className="font-medium">ProspertyHomes Bank</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy('ProspertyHomes Bank', 'bank')}
                  >
                    <Copy className="h-4 w-4" />
                    {copied === 'bank' && <span className="ml-2 text-green-500">Copied!</span>}
                  </Button>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500">ACCOUNT NUMBER</label>
                <div className="flex items-center justify-between">
                  <p className="font-medium">0123456789</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy('+', 'account')}
                  >
                    <Copy className="h-4 w-4" />
                    {copied === 'account' && <span className="ml-2 text-green-500">Copied!</span>}
                  </Button>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500">AMOUNT</label>
                <div className="flex items-center justify-between">
                  <p className="font-medium">£{amount.toFixed(2)}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(amount.toString(), 'amount')}
                  >
                    <Copy className="h-4 w-4" />
                    {copied === 'amount' && <span className="ml-2 text-green-500">Copied!</span>}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-2" />
              This account expires in 30 minutes
            </div>
            <Button className="w-full">I've sent the money</Button>
          </div>
        )
      case 'crypto':
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <label className="text-sm text-gray-500">BITCOIN ADDRESS</label>
                <div className="flex items-center justify-between">
                  <p className="font-medium break-all">bc1qc6pe3n5vtcwenuzvf0v89ly6va22muuemkaagm</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy('bc1qc6pe3n5vtcwenuzvf0v89ly6va22muuemkaagm', 'btc')}
                  >
                    <Copy className="h-4 w-4" />
                    {copied === 'btc' && <span className="ml-2 text-green-500">Copied!</span>}
                  </Button>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500">AMOUNT IN Pounds</label>
                <div className="flex items-center justify-between">
                  <p className="font-medium">£ {amount}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(amount.toString(), 'amount')}
                  >
                    <Copy className="h-4 w-4" />
                    {copied === 'btc-amount' && <span className="ml-2 text-green-500">Copied!</span>}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-2" />
              Price locked for 30 minutes
            </div>
            <Button className="w-full">I've sent the crypto</Button>
          </div>
        )
      case 'paypal':
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="mb-4">You will be redirected to PayPal to complete your payment of</p>
              <p className="text-2xl font-bold">£{amount.toFixed(2)}</p>
            </div>
            <Button onClick={() => payingPal('hanleykathryne@gmail.com')} className="w-full">
              <PaypalIcon className="mr-2 h-4 w-4" />
              Pay with PayPal
            </Button>
          </div>
        )
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Payment Options</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id as PaymentMethod)}
              className={`p-4 rounded-lg border transition-all ${
                selectedMethod === method.id
                  ? 'border-sky-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <method.icon className={`h-6 w-6 ${
                  selectedMethod === method.id ? 'text-yellow-500' : 'text-gray-500'
                }`} />
                <span className="text-sm font-medium">{method.name}</span>
              </div>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMethod}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderPaymentContent()}
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}

