import "./globals.css";
import { Background, Cursor, Navbar, Noise } from "@/components";
import { open_sans } from "@/utils/fonts";
import Provider from "./provider";

export const metadata = {
  title: "Saksham Parag Agarwal",
  description: "Design portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Noise />
        {typeof window === "undefined" ? <Cursor /> : ""}
        <Background />
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
