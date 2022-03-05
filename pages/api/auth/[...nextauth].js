import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { MongoClient } from "mongodb";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const client = await MongoClient.connect(
          process.env.NEXT_PUBLIC_MONGO_URI,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        );

        const usersCollection = client.db().collection("users");

        const user = await usersCollection.findOne({
          username: credentials.username,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();
        return { username: user.username };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
  secret: "dailyBlog",
  jwt: {
    secret: "dailyBlog",
    encryption: true,
  },
});
