import AttendanceChart from "@/components/ui/AttendanceChart";
import { ContainerThatAllowsFlexItemsToScrollHorizontally } from "@/components/ui/ScrollableContainers";
import CountChart from "@/components/ui/CountChart";
import EventCalendar from "@/components/ui/EventCalendar";
import Announcements from "@/components/ui/Announcements";
import FinanceChart from "@/components/ui/FinanceChart";
import UserCard from "@/components/ui/UserCard";
import React from "react";

function AdminPage() {
  return (
    <div className="p-4 flex  gap-4 flex-col md:flex-row ">
      {/* left side */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
        {/* USER CARDS  */}

        <ContainerThatAllowsFlexItemsToScrollHorizontally>
          <UserCard type="admin" />
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
        </ContainerThatAllowsFlexItemsToScrollHorizontally>

        {/* MIDDLE CHART  */}
        <div className="flex gap-4  flex-col md:flex-row ">
          {/* COUNTER CHART */}
          <div className="w-full lg:w-1/3 h-[450px] ">
            <CountChart />
          </div>

          {/* ATTENDANCE CHART  */}
          <div className="w-full lg:w-2/3 h-[450px] ">
            <AttendanceChart />
          </div>
        </div>

        {/* BOTTOM CHART */}
        <div className="w-full h-[500px] ">
          <FinanceChart />
        </div>
      </div>

      {/* right side */}
      <div className="w-full lg:w-1/3  flex flex-col gap-8  ">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}

export default AdminPage;
