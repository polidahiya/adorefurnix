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
    // AppleProvider({
    //   clientId: process.env.APPLE_CLIENT_ID,
    //   clientSecret: process.env.APPLE_PRIVATE_KEY,
    //   teamId: process.env.APPLE_TEAM_ID,
    //   keyId: process.env.APPLE_KEY_ID,
    // }),
  ],
  callbacks: {
    async signIn(data) {
      const existingUser = await userscollection.findOne({
        email: data?.profile?.email,
      });

      if (!existingUser)
        await userscollection.insertOne({
          username: data?.profile?.name || "",
          email: data?.profile?.email,
          phonenum: "",
          address: "",
        });

      cookies().set(
        "userdata",
        JSON.stringify({
          username: data?.profile?.name || "",
          email: data?.profile?.email,
          phonenum: existingUser ? existingUser?.phonenum : "",
          address: existingUser ? existingUser?.address : "",
        }),
        {
          maxAge: logintime[0],
        }
      );

      return true;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: logintime[0],
    updateAge: 24 * 60 * 60,
  },
  secret: process.env.jwt_secret,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
