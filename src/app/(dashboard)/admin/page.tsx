import UserCard from "@/components/ui/UserCard";
import React from "react";

function AdminPage() {
  return (
    <div className="p-4 flex  gap-4 flex-col md:flex-row ">
      {/* left side */}
      <div className="w-full lg:w-2/3  ">
        {/* USER CARDS  */}
        <div className="flex gap-4 justify-between overflow-x-scroll no-scrollbar">
          <UserCard type="admin" />
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
        </div>
      </div>

      {/* right side */}
      <div className="w-full lg:w-1/3   bg-slate-900">1</div>
    </div>
  );
}

export default AdminPage;
