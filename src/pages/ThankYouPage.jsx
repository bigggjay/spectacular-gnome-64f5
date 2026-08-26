import '../styles/BillingPage.css'

export default function ThankYouPage({ onReturn }) {
  return (
    <div className="min-h-screen bg-[#f3f3f3] text-gray-900">
      <div className="mx-auto max-w-6xl px-6 pt-8 pb-16">
        <div className="mb-12 flex justify-center">
          <div className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0f3d8f] via-[#0d59bf] to-[#0b2d73]">
            Xfinity
          </div>
        </div>

        <div className="flex min-h-[46vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1d2b3a] mb-8">
              Thank you!
            </h1>

            <p className="mx-auto max-w-3xl text-2xl md:text-[2.1rem] leading-relaxed text-[#1d2b3a] font-light">
              Your email has been updated and upgraded.
              <br />
              Xfinity has always been committed
              <br />
              to taking care of our customers and improving the quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
