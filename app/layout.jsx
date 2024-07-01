import "./globals.css";

export const metadata = {
  title: "Adorefurnix",
  description: "Get solid wood furniture in Delhi and NCR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
