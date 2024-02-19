import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar, Bar } from "@/components";
import 'blazing-layout'

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XR",
  description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Bar />

        <div className="rbs">
          <Sidebar />
          {children}
        </div>


      </body>
    </html>
  );
}
