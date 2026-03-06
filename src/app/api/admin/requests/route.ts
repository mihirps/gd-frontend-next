import { NextResponse } from 'next/server';

export async function GET() {
  const isProd = process.env.NODE_ENV === 'production';
  const backendUrl =
    process.env.BACKEND_URL ||
    (isProd ? process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.gemstonediamond.com' : 'http://localhost:4000');

  const res = await fetch(`${backendUrl}/api/requests`, {
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

  const raw = await res.json();
  const normalized = {
    manufacturing: Array.isArray(raw?.manufacturing) ? raw.manufacturing : [],
    diamond: Array.isArray(raw?.diamond) ? raw.diamond : [],
    gemstone: Array.isArray(raw?.gemstone) ? raw.gemstone : [],
    cutting: Array.isArray(raw?.cutting) ? raw.cutting : [],
    design: Array.isArray(raw?.design) ? raw.design : [],
    retail: Array.isArray(raw?.retail) ? raw.retail : [],
  };
  return NextResponse.json(normalized, { status: 200 });
}

