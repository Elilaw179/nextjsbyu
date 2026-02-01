// import NextAuth from 'next-auth';
// import { authConfig } from '@/auth.config';

// const handler = NextAuth(authConfig);

// export { handler as GET, handler as POST };




import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';

const handler = NextAuth(authConfig);

export const GET = handler;
export const POST = handler;
