'use client';

import { useEffect, useState } from 'react';

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
  const [activeTab, setActiveTab] = useState<RequestKind>('manufacturing');
  const [dataMap, setDataMap] = useState<Partial<RequestsResponse>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/admin/request/${activeTab}`);
        if (!res.ok) {
          throw new Error('Failed to load requests');
        }
        const json = await res.json();
        const items: RequestRecord[] = Array.isArray(json?.items) ? json.items : [];
        if (!cancelled) {
          setDataMap(prev => ({ ...prev, [activeTab]: items }));
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err?.message || 'Failed to load requests');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [activeTab]);

  // Keep page visible while switching tabs; show inline status messages

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
              const count = (dataMap[kind] || []).length;
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
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  {TAB_LABELS[kind]}
                  <span
                    style={{
                      display: 'inline-block',
                      minWidth: 22,
                      padding: '2px 6px',
                      borderRadius: 999,
                      border: '1px solid var(--border)',
                      background: isActive ? 'white' : 'var(--ivory)',
                      color: 'var(--text-light)',
                      fontSize: 11,
                      textAlign: 'center',
                    }}
                  >
                    {count}
                  </span>
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
            {error ? (
              <p style={{ color: 'red', fontSize: 13, marginBottom: 12 }}>
                {error}
              </p>
            ) : null}
            {loading ? (
              <p style={{ fontSize: 13, marginBottom: 12 }}>Loading…</p>
            ) : null}
            {renderTable(dataMap[activeTab] || [])}
          </div>
        </div>
      </div>
    </section>
  );
}
