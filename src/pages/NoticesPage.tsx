import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { NOTICES, getNoticeById } from '../utils/notices';

export default function NoticesPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const selected = id ? getNoticeById(id) : undefined;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm bg-white hover:bg-gray-50"
            >
              ← Back
            </button>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Campus Notices</h1>
          </div>
          <Link to="/" className="text-sm text-blue-600 hover:text-blue-700">Open Chat</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 grid gap-6 sm:grid-cols-[320px,1fr]">
        <aside className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b font-medium">All Notices</div>
          <ul className="divide-y">
            {NOTICES.map(n => (
              <li key={n.id}>
                <Link
                  to={`/notices/${n.id}`}
                  className={`block p-4 hover:bg-gray-50 ${n.id === id ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-gray-900">{n.title}</div>
                    {n.tag && (
                      <span className="ml-3 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                        {n.tag}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-gray-500">{n.date}</div>
                  <div className="mt-2 text-sm text-gray-600 line-clamp-2">{n.details}</div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <section className="bg-white border rounded-xl shadow-sm p-5">
          {selected ? (
            <article>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{selected.title}</h2>
                <div className="mt-2 flex items-center flex-wrap gap-2">
                  {selected.date && (
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">{selected.date}</span>
                  )}
                  {selected.tag && (
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700">{selected.tag}</span>
                  )}
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-700">Official</span>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-gray-800 whitespace-pre-wrap">{selected.details}</p>

              <div className="mt-6 border-t pt-4">
                <h3 className="text-sm font-medium text-gray-900">Related notices</h3>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {NOTICES.filter(n => n.id !== selected.id).slice(0,4).map(n => (
                    <li key={n.id}>
                      <Link to={`/notices/${n.id}`} className="block rounded-lg border p-3 hover:bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-gray-900 line-clamp-1">{n.title}</div>
                          {n.date && <div className="ml-2 shrink-0 text-[11px] text-gray-500">{n.date}</div>}
                        </div>
                        <div className="mt-1 text-xs text-gray-600 line-clamp-2">{n.details}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ) : (
            <div className="h-full min-h-[240px] flex items-center justify-center text-gray-500 text-sm">
              Select a notice from the list to view details.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}


