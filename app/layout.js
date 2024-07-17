import "./globals.css";
import {
  Background,
  Cursor,
  Navbar,
  Noise,
  ScrollTop,
} from "@/components";
import { open_sans } from "@/utils/fonts";
import Provider from "./provider";
import { getAge } from "@/lib/getAge";

export const metadata = {
  title: "Saksham Parag Agarwal",
  description: `Saksham Parag Agarwal, a ${getAge()}-year-old product designer, intricately weaves inspiration from music and comics into his designs, reflecting a commitment to eco-consciousness and the right to repair in the design world.`
    ,
  keywords: ["Design", "Product Design", "Branding", "Packaging"],
  metadataBase: new URL("https://sakshamparag.com"),
  openGraph: {
    title: "Saksham Parag Agarwal",
    description: `Saksham Parag Agarwal, a ${getAge()}-year-old product designer, intricately weaves inspiration from music and comics into his designs, reflecting a commitment to eco-consciousness and the right to repair in the design world.`,
    type: "website",
  },
  twitter: {
    title: "Saksham Parag Agarwal",
    description: `Saksham Parag Agarwal, a ${getAge()}-year-old product designer, intricately weaves inspiration from music and comics into his designs, reflecting a commitment to eco-consciousness and the right to repair in the design world.`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Noise />
        <Background />
        <ScrollTop />
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
