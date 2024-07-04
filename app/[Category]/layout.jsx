import Navbar from "../_components/Navbar/Navbar";

export const metadata = {
  title: "Adorefurnix",
  description: "Get solid wood furniture in Delhi and NCR",
};

export default function RootLayout({ children, params }) {
  return (
    <div>
      <Navbar params={params}  />
      {children}
    </div>
  );
}
