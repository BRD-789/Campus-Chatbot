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
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{selected.title}</h2>
                  <div className="mt-1 text-sm text-gray-500">{selected.date} {selected.tag ? `· ${selected.tag}` : ''}</div>
                </div>
                <a
                  className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm bg-white hover:bg-gray-50"
                  href={`#${selected.id}`}
                >
                  Share
                </a>
              </div>
              <p className="mt-4 leading-relaxed text-gray-800 whitespace-pre-wrap">{selected.details}</p>
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


