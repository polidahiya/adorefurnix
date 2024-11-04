import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple";
import { logintime } from "@/app/commondata";
import { getcollection } from "@/app/Mongodb";
const { userscollection } = getcollection();
import { cookies } from "next/headers";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Facebook({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),
    // AppleProvider({
    //   clientId: process.env.APPLE_CLIENT_ID,
    //   clientSecret: process.env.APPLE_PRIVATE_KEY,
    //   teamId: process.env.APPLE_TEAM_ID,
    //   keyId: process.env.APPLE_KEY_ID,
    // }),
  ],
  callbacks: {
    async signIn({ profile, user }) {
      const mail = profile.email ? profile?.email : user?.email;
      const existingUser = await userscollection.findOne({
        email: mail,
      });

      if (!existingUser)
        await userscollection.insertOne({
          username: profile?.name || "",
          email: mail,
          phonenum: "",
          address: "",
        });

      cookies().set(
        "userdata",
        JSON.stringify({
          username: profile?.name || "",
          email: mail,
          phonenum: existingUser ? existingUser?.phonenum : "",
          address: existingUser ? existingUser?.address : "",
        }),
        {
          maxAge: logintime,
        }
      );

      return true;
    },
  },
  cookies: {
    sessionToken: {
      name: "token",
    },
  },
  session: {
    strategy: "jwt",
    maxAge: logintime,
  },
  secret: process.env.jwt_secret,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
