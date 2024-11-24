"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ChartCards from "./ChartCards";

const data = [
  {
    name: "Total",
    count: 106,

    fill: "white",
  },
  {
    name: "Girls",
    count: 53,

    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,

    fill: "#CFCEFF",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

function CountChart() {
  return (
    <ChartCards title="Students" rightText="">
      {/* header 
      <div className="flex items-center justify-between ">
        <h1 className="text-lg font-semibold  text-gray-800">Students</h1>
        <Image
          src="/moreDark.png"
          alt="more"
          width={20}
          height={20}
          className=""
        />
      </div> */}

      {/* chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="male"
          width={50}
          height={50}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* bottom  */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <div className="w-5 h-5 bg-bimYellow rounded-full" />
          <h1 className="font-bold text-sm ">1,234</h1>
          <h2 className="text-sm text-gray-500">Boys (55%)</h2>
        </div>
        <div>
          <div className="w-5 h-5 bg-bimPurple rounded-full" />
          <h1 className="font-bold text-sm ">1,234</h1>
          <h2 className="text-sm text-gray-500">Girls (55%)</h2>
        </div>
      </div>
    </ChartCards>
  );
}

export default CountChart;
