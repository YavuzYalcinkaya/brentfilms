import "@/styles/reset.css";
import "@/styles/global.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html className={inter.className} lang="en">
      <body className="h-screen bg-black mx-auto">
        <AuthProvider>
          <Header className="w-full" />
          <main className="ml-5">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
