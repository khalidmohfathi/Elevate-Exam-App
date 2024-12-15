import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import gitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";

export const options: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = { ...token };
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    }),
    gitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRIT as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        const user = JSON.stringify({
          email: credentials?.userEmail,
          password: credentials?.userPassword,
        });
        const res = await fetch(
          "https://exam.elevateegy.com/api/v1/auth/signin",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: user,
          }
        );
        const data = await res.json();
        if (data.message != "success") {
          return null;
        } else {
          return data;
        }
      },
      credentials: {
        userEmail: {
          label: "user Email",
          placeholder: "Enter Your Name",
          type: "email",
        },
        userPassword: {
          label: "user Password",
          placeholder: "Enter Your password",
          type: "password",
        },
      },
    }),
  ],
};
const handler = NextAuth(options);
export { handler as GET, handler as POST };
