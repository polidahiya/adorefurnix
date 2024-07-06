import "./globals.css";
import { Appwrapper } from "./Context";

export const metadata = {
  title: "Adorefurnix",
  description: "Get solid wood furniture in Delhi and NCR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Appwrapper>
        <body className="antialiased ">{children}</body>
      </Appwrapper>
    </html>
  );
}
