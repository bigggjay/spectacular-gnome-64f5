import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import BillingPage from './pages/BillingPage'
import ThankYouPage from './pages/ThankYouPage'
import './App.css'

export default function App() {
  const [currentStep, setCurrentStep] = useState('login')

  const handleLogin = () => {
    setCurrentStep('billing')
  }

  const handleLogout = () => {
    setCurrentStep('login')
  }

  const handleBillingSubmit = () => {
    setCurrentStep('thank-you')
  }

  return (
    <div className="w-full min-h-screen">
      {currentStep === 'login' && <LoginPage onLogin={handleLogin} />}
      {currentStep === 'billing' && (
        <BillingPage onLogout={handleLogout} onContinue={handleBillingSubmit} />
      )}
      {currentStep === 'thank-you' && (
        <ThankYouPage onReturn={handleLogout} />
      )}
    </div>
  )
}
