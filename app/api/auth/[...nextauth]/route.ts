import { auth } from '@/auth';
import type { NextRequest } from 'next/server';

// Wrap `auth` in properly-typed App Router handlers. Instead of exposing the
// raw exported `auth` (whose inferred type can mismatch the RouteHandlerConfig
// check during Vercel builds), create thin wrapper functions with the exact
// signature expected by Next.js and forward the call at runtime.
export async function GET(
	request: NextRequest,
	context: { params: Promise<{ nextauth: string[] }> }
) {
	// `auth` may have complex overloads; call it as `any` at runtime to avoid
	// further TypeScript incompatibilities while preserving behavior.
	return (auth as any)(request, context);
}

export const POST = GET;

 
