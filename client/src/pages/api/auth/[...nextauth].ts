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
      //@ts-ignore
      async authorize(credentials: Record<'email' | 'password', string> | undefined) {
        let user: any;
        try {
          user = await axios.post(`${process.env.SERVER_URL_BASE}/user/authenticate`, {
            email: credentials?.email,
            password: credentials?.password,
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
    }),
  ],
  pages: {
    signIn: '/auth/signIn',
  },
};
export default NextAuth(authOptions);
