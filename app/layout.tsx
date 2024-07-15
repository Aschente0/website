import type { Metadata } from "next";
import { Laila } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const laila = Laila({ subsets: ["latin"], display: "swap", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Carlos Lam",
  description: "Portfolio for Carlos Lam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-600 ${laila.className}`}>
        <NavBar />
        <div className="relative pb-8 tablet:pb-28 tablet:pt-28">
          <div  className="tablet:min-w-[1024px] tablet:w-[75vw] mx-auto tablet:px-8"> {/* content width 75% of page, minimum 1024px (desktop min width) */}
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
