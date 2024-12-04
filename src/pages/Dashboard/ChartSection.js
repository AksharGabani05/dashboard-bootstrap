import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample datasets for different timeframes
const datasets = {
  lastWeek: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [10, 20, 15, 25, 30, 35, 40],
  },
  lastMonth: {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
  },
  lastYear: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    data: [500, 600, 750, 800, 550, 400, 300, 450, 500, 600, 700, 800],
  },
};

// Default chart options
const options = {
  responsive: true,
  maintainAspectRatio: false, // Ensure the chart adapts to container size
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      type: "category",
    },
    y: {
      type: "linear",
    },
  },
};

const ChartSection = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("lastWeek");
  const [showDropdown, setShowDropdown] = useState(false); // Track dropdown visibility
  const currentDataset = datasets[selectedTimeframe];

  const chartData = {
    labels: currentDataset.labels,
    datasets: [
      {
        label: `Balance (${selectedTimeframe.replace(/last/, "Last ")})`,
        data: currentDataset.data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const timeframeOptions = [
    { label: "Last Week", value: "lastWeek" },
    { label: "Last Month", value: "lastMonth" },
    { label: "Last Year", value: "lastYear" },
  ];

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleTimeframeChange = (value) => {
    setSelectedTimeframe(value);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div className="chart-card shadow p-3">
      {/* Chart Heading */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
        <h5 className="chart-title mb-2 mb-md-0">Total Balance</h5>
        {/* Timeframe Filter */}
        <div className="dropdown">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={handleDropdownClick}
          >
            Month
          </button>
          {showDropdown && (
            <div className="dropdown-menu show position-absolute mt-2">
              {timeframeOptions.map((option) => (
                <button
                  key={option.value}
                  className={`dropdown-item ${
                    selectedTimeframe === option.value ? "active" : ""
                  }`}
                  onClick={() => handleTimeframeChange(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart Container */}
      <div className="chart-container" style={{ height: "280px", width: "100%" }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartSection;
