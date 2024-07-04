import Navbar from "../_components/Navbar/Navbar";

export default function RootLayout({ children, params }) {
  return (
    <div>
      <Navbar params={params} />
      {children}
    </div>
  );
}
