import Navbar from "@/components/Navbar";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ReduxProvider } from "@/components/ReduxProvider";

export const metadata = {
  title: "WhatBytes - Elevate Your Digital Presence",
  description:
    "Unleash the full potential of your business with WhatBytes’ cutting-edge web and app development. Transforming ideas into digital masterpieces, we’re your partners in navigating the tech landscape to success. Embark on a journey of innovation with us now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <ReduxProvider>
          <Navbar />
          <div className="lg:flex">
            <Sidebar />
            <main className="pl-16 lg:pl-0 w-full ">{children}</main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
