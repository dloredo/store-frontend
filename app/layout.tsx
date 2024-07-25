import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { CartProvider } from "../context/Cart";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {/* Encabezado */}
          <Header title="Mi primer tienda" />
          {/* Banner principal */}
          <Banner
            title="Descubre nuestras ofertas especiales"
            description="Grandes descuentos en una amplia selección de productos."
            buttonText="Ver ofertas"
            buttonLink="/"
          />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
