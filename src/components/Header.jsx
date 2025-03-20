import React from "react";
import "./header.css";
import Logo from "./Logo";
import logo1 from "./logol";
import SearchBar from "./SearchBar";
import Nav from "./Nav";

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      {/* <div className="d-flex align-items-center">
        <img
          src="/path-to-logo1.png"
          alt="Logo 1"
          className="logo me-2"
          height="40"
        />
      </div>

       Application Name & Caption 
      <div className="text-center flex-grow-1">
        <h3 className="m-0">Telangana Smart Dashboard</h3>
        <p className="small text-muted">Connecting Data, Driving Development</p>
      </div>

      {/* Right Logo 
      <div className="d-flex align-items-center">
        <img
          src="/path-to-logo2.png"
          alt="Logo 2"
          className="logo ms-2"
          height="40"
        />
      </div> */}

      {/* Left Section - Logo 1 */}
      {/* <div className="d-flex align-items-center">
        <img
          src="https://www.telangana.gov.in/wp-content/uploads/elementor/thumbs/Telangana-LOGO-q8vapnsrggqk8uafl5x9z4rntchzcznlqb5ngwqga0.png"
          alt="Logo 1"
          className="logo me-3"
          style={{ maxHeight: "70px", width: "auto", objectFit: "contain" }}
        />
      </div>

     
      <div className="text-center flex-grow-1">
        <h2 className="m-0 fw-bold text-primary">Telangana Smart Dashboard</h2>
        <p className="small text-muted fst-italic">
          Connecting Data, Driving Development
        </p>
      </div>

     
      <div className="d-flex align-items-center">
        <img
          src="/path-to-logo2.png"
          alt="Logo 2"
          className="logo me-3"
          height="50"
        />
      </div> */}

      {/* Left Section - Telangana Logo & Dashboard Name */}
      {/* Left Section - Telangana Logo & Dashboard Name */}
      {/* Left Section - Sidebar Toggle & Dashboard Name */}
      {/* <div className="d-flex align-items-center">
       
        <img
          src="https://www.telangana.gov.in/wp-content/uploads/elementor/thumbs/Telangana-LOGO-q8vapnsrggqk8uafl5x9z4rntchzcznlqb5ngwqga0.png"
          alt="Telangana Government Logo"
          className="logo me-2"
          style={{ maxHeight: "100px", width: "auto", objectFit: "contain" }}
        />
      </div> */}
      {/* Dashboard Title */}
      <div className="d-flex flex-column align-items-center text-center mx-auto">
        <h4 className="m-0 fw-bold text-dark smart-dashboard-title">
          Telangana Smart Dashboard
        </h4>
        <p className="small  smart-samll-caption">
          Connecting Data, Driving Development
        </p>
      </div>

      {/* Middle Section - CM's Name & Designation */}
      {/* <div className="text-center">
        <h5 className="m-0 fw-bold">Sri Anumula Revanth Reddy</h5>
        <p className="small text-muted">Hon'ble Chief Minister of Telangana</p>
      </div> */}

      {/* Right Section - Language Switcher & TGRAC Logo */}
      <div className="d-flex align-items-center ms-auto">
        {/* Language Switcher */}
        <div className="d-flex me-3">
          <button className="btn btn-sm btn-success me-1">Eng</button>
          <button className="btn btn-sm btn-light">తెలుగు</button>
        </div>

        {/* TGRAC Logo */}
        <img
          src="/path-to-tgrac-logo.png" // Replace with correct logo path
          alt="TGRAC Logo"
          className="logo"
          style={{ maxHeight: "50px", width: "auto", objectFit: "contain" }}
        />
      </div>

      {/* Navigation Component */}
      {/* <SearchBar /> */}
      <Nav />
    </header>
  );
}

export default Header;
