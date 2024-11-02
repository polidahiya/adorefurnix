import Navbar from "../_components/Navbar/Navbar";
import { Cachedproducts } from "../_serveractions/Getcachedata";
import { cookies } from "next/headers";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Adorefurnix",
  description: "Get solid wood furniture in Delhi and NCR",
};

export default async function RootLayout({ children, params }) {
  const products = await Cachedproducts();
  const productsname = products?.map((item) => item.name);

  // cookies
  const token = cookies()?.get("next-auth.session-token")?.value;
  const userdata = cookies()?.get("userdata")?.value;

  return (
    <div>
      <Navbar
        params={params}
        productsname={productsname}
        token={token}
        userdata={userdata}
      />
      {children}
      <Footer/>
    </div>
  );
}
