import "./globals.css";
import { Appwrapper } from "./Context";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Adorefurnix",
  description: "Get solid wood furniture in Delhi and NCR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Appwrapper>
        <body className="antialiased ">
          <div>{children}</div>
          {/* footer */}
          <Footer />
        </body>
      </Appwrapper>
    </html>
  );
}
