'use client';

import { useEffect, useState } from 'react';

const API_BASE =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';

type RequestRecord = {
  submittedAt?: string;
  [key: string]: any;
};

type RequestsResponse = {
  manufacturing: RequestRecord[];
  diamond: RequestRecord[];
  gemstone: RequestRecord[];
  cutting: RequestRecord[];
  design: RequestRecord[];
  retail: RequestRecord[];
};

type RequestKind = keyof RequestsResponse;

const TAB_LABELS: Record<RequestKind, string> = {
  manufacturing: 'Manufacturing Requests',
  diamond: 'Diamond Requests',
  gemstone: 'Gemstone Requests',
  cutting: 'Cutting Requests',
  design: 'Design Library Requests',
  retail: 'Retail Support Requests',
};

export default function AdminRequestsPage() {
  const [data, setData] = useState<RequestsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
   const [activeTab, setActiveTab] = useState<RequestKind>('manufacturing');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/requests`);
        if (!res.ok) {
          throw new Error('Failed to load requests');
        }
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        console.error(err);
        setError(err?.message || 'Failed to load requests');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <section>
        <div className="container">
          <p>Loading requests…</p>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section>
        <div className="container">
          <h2 className="section-title">Admin — Requests</h2>
          <p style={{ color: 'red', fontSize: 14 }}>{error}</p>
        </div>
      </section>
    );
  }

  const renderTable = (items: RequestRecord[]) => {
    if (!items.length) {
      return <p style={{ fontSize: 13 }}>No submissions yet.</p>;
    }

    return (
      <div
        style={{
          width: '100%',
          overflowX: 'auto',
          borderRadius: 4,
          border: '1px solid var(--border)',
          background: 'white',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 13,
          }}
        >
          <thead>
            <tr>
              {Object.keys(items[0]).map((key) => (
                <th
                  key={key}
                  style={{
                    textAlign: 'left',
                    padding: '8px 12px',
                    borderBottom: '1px solid var(--border)',
                    background: 'var(--ivory)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontSize: 11,
                  }}
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((row, idx) => (
              <tr key={idx}>
                {Object.keys(items[0]).map((key) => (
                  <td
                    key={key}
                    style={{
                      padding: '8px 12px',
                      borderBottom: '1px solid var(--border)',
                      verticalAlign: 'top',
                    }}
                  >
                    {String(row[key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <section>
      <div className="container">
        <span className="section-tag">Admin</span>
        <h1 className="section-title">Requests Overview</h1>
        <div className="gold-divider" />

        <div style={{ marginTop: 24 }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              marginBottom: 24,
            }}
          >
            {(Object.keys(TAB_LABELS) as RequestKind[]).map((kind) => {
              const isActive = activeTab === kind;
              return (
                <button
                  key={kind}
                  type="button"
                  onClick={() => setActiveTab(kind)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 999,
                    border: isActive
                      ? '1px solid var(--gold)'
                      : '1px solid var(--border)',
                    background: isActive ? 'var(--champagne)' : 'white',
                    color: 'var(--text)',
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  {TAB_LABELS[kind]}
                </button>
              );
            })}
          </div>

          <div>
            <h2
              className="section-title"
              style={{ fontSize: 20, marginBottom: 12 }}
            >
              {TAB_LABELS[activeTab]}
            </h2>
            {renderTable(data[activeTab])}
          </div>
        </div>
      </div>
    </section>
  );
}

