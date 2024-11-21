import React from "react";

function AdminPage() {
  return (
    <div className="flex h-screen gap-4 flex-col md:flex-row overflow-scroll">
      {/* left side */}
      <div className="w-full lg:w-2/3   bg-slate-400"></div>

      {/* right side */}
      <div className="w-full lg:w-1/3   bg-slate-400"></div>
    </div>
  );
}

export default AdminPage;
