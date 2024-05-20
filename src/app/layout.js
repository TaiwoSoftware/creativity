import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Information-science",
  description: "It is a project i'm trying to develop with my skill and creativity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='main'>
          <header className=" flex items-center justify-between bg-[#000c20] p-4">
            <Logo />
            <Navbar />
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
