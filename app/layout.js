import "./globals.css";
import {
  Background,
  Cursor,
  Footer,
  Navbar,
  Noise,
  ScrollTop,
} from "@/components";
import { open_sans } from "@/utils/fonts";
import Provider from "./provider";

export const metadata = {
  title: "Saksham Parag Agarwal",
  description:
    "Saksham Parag Agarwal, a 21-year-old product designer, intricately weaves inspiration from music and comics into his designs, reflecting a commitment to eco-consciousness and the right to repair in the design world.",
  keywords: ["Design", "Product Design", "Branding", "Packaging"],
  metadataBase: new URL("https://sakshamparag.com"),
  openGraph: {
    title: "Saksham Parag Agarwal",
    description: "Design portfolio",
    images: "/og-image.png",
    type: "website",
  },
  twitter: {
    title: "Saksham Parag Agarwal",
    description: "Design portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Noise />
        <Background />
        {/* <ScrollTop /> */}
        {typeof window === "undefined" ? <Cursor /> : ""}
        <Provider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
