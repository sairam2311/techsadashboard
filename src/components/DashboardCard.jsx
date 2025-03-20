import React from "react";

import "./DashboardCard.css";

const DashboardCard = ({
  title,
  subtitle,
  total,
  TotalTitle,
  first,
  FirstNumberTitle,
  second,
  SecondNumebrTitle,

  lastUpdated,
  link,
}) => {
  return (
    <div
      className="card custom-card mb-4 my-card position-relative text-center"
      // style={{
      //   //height: "100%",
      //   // background: "linear-gradient(to bottom, #f7fdeb, #ffffff)",
      //   // background: "linear-gradient(180deg,hsl(212, 75.20%, 57.30%), #f3f9af)",
      //   boxShadow: "0 4px 0px rgba(63, 107, 202, 1)",
      // }}
    >
      {/* <Card.Body> */}
      {/* Title & Icon */}
      {/* <img
        className="card-image img-fluid position-absolute"
        alt="PGRS"
        src="assets/images/home/pgrs.png"
        //   width="30"
        //   height="30"
      /> */}
      <div className="card-body text-left">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subtitle}</p>

        {/* Total Received */}
        <h2 className="card-number number1 text-center">{total}</h2>
        <p className="data-set text-center dataSet1">{TotalTitle}</p>

        <div className="row align-items-center">
          <div className="col-6 position-relative">
            <h4 className="small-number bottom-stats-number">{first}</h4>
            <p className="small-text bottom-stats-dataset">
              {FirstNumberTitle}
            </p>
          </div>

          <div className="col-6 position-relative">
            <div className="divider-vertical position-absolute"></div>
            <h4 className="small-number bottom-stats-number">{second}</h4>
            <p className="small-text bottom-stats-dataset">
              {SecondNumebrTitle}
            </p>
          </div>
        </div>
      </div>
      {/* Redressed & In Progress */}
      {/* <Row className="text-center">
        <Col>
          <h5 className="fw-bold">{redressed}</h5>
          <p className="text-muted small">Redressed</p>
        </Col>
        <Col className="border-start">
          <h5 className="fw-bold">{inProgress}</h5>
          <p className="text-muted small">In Progress</p>
        </Col>
      </Row> */}

      {/* Footer */}
      {/* <hr className="my-2" /> */}
      {/* <div className="card-footer d-flex justify-content-between">
        <small className="text-muted">Last Updated: {lastUpdated}</small>
        <a href={link} className="fw-bold text-dark text-decoration-none">
          View Dashboard
        </a>
      </div> */}
      {/* </Card.Body> */}

      <div className="card-footer border-0 text-muted hstack gap-2 justify-content-between">
        <p>Last Updated: {lastUpdated}</p>
        {/* <a className="btn float-end " href="/pgrs">
          View Dashboard
        </a> */}
        <button>View Dashboard</button>
      </div>
    </div>
  );
};

export default DashboardCard;
