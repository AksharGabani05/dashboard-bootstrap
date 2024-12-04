import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const UpcomingActivity = () => {
  // Sample Data
  const activities = [
    { event: "Society Meeting", time: "8:00 PM to 10:00 PM", date: "24-09-2024", category: "Meeting" },
    { event: "Holi Festival", time: "7:00 AM to 12:00 PM", date: "25-09-2024", category: "Festival" },
    { event: "Ganesh Chaturthi", time: "5:00 PM to 8:00 PM", date: "26-09-2024", category: "Festival" },
    { event: "Navratri Festival", time: "9:00 PM to 11:00 PM", date: "27-09-2024", category: "Festival" },
  ];

  return (
    <div className="card shadow mb-4" style={{ maxHeight: "337.6px", overflowY: "auto" }}>
      <div className="card-body p-3">
        <h5 className="card-title mb-3 d-flex justify-content-between align-items-center">
          Upcoming Activity
          <select className="form-select form-select-sm w-auto">
            <option value="Month">Month</option>
            <option value="Week">Week</option>
            <option value="Day">Day</option>
          </select>
        </h5>
        <ul className="list-group">
          {activities.map((activity, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center py-2"
              key={index}
            >
              <div className="d-flex align-items-start flex-column">
                <h6 className="mb-1 text-primary">{activity.event}</h6>
                <small className="text-muted">{activity.time}</small>
              </div>
              <div className="text-end">
                <small className="text-muted d-block">
                  <FaCalendarAlt className="me-1" />
                  {activity.date}
                </small>
                <span className="badge bg-success mt-2">{activity.category}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingActivity;
