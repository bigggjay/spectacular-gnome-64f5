import BillingForm from '../components/BillingForm'
import '../styles/BillingPage.css'

export default function BillingPage({ onLogout, onContinue }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Xfinity</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Account Settings</span>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">✓</div>
              <span className="ml-2 text-sm text-gray-600">Login</span>
            </div>
            <div className="w-8 h-8 border-2 border-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <span className="ml-2 text-sm text-gray-600">Billing</span>
            </div>
            <div className="w-8 h-8 border-2 border-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">3</div>
              <span className="ml-2 text-sm text-gray-600">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">UPDATE YOUR BILLING INFORMATION</h2>
            <p className="text-blue-100 mt-2">Keep your payment method up to date</p>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <BillingForm onLogout={onLogout} onContinue={onContinue} />
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
          <p className="text-blue-800 text-sm">
            Your billing information is encrypted and secure. For any questions about your account,
            <a href="#" className="font-semibold hover:underline"> contact our support team</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
