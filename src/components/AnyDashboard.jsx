import React from "react";
import DashboardCard from "./DashboardCard";
import DashboardcardSingle from "./DashboardcardSingle";

const cardData = [
  {
    title: "Endowment Lands ",
    subtitle: "Endowment Department",
    total: "45,729 Acrs",
    TotalTitle: "Extent of Temple Land",
    first: "25381.28 Acrs",
    FirstNumberTitle: "Enjoyable Extent",
    second: "6575.39 Acrs",
    SecondNumebrTitle: "Encroachment Extent",
    lastUpdated: "Aug 2024",
  },
  {
    title: "Hospitals",
    subtitle: "Health Sector",
    total: "34,337",
    redressed: "18,011",
    inProgress: "14,400",
    lastUpdated: "Aug 2024",
  },
  {
    title: "Road Projects",
    subtitle: "Infrastructure",
    total: "25,000",
    redressed: "12,500",
    inProgress: "12,500",
    lastUpdated: "Aug 2024",
  },
  {
    title: "Sanitation",
    subtitle: "Public Welfare",
    total: "19,500",
    redressed: "10,200",
    inProgress: "9,300",
    lastUpdated: "Aug 2024",
  },
];

const AnyDashboard = () => {
  return (
    <section className="cards_section py-5">
      <div className="container-fluid px-4">
        <div className="row">
          {cardData.map((data, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <DashboardCard {...data} />
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <DashboardcardSingle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnyDashboard;
