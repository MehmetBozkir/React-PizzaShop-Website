import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Pizza Shop",
  description: "Welcome to My Pizza Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  );
}
