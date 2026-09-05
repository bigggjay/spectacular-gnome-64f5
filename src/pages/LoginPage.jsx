import LoginForm from '../components/LoginForm'
import '../styles/LoginPage.css'

export default function LoginPage({ onLogin, onViewDashboard }) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Left side - Light theme with form */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-white via-gray-50 to-gray-100 flex flex-col items-center justify-center p-6 sm:p-8 order-1 md:order-1">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center md:hidden">
            <div className="text-5xl font-black tracking-[-0.06em] text-black leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              Xfinity
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-8"># Sign in with your Xfinity ID</p>

          <LoginForm onLogin={onLogin} />

          {/* Footer Links */}
          <div className="mt-8 space-y-3 text-sm text-gray-600">
            <p className="text-center">
              By signing in, you agree to our{' '}
              <a href="#" className="text-xfinity-dark hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-xfinity-dark hover:underline">Privacy Policy</a>.
            </p>
            <div className="flex justify-center">
              <a href="#" className="text-xfinity-dark hover:underline">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Purple promo panel */}
      <div className="promo-panel w-full md:w-1/2 relative overflow-hidden flex flex-col items-center justify-center p-6 sm:p-8 order-2 md:order-2 md:flex">
        <div className="promo-grid" />
        <div className="promo-glow" />

        <div className="promo-content relative z-10 w-full max-w-[640px] text-center">
          <h1 className="promo-headline text-3xl xl:text-4xl font-black tracking-[-0.06em] text-white leading-[0.95] mb-4">
            Let&apos;s cut your mobile bill in half
          </h1>

          <p className="promo-subtitle text-base xl:text-lg text-white/80 mb-6 max-w-[500px] mx-auto leading-relaxed">
            Plus, only Xfinity&apos;s Mobile Plus plan includes device protection for life and phone upgrades every year.
          </p>

          <button
            type="button"
            className="promo-button bg-white text-[#240a69] font-bold text-xl px-7 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Calculate savings
          </button>
        </div>

        <div className="promo-torn" aria-hidden="true" />
      </div>
    </div>
  )
}
