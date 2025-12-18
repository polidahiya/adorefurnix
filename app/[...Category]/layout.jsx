import Navbar from "../_components/Navbar/Navbar";
import { Cachedproducts } from "../_serveractions/Getcachedata";
import { cookies } from "next/headers";
import Footer from "../_components/Footer";
import Googleads from "@/app/_components/_ads/Googleads";

export const metadata = {
  title: "Adorefurnix",
  description: "Get solid wood furniture in Delhi and NCR",
};

export default async function RootLayout({ children, params }) {
  const products = await Cachedproducts();
  const productsname = products?.map((item) => item.name);

  // cookies
  const token = cookies()?.get("token")?.value;
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
      <div className="mx-auto py-3">
        <Googleads type={2} />
      </div>
      <Footer />
    </div>
  );
}
