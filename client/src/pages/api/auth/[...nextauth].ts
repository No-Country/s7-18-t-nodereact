import NextAuth, { RequestInternal } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      credentials: {
        email: {
          type: 'text',
        },
        password: {
          type: 'text',
        },
      },
      //@ts-ignore
      async authorize(credentials: any) {
        try {
          const nextAuthUrl = new URL(process.env.NEXTAUTH_URL || '');

          /* const user = await axios.post(`${process.env.SERVER_URL_BASE}/user/authenticate`, {
            email: credentials?.email,
            password: credentials?.password,
          }); */
          const user = { email: credentials?.email, password: credentials?.password };

          if (user) {
            return {
              user,
            };
          }
          return null;
        } catch (e) {
          return null;
        }
      },
    }),
    /* CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(data,req) {
        let user: any;
        try {
          console.log('entre');

          user = await axios.post(`${process.env.SERVER_URL_BASE}/user/authenticate`, {
            email: data?.email,
            password: data?.password,
          });
          console.log({ user });
        } catch (error) {
          console.log({ error });
        }

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }), */
  ],
  pages: {
    signIn: '/auth/signIn',
  },
};
export default NextAuth(authOptions);
