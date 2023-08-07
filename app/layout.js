import "@/styles/reset.css";
import "@/styles/global.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const Metadata = {
  title: "Brentfilms",
  description: "The best  movie site in the world!",
};

export default function RootLayout({ children }) {
  return (
    <html className={inter.className} lang="en">
      <body className="bg-gray-900">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
