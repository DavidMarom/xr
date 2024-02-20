"use client";

import { Inter } from "next/font/google";
import { Sidebar, Bar } from "@/components";
import { FiArrowLeft } from "react-icons/fi";
import { getEvents } from "@/services/events";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

console.log('aaa')
getEvents().then(
  (res) => { console.log(res) }
);


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="wrapper">

        <Bar>
          <div className="rbc h100">
            <div className="rac w300px">
              <FiArrowLeft size="30px" />
              <h1>VAN HEUSEN</h1>
            </div>
          </div>
        </Bar>

        <div className="rbs">
          <Sidebar />
          {children}
        </div>


      </body>
    </html>
  );
}
