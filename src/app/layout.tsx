"use client";

import { Sidebar, Bar } from "@/components";
import { FiArrowLeft } from "react-icons/fi";
import "./globals.css";

document.title = "Van Heusen";
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
