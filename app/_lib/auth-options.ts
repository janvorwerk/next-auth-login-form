import { NextAuthOptions, User, getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        console.warn("Reading the database here...");
        const user: User = { id: "1", name: credentials?.username, email: "jsmith@example.com" };
        if (credentials?.password === "pass") {
          console.log("Authenticating", user.name);
          return Promise.resolve(user);
        } else {
          console.log("Wrong password for", user.name);
          return Promise.resolve(null);
        }
      },
    }),
  ],
  callbacks: {
    /** 'jwt' is called before the 'session' callback */
    async jwt({ token, user, account, profile }) {
      // console.debug("In 'jwt' callback", token, user, account, profile);
      return Promise.resolve(token);
    },
    async session({ session, token, user }) {
      if (!token) {
        console.warn("In 'session' callback w/o token", session, token, user);
        return Promise.resolve(session);
      }
      // console.debug("End of 'session' callback", session, token, user);
      return Promise.resolve(session);
    },
  },
};

export async function getSessionUser() {
  return (await getServerSession(authOptions))?.user;
}


export interface AppUser {
    name?: string | null
    email?: string | null
  }