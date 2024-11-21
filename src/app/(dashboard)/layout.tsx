import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" h-screen  flex">
      {/* LEFT  */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%]   bg-slate-50 overflow-y-scroll no-scrollbar">
        <Link
          href="/"
          className="flex items-center   lg:justify-start gap-2 p-2 hover:bg-slate-100 text-gray-600"
        >
          <Image src={"/logo.png"} alt="logo" width={32} height={32} />
          <span className="font-bold hidden lg:block">School Name</span>
        </Link>
        <Menu />
      </div>

      {/* RIGHT  */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]   bg-slate-100">
        <Navbar />
        {children}
      </div>
    </div>

    // <div>
    //   <div className=" absolute bottom-0 w-full z-50 min-h-[40px] sm:hidden  bg-orange-500">
    //     <h1>bottom nav</h1>
    //   </div>
    //   <div className="grid grid-cols-12 h-screen">
    //     {/* LEFT  */}
    //     <div className=" hidden sm:col-span-2 sm:block  bg-slate-400">left</div>

    //     {/* RIGHT  */}
    //     <div className="col-span-12 sm:col-span-10   bg-slate-200">
    //       {children}
    //     </div>
    //   </div>
    // </div>
  );
}
