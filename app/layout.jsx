import "./globals.css";
import { Appwrapper } from "./Context";
import Message from "./_components/Message";
import { domain } from "./commondata";

export const metadata = {
  title: "Adorefurnix",
  description: "Discover the best furniture and home decor at Adorefurnix. Shop now for exclusive deals!",
  openGraph: {
    images: `${domain}/minlogo.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Appwrapper>
        <body className="antialiased">
          <Message />
          <div>{children}</div>
        </body>
      </Appwrapper>
    </html>
  );
}
