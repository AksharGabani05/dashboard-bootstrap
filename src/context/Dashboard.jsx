import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StatsCards from "../pages/Dashboard/StatsCards";
import ChartSection from "../pages/Dashboard/ChartSection";
import ImportantNumbers from "../pages/Dashboard/ImportantNumbers";
import PendingMaintenances from "../pages/Dashboard/PendingMaintenances";
import ComplaintList from "../pages/Dashboard/ComplaintList";
import UpcomingActivity from "../pages/Dashboard/UpcomingActivity";

const Dashboard = () => (
    <div className="d-flex flex-column flex-md-row " style={{ paddingTop: "7%" }}>

    {/* Sidebar on the left side for larger screens */}
    {/* <Sidebar /> */}

    {/* Main content area */}
    <div className="flex-grow-1 p-3 bg-light">
      {/* <Topbar /> */}

      {/* Stats Cards Row - Full width */}
      <div className="container mt-4">
        {/* First Row: Stats Cards */}
        <div className="row">
          <div className="col-12">
            <StatsCards />
          </div>
        </div>

        {/* Second Row: Chart, Important Numbers, and Pending Maintenance */}
        <div className="row mt-4">
          {/* Chart Section */}
          <div className="col-12 col-lg-6 mb-4">
            <ChartSection />
          </div>

          {/* Important Numbers and Pending Maintenance */}
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <ImportantNumbers />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <PendingMaintenances />
              </div>
            </div>
          </div>
        </div>

        {/* Third Row: Complaint List and Upcoming Activities */}
        <div className="row mt-4">
  {/* First Box: ComplaintList (Large Width) */}
  <div className="col-12 col-lg-9 mb-4">
    <ComplaintList />
  </div>

  {/* Second Box: UpcomingActivity (Small Width) */}
  <div className="col-12 col-lg-3 mb-4">
    <UpcomingActivity />
  </div>
</div>

      </div>
    </div>
  </div>
);

export default Dashboard;
