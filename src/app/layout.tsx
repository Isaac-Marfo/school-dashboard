import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BIM Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="w-full h-screen shadow bg-gray-500 grid grid-cols-12">
          <div className="col-span-2 hidden sm:block h-full" bg-gray-500>
            sidebar
          </div>
          <div className=" gird grid-cols-2 col-span-12 sm:col-span-10  bg-slate-100">
            <div className="sticky top-0 z-50 min-h-[40px]  bg-orange-500">
              header
            </div>
            <div className="bg-sky-500 h-full">{children}</div>
          </div>
        </div> */}

        {children}
      </body>
    </html>
  );
}
