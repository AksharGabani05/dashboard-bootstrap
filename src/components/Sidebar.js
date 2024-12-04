import React, { useState } from "react";
import { Link } from "react-router-dom";  // Importing Link from react-router-dom
import { FaHome, FaUser, FaDollarSign, FaClipboardList } from "react-icons/fa";


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-white pt-5 vh-100 d-flex flex-column ${
        isCollapsed ? "collapsed-sidebar" : ""
      }`}
      style={{ width: isCollapsed ? "70px" : "250px", transition: "width 0.3s" }}
    >
      {/* Sidebar Header */}
      <div className="p-3 d-flex justify-content-between align-items-center">
        {/* Your header content */}
      </div>

      {/* Sidebar Menu */}
      <ul className="list-unstyled flex-grow-1 px-3">
        {[ 
          { icon: <FaHome />, label: "Dashboard", to: "/" }, 
          { icon: <FaUser />, label: "Resident Management", to: "/resident-management" },
          { icon: <FaDollarSign />, label: "Financial Management", to: "/financial-management" },
          { icon: <FaClipboardList />, label: "Complaint Tracking", to: "/complaint-tracking" },
          { icon: <FaClipboardList />, label: "Security Management", to: "/security-management" },
          { icon: <FaClipboardList />, label: "Security Guard", to: "/security-guard" },
          { icon: <FaClipboardList />, label: "Announcements", to: "/announcements" },
        ].map((item, index) => (
          <li key={index} className="mb-3">
            <Link
              to={item.to}  // Using `Link` instead of `<a>`
              className="d-flex align-items-center text-dark text-decoration-none"
              style={{ whiteSpace: "nowrap" }}
            >
              <span className="fs-5">{item.icon}</span>
              {!isCollapsed && <span className="ms-2">{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <div className="p-3">
        <button
          className={`btn btn-danger w-100 ${isCollapsed ? "btn-sm" : ""}`}
        >
          {isCollapsed ? "🚪" : "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
