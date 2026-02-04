import { auth } from '@/auth';
import type { NextRequest } from 'next/server';

// `auth` is constructed in `auth.ts` via NextAuth(...). Its inferred type
// doesn't exactly match Next.js' RouteHandlerConfig generic, which causes
// the build-time TypeScript error on Vercel. Cast to a compatible handler
// type so the App Router accepts it while preserving runtime behaviour.
export const GET = auth as unknown as (
	request: NextRequest,
	context: { params: Promise<{ nextauth: string[] }> }
) => void | Response | Promise<void | Response>;

export const POST = GET;

 
