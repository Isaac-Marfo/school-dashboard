"use client";

import { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import { FlexItemsInCols } from "./ScrollableContainers";
import ChartCards from "./ChartCards";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// temp
const events = [
  {
    id: 1,
    title: "Sports at Mamtech College",
    time: "12:00 PM - 2:00 PM",
    description: "All the sports event will be held at mamtech",
  },
  {
    id: 2,
    title: "Science and Maths Quiz",
    time: "01:00 PM - 2:00 PM",
    description: "All the quiz event will be held at mamtech",
  },
  {
    id: 3,
    title: "Atlethics",
    time: "12:00 PM - 2:00 PM",
    description: "All the sports event will be held at mamtech",
  },
];

function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="w-full overflow-y-scroll no-scrollbar">
      <Calendar onChange={onChange} value={value} />
      <ChartCards title="Events" rightText="">
        <FlexItemsInCols>
          {events.map((event) => (
            <div
              key={event.id}
              className="p-5 rounded-md border-2 border-gray-100 odd:border-t-bimPurple even:border-t-bimSky border-t-4"
            >
              <div className="flex items-center flex-col sm:flex-row justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-gray-300 text-xs">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-500 text-sm">{event.description}</p>
            </div>
          ))}
        </FlexItemsInCols>
      </ChartCards>
    </div>
  );
}

export default EventCalendar;
