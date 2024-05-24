import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hot Bites",
  description: "Polish deli in Wayne NJ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
        {children}
        </Layout>  
      </body>
    </html>
  );
}
