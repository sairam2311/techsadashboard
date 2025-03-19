import React from "react";
import DashboardCard from "./DashboardCard";

const cardData = [
  {
    title: "Schools",
    subtitle: "trte",
    total: "12000",
    redressed: "2000",
    inProgress: "10000",
    lastUpdated: "Aug 2024",
  },
  {
    title: "Hospital",
    subtitle: "12345",
    total: "34,337",
    redressed: "18,011",
    inProgress: "14,400",
    lastUpdated: "Aug 2024",
  },
  {
    title: "xyz",
    subtitle: "mnop",
    total: "34,337",
    redressed: "18,011",
    inProgress: "14,400",
    lastUpdated: "Aug 2024",
  },
  {
    title: "MNP",
    subtitle: "abc",
    total: "34,337",
    redressed: "18,011",
    inProgress: "14,400",
    lastUpdated: "Aug 2024",
  },
];

const AnyDashboard = () => {
  return (
    <section className="cards_section py-5">
      <div className="container-fluid px-5">
        <div className="row">
          {cardData.map((data, index) => (
            <div key={index} className="col-md-3 mb-4">
              <DashboardCard {...data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// const Dashboard = () => {
//   return (
//     <section className="cards_section py-5">
//       <div className="container-fluid px-5">
//         <div className="row">
//           <div className="col-md-3 ">
//             <DashboardCard
//               title="Schools"
//               subtitle="Real Time Governance System"
//               total="12000"
//               redressed="2000"
//               inProgress="10000"
//               lastUpdated="Aug 2024"
//             />
//           </div>

//           <div className="col-md-3 ">
//             <DashboardCard
//               title="Hospital"
//               subtitle="Real Time Governance System"
//               total="34,337"
//               redressed="18,011"
//               inProgress="14,400"
//               lastUpdated="Aug 2024"
//             />
//           </div>

//           <div className="col-md-3">
//             <DashboardCard
//               title="PGRS"
//               subtitle="Real Time Governance System"
//               total="34,337"
//               redressed="18,011"
//               inProgress="14,400"
//               lastUpdated="Aug 2024"
//             />
//           </div>

//           <div className="col-md-3 ">
//             <DashboardCard
//               title="PGRS"
//               subtitle="Real Time Governance System"
//               total="34,337"
//               redressed="18,011"
//               inProgress="14,400"
//               lastUpdated="Aug 2024"
//             />
//           </div>

//           <div className="col-md-3 ">
//             <DashboardCard
//               title="PGRS"
//               subtitle="Real Time Governance System"
//               total="34,337"
//               redressed="18,011"
//               inProgress="14,400"
//               lastUpdated="Aug 2024"
//             />
//           </div>

//           <div className="col-md-3">
//             <DashboardCard
//               title="PGRS"
//               subtitle="Real Time Governance System"
//               total="34,337"
//               redressed="18,011"
//               inProgress="14,400"
//               lastUpdated="Aug 2024"
//             />
//           </div>

//           <div className="col-md-3 ">
//             <DashboardCard
//               title="PGRS"
//               subtitle="Real Time Governance System"
//               total="34,337"
//               redressed="18,011"
//               inProgress="14,400"
//               lastUpdated="Aug 2024"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default AnyDashboard;
