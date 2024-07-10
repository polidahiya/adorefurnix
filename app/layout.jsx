import "./globals.css";
import { Appwrapper } from "./Context";
import Message from "./_components/Message";

export const metadata = {
  title: "Adorefurnix",
  description: "Get solid wood furniture in Delhi and NCR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Appwrapper>
        <body className="antialiased ">
          <Message />
          <div>{children}</div>
        </body>
      </Appwrapper>
    </html>
  );
}
