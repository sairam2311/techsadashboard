import StackedBarChart from "./StackedBarChart";

const districts = [
  "Adilabad",
  "Hyderabad",
  "Karimnagar",
  "Warangal",
  "Nizamabad",
];

const seriesData = [
  { name: "Agriculture", data: [30, 40, 20, 50, 35] },
  { name: "Industry", data: [20, 30, 40, 25, 45] },
  { name: "Services", data: [50, 30, 40, 25, 20] },
];

function AgriTestStackedBar() {
  return (
    <div>
      <StackedBarChart
        title="District-wise Sector Distribution"
        categories={districts}
        series={seriesData}
      />
    </div>
  );
}

export default AgriTestStackedBar;
