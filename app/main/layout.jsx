import Navbar from "../_components/Navbar/Navbar";
import { Cachedproducts } from "../_components/serveractions/Getcachedata";

export default async function RootLayout({ children, params }) {
  const products = await Cachedproducts();
  const productsname = products.map((item) => item.name);
  return (
    <div>
      <Navbar params={params} productsname={productsname} />
      {children}
    </div>
  );
}
