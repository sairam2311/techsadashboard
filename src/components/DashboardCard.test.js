import React from "react";
import { render, screen } from "@testing-library/react";
import DashboardCard from "./DashboardCard";
import "@testing-library/jest-dom";

describe("DashboardCard Component", () => {
  const mockProps = {
    title: "Test Dashboard",
    subtitle: "Test Subtitle",
    total: 100,
    redressed: 60,
    inProgress: 40,
    lastUpdated: "2025-03-18",
    link: "/test-dashboard",
  };

  test("renders the DashboardCard component correctly", () => {
    render(<DashboardCard {...mockProps} />);
    
    // Check if title is displayed
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    
    // Check if subtitle is displayed
    expect(screen.getByText(mockProps.subtitle)).toBeInTheDocument();
    
    // Check if total received value is displayed
    expect(screen.getByText(mockProps.total.toString())).toBeInTheDocument();
    
    // Check if redressed count is displayed
    expect(screen.getByText(mockProps.redressed.toString())).toBeInTheDocument();
    
    // Check if in-progress count is displayed
    expect(screen.getByText(mockProps.inProgress.toString())).toBeInTheDocument();
    
    // Check if last updated text is displayed
    expect(screen.getByText(`Last Updated: ${mockProps.lastUpdated}`)).toBeInTheDocument();
    
    // Check if the "View Dashboard" button has the correct href
    const dashboardLink = screen.getByRole("link", { name: /view dashboard/i });
    expect(dashboardLink).toHaveAttribute("href", "/pgrs"); // Static href in the component
  });

  test("renders default image", () => {
    render(<DashboardCard {...mockProps} />);
    
    // Check if image is rendered
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "assets/images/home/pgrs.png");
  });
});
