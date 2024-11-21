"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 40,
    absent: 24,
  },
  {
    name: "Tue ",
    present: 30,
    absent: 13,
  },
  {
    name: "Wed ",
    present: 20,
    absent: 98,
  },
  {
    name: "Thur ",
    present: 27,
    absent: 39,
  },
  {
    name: "Fri ",
    present: 90,
    absent: 48,
  },
];
function AttendanceChart() {
  return (
    <div className="p-4 bg-white rounded-xl w-full h-full ">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold  text-gray-800">Attendance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      {/* chart */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
          margin={{
            top: 5,
            right: 10,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            // color="#f5f5f5"
            stroke="#ddd"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            // activeBar={<Rectangle fill="pink" stroke="blue" />}
            legendType="circle"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#CFCEFF"
            // activeBar={<Rectangle fill="gold" stroke="purple" />}
            legendType="circle"
            // radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttendanceChart;
