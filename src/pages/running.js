import React from "react";

// const mockData = [
//   { date: "2022-12-27", miles: 7.06, pace: "7:47" },
//   { date: "2022-12-21", miles: 7.1, pace: "7:11" },
// ];

const RunningPage = () => {
  return (
    <section className="container page-body">
      <svg width={400} height={300} style={{ border: "1px solid black" }}>
        <g className="miles">
          <rect width="380" height="2" y={260} x={10} />
          <text x="10" y="280" dy="0.35em">
            Miles
          </text>
        </g>
        <circle cx="100" cy="100" r="10" fill="red" />
      </svg>
    </section>
  );
};

export default RunningPage;
