import Navbar from "./Navbar";
export const metadata = {
  title: "Adorefurnix",
  description: "Get solid wood furniture in Delhi and NCR",
};

export default function RootLayout({ children, params }) {
  return (
    <>
      <Navbar params={params}/>
      <>{children}</>
    </>
  );
}
