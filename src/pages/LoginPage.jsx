import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import LoginForm from '../components/LoginForm'
import '../styles/LoginPage.css'

export default function LoginPage({ onLogin }) {
  return (
    <div className="flex h-screen">
      {/* Left side - Light theme */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-white to-gray-50 flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Xfinity Logo */}
          <div className="mb-12 flex justify-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-xfinity-blue to-xfinity-dark">
              Xfinity
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-xfinity-blue flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Manage Your Account</h3>
                <p className="text-gray-600 mt-1">Access your services and bill anytime</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-xfinity-blue flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">View Live TV</h3>
                <p className="text-gray-600 mt-1">Stream your favorite shows and movies</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-xfinity-blue flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Secure & Safe</h3>
                <p className="text-gray-600 mt-1">Your data is protected with encryption</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Dark theme with form */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-xfinity-dark via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center md:hidden">
            <div className="text-3xl font-bold text-white">
              Xfinity
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-purple-200 mb-8">Sign in with your Xfinity ID</p>

          <LoginForm onLogin={onLogin} />

          {/* Footer Links */}
          <div className="mt-8 space-y-3 text-sm text-purple-200">
            <p className="text-center">
              By signing in, you agree to our{' '}
              <a href="#" className="text-white hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-white hover:underline">Privacy Policy</a>.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:underline">Forgot Password?</a>
              <span>•</span>
              <a href="#" className="text-white hover:underline">Need Help?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
