import React from "react";
import "./DashboardcardSingle.css";

export default function DashboardcardSingle() {
  return (
    //   <div>DashboardcardSingle</div>

    <div className="card custom-card mb-4 position-relative schooleducation-card text-center">
      {/* 
<img  class="card-image img-fluid position-absolute" alt="School Education" src="assets/images/home/schooleducation.png" /> */}
      <div className="card-body text-left">
        <h5 className="card-title">School Education</h5>
        <p className="card-text">Ministry of Education</p>
        <h3 className="card-number number1 text-center">5,915,179</h3>
        <p className="data-set text-center dataSet1">Today Attendance</p>
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <h4 className="small-number bottom-stats-number">58,629</h4>
            <p className="small-text bottom-stats-dataset">Schools</p>
          </div>
        </div>
      </div>

      <div className="card-footer border-0 text-muted hstack gap-2 justify-content-between">
        <p>Last Updated: Aug 2024</p>

        <a
          target="_blank"
          rel="noopener noreferrer"
          class="btn float-end"
          href="https://vskdashboard.ap.gov.in"
        >
          View Dashboard
        </a>
      </div>
    </div>
  );
}
