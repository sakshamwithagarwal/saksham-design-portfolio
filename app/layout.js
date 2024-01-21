import "./globals.css";
import { Background, Cursor, Footer, Navbar, Noise } from "@/components";
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
        <Provider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
