

// import type { NextAuthConfig } from 'next-auth';
// import Credentials from 'next-auth/providers/credentials';

// export const authConfig: NextAuthConfig = {
//   providers: [
//     Credentials({
//       credentials: {
//         email: {},
//         password: {},
//       },
//       async authorize(credentials) {
//         if (
//           credentials?.email === 'user@nextmail.com' &&
//           credentials?.password === '123456'
//         ) {
//           return {
//             id: '1',
//             email: 'user@nextmail.com',
//             name: 'User',
//           };
//         }
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/login',
//   },
// };









import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (
          credentials?.email === 'user@nextmail.com' &&
          credentials?.password === '123456'
        ) {
          return {
            id: '1',
            email: 'user@nextmail.com',
            name: 'User',
          };
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: '/login',
  },

  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');

      if (isDashboard) {
        return isLoggedIn;  
      }

      return true;
    },
  },
};
