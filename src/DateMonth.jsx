import React from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();
const month = monthNames[d.getMonth()];
const year = d.getFullYear();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var dayName = days[d.getDay()];
const day = d.getDate();
const DateMonth = () => {
  return (
    <div className="date ">
      <h2 className=" mb-1 mt-1 text-light">
        {dayName} , {day} {month} {year}
      </h2>
    </div>
  );
};

export default DateMonth;
