import { useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../config/firebase'

const emptyState = { login: [], billing: [] }

function formatTimestamp(value) {
  if (!value) return 'N/A'

  if (typeof value.toDate === 'function') {
    return value.toDate().toLocaleString()
  }

  return new Date(value).toLocaleString()
}

export default function SubmissionsDashboard({ onBack }) {
  const [data, setData] = useState(emptyState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadSubmissions = async () => {
      setLoading(true)
      setError('')

      try {
        const [loginSnap, billingSnap] = await Promise.all([
          getDocs(query(collection(db, 'login_submissions'), orderBy('timestamp', 'desc'))),
          getDocs(query(collection(db, 'billing_submissions'), orderBy('timestamp', 'desc'))),
        ])

        const loginItems = loginSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        const billingItems = billingSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setData({ login: loginItems, billing: billingItems })
      } catch (err) {
        console.error('Failed to fetch submissions:', err)
        setError(
          'Unable to load submissions. Check Firestore rules and make sure the app has permission to read the collections.',
        )
      } finally {
        setLoading(false)
      }
    }

    loadSubmissions()
  }, [])

  const renderRows = (items, type) => {
    if (!items.length) {
      return <p className="text-sm text-gray-500">No {type} submissions yet.</p>
    }

    return items.map((item) => (
      <div key={item.id} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            {type === 'login' ? 'Login Submission' : 'Billing Submission'}
          </span>
          <span className="text-xs text-gray-500">{formatTimestamp(item.timestamp)}</span>
        </div>

        <pre className="overflow-x-auto whitespace-pre-wrap break-words text-xs text-gray-700">
          {JSON.stringify(item, null, 2)}
        </pre>
      </div>
    ))
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">Admin</p>
            <h1 className="mt-2 text-3xl font-bold">Submissions Dashboard</h1>
          </div>

          <button
            type="button"
            onClick={onBack}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-200"
          >
            Back to Login
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="rounded-xl bg-white p-8 text-center text-slate-600 shadow-sm">
            Loading submissions...
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Login submissions</h2>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {data.login.length}
                </span>
              </div>
              <div className="space-y-4">{renderRows(data.login, 'login')}</div>
            </section>

            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Billing submissions</h2>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                  {data.billing.length}
                </span>
              </div>
              <div className="space-y-4">{renderRows(data.billing, 'billing')}</div>
            </section>
          </div>
        )}
      </div>
    </div>
  )
}
