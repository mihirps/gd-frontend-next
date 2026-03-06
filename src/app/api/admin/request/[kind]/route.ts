import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ALLOWED: Record<string, true> = {
  manufacturing: true,
  diamond: true,
  gemstone: true,
  cutting: true,
  design: true,
  retail: true,
};

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ kind: string }> },
) {
  const p = await ctx.params;
  const kind = (p?.kind || '').toLowerCase();
  if (!ALLOWED[kind]) {
    return NextResponse.json({ message: 'Invalid kind' }, { status: 400 });
  }

  const isProd = process.env.NODE_ENV === 'production';
  const backendUrl =
    process.env.BACKEND_URL ||
    (isProd
      ? process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.gemstonediamond.com'
      : 'http://localhost:4000');

  try {
    const res = await fetch(`${backendUrl}/api/request/${kind}`, {
      cache: 'no-store',
    });
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const json = await res.json();
      const items = Array.isArray((json as any)?.items) ? (json as any).items : [];
      return NextResponse.json({ items }, { status: 200 });
    }
  } catch (_err) {
    // ignore and attempt local fallback in development
  }

  // Fallback: in development, read local backend data files directly
  if (process.env.NODE_ENV !== 'production') {
    try {
      const base =
        process.env.BACKEND_DATA_DIR ||
        path.resolve(process.cwd(), '..', 'backend', 'data');
      const filePath = path.join(base, `request-${kind}.jsonl`);
      if (!fs.existsSync(filePath)) {
        return NextResponse.json({ items: [] }, { status: 200 });
      }
      const raw = fs.readFileSync(filePath, 'utf8');
      const items = raw
        .split('\n')
        .filter(Boolean)
        .map(line => {
          try {
            return JSON.parse(line);
          } catch {
            return null;
          }
        })
        .filter(Boolean);
      return NextResponse.json({ items }, { status: 200 });
    } catch (err) {
      return NextResponse.json(
        { items: [], message: 'Failed local fallback' },
        { status: 200 },
      );
    }
  }

  return NextResponse.json({ items: [] }, { status: 200 });
}
