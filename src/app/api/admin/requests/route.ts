import { NextResponse } from 'next/server';

export async function GET() {
  const backendUrl =
    process.env.BACKEND_URL ||
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    'http://localhost:4000';

  const adminToken = process.env.BACKEND_ADMIN_TOKEN || '';
  if (!adminToken) {
    return NextResponse.json(
      { message: 'BACKEND_ADMIN_TOKEN is not configured' },
      { status: 503 },
    );
  }

  const res = await fetch(`${backendUrl}/api/requests`, {
    headers: { Authorization: `Bearer ${adminToken}` },
    cache: 'no-store',
  });

  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    const text = await res.text();
    return NextResponse.json(
      { message: 'Unexpected backend response', status: res.status, body: text },
      { status: 502 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

