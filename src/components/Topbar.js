import React, { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa"; // Importing the icons

const Topbar = () => {
  // State to manage notification dropdown visibility
  const [showNotifications, setShowNotifications] = useState(false);

  // Function to toggle the notification dropdown
  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications); // Toggle the notifications dropdown visibility
  };

  // Example notification data with profile images and timestamps
  const notifications = [
    {
      id: 1,
      message: "New complaint received from Evelyn Harper.",
      time: "2 hours ago",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      message: "Maintenance scheduled for tomorrow.",
      time: "4 hours ago",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      message: "Elevator malfunction reported by Samuel Green.",
      time: "1 day ago",
      image: "https://via.placeholder.com/40",
    },
  ];

  return (
    <div
      className="d-flex justify-content-between align-items-center p-3 bg-white shadow"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div className="d-flex align-items-center">
        <h1 className="fw-bold text-start text-danger m-0">
          Dash<span className="text-dark">Stack</span>
        </h1>
      </div>

      {/* Small Search bar */}
      <div className="input-group w-50 w-md-25">
        <span className="input-group-text bg-white border-end-0">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search"
          style={{ fontSize: "0.9rem" }}
        />
      </div>

      <div className="d-flex align-items-center">
        {/* Notification Icon */}
        <div className="position-relative me-3">
          <button
            className="btn btn-link p-0"
            onClick={handleNotificationClick}
          >
            <FaBell size={20} />
          </button>
          <div
            className="position-absolute top-0 end-0 translate-middle badge rounded-circle bg-danger"
            style={{
              padding: "0.2rem 0.5rem",
              fontSize: "0.75rem",
              border: "1px solid black",
            }}
          >
            {notifications.length} {/* Notification count */}
          </div>

          {/* Notification dropdown */}
          {showNotifications && (
            <div
              className="dropdown-menu show"
              style={{
                position: "absolute",
                top: "100%",
                right: "0",
                border: "1px solid #ddd",
                width: "300px",
                maxHeight: "250px",
                overflowY: "auto",
                zIndex: 1000,
              }}
            >
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="dropdown-item d-flex align-items-center"
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={notification.image}
                      alt="Profile"
                      className="rounded-circle me-2"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <div className="d-flex flex-column">
                      <span>{notification.message}</span>
                      <small className="text-muted">{notification.time}</small>
                    </div>
                  </div>
                ))
              ) : (
                <div className="dropdown-item" style={{ padding: "10px" }}>
                  No new notifications.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Profile Image and Name */}
        <div className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-circle me-2"
            style={{ width: "35px", height: "35px" }}
          />
          <span className="d-none d-md-inline">Moni Roy (Admin)</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
