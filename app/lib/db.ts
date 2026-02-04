import postgres from 'postgres';

/**
 * Lazily initialize and cache the Postgres client.
 * This prevents the client from trying to connect during build-time
 * (which causes ECONNREFUSED on Vercel when no DB is available).
 */
let cached: ReturnType<typeof postgres> | null = null;

export function getSql() {
  if (cached) return cached;

  const url = process.env.POSTGRES_URL;
  if (!url) {
    // Throwing here will surface a clear error when trying to use the DB at runtime.
    throw new Error('POSTGRES_URL is not set. Set this in your environment variables.');
  }

  // Keep the same options used previously in the project.
  cached = postgres(url, { ssl: 'require' });
  return cached;
}

export default getSql;
