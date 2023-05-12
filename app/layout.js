import "./globals.css";
import "./reset.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html className={inter.className} lang="en">
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
