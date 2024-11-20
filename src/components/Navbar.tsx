import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* search bar */}
      <div className="hidden md:flex">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input type="text" placeholder="Search" className="px-2" />
      </div>

      {/* icons */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-white p-2 rounded-full cursor-pointer">
          <Image src="/message.png" alt="notification" width={20} height={20} />
        </div>
        <div className="flex relative items-center gap-2 bg-white p-2 rounded-full cursor-pointer ">
          <Image
            src="/announcement.png"
            alt="announcement"
            width={20}
            height={20}
          />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 text-white text-[10px] flex items-center justify-center rounded-full">
            1
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs leading-3 font-medium">Isaac Marfo</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="profile"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Navbar;
