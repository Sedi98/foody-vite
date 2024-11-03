import { Chart } from "react-google-charts";

export const data = [
  ["Reason", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.7,
  is3D: false,
  pieSliceText: "none",
  backgroundColor: "#27283c",
  borderRadius: 35,
  color: "white",



  
    
    titleTextStyle: {
      color: 'white', // x-axis title color
    },
    textStyle: {
      color: '#2196f3', // x-axis label text color
    },

    legend: {
      textStyle: {
        color: 'white', // Set the legend text color
      },
    },

  
    
    
    
 
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      className="w-full h-full -z-50"
      data={data}
      options={options}
    />
  );
}
