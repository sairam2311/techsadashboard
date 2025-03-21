import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StackedBarChart = ({ title, categories, series }) => {
  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: title || "Stacked Bar Chart",
    },
    xAxis: {
      categories: categories,
      title: {
        text: "Categories",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Values",
      },
      stackLabels: {
        enabled: true,
      },
    },
    legend: {
      align: "right",
      verticalAlign: "top",
      floating: true,
      backgroundColor: "#FFFFFF",
      borderWidth: 1,
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StackedBarChart;
