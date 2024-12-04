import React from "react";
import { Space } from 'antd';

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./context/Dashboard";
// import StatsCards from "./components/StatsCards";
// import ChartSection from "./components/ChartSection";
// import ImportantNumbers from "./components/ImportantNumbers"; // Assuming this is another new component
// import ComplaintList from "./components/ComplaintList"; // Assuming this is another new component

// import UpcomingActivity from "./components/UpcomingActivity";
// import PendingMaintenances from "./components/PendingMaintenances";

const App = () => (
 <>
 <Topbar/>
 <Space>
  <Sidebar/>
  <Dashboard/>
 </Space>
 </>
);

export default App;
