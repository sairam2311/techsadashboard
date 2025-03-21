import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import PageTitle from "./PageTitle";
import AgriTestStackedBar from "./AgriTestStackedBar";

const schoolData = [
  { name: "Public", value: 500 },
  { name: "Private", value: 300 },
  { name: "Aided", value: 200 },
  { name: "Unrecognized", value: 100 },
];

const barChartOptions = {
  chart: { type: "column" },
  title: { text: "School Types" },
  xAxis: {
    categories: schoolData.map((d) => d.name),
    title: { text: "School Type" },
  },
  yAxis: { title: { text: "Number of Schools" } },
  series: [
    { name: "Schools", data: schoolData.map((d) => d.value), color: "#4F46E5" },
  ],
};

const pieChartOptions = {
  chart: { type: "pie" },
  title: { text: "Student Distribution" },
  series: [
    {
      name: "Students",
      data: schoolData.map((d, i) => ({
        name: d.name,
        y: d.value,
        color: ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"][i],
      })),
    },
  ],
};

export default function SchoolDashboard() {
  return (
    <div className="container-fluid p-6">
      <div className="row breadcrumbs py-2">
        <div className="col-md-12">
          <div className="breadcrumb_heading">
            <PageTitle page="School Dashboard" />
          </div>
        </div>
      </div>
      <div className="row breadcrumbs py-2 mr-2">
        <div className="row col-lg-12">
          {/* Bar Chart */}
          <div
            className="card col-lg shadow-lg  p-4"
            style={{ position: "relative", height: "200px" }}
          >
            <HighchartsReact
              highcharts={Highcharts}
              options={pieChartOptions}
            />
          </div>

          {/* Pie Chart */}
          <div
            className="card col-lg shadow-lg p-4"
            style={{ position: "relative", height: "200px" }}
          >
            <HighchartsReact
              highcharts={Highcharts}
              options={pieChartOptions}
            />
          </div>
          {/* Pie Chart */}
          <div
            className="card col-lg shadow-lg p-4"
            style={{ position: "relative", height: "200px" }}
          >
            <HighchartsReact
              highcharts={Highcharts}
              options={pieChartOptions}
            />
          </div>
          <div
            className="card col-lg shadow-lg p-4"
            style={{ position: "relative", height: "200px" }}
          >
            <HighchartsReact
              highcharts={Highcharts}
              options={pieChartOptions}
            />
          </div>
          <div
            className="card col-lg shadow-lg p-4"
            style={{ position: "relative", height: "200px" }}
          >
            <HighchartsReact
              highcharts={Highcharts}
              options={pieChartOptions}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-md-8">
          <div
            class="barGraph bg-white p-2"
            style={{ overflowX: "auto", whiteSpace: "nowrap" }}
          >
            <div
              className="p-element"
              style={{ position: "relative", height: "200px" }}
            >
              <AgriTestStackedBar />
            </div>
            {/* <p-chart  type="bar" height="330px" class="p-element"> 
                <div style="position: relative; height: 330px;">
                    <canvas role="img" style="height: 330px; box-sizing: border-box; display: block; width: 1235px;" width="1235" height="330"></canvas>
                    </div>
                    </p-chart> */}
          </div>
        </div>
      </div>
    </div>
  );
}
