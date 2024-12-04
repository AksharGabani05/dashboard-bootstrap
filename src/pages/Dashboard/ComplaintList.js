import React from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa"; // Importing the icons

const ComplaintList = () => (
  <div className="card shadow mb-4">
    <div className="card-body">
      <h5 className="card-title mb-1 text-start ps-2 fw-bold">Complaint List</h5> {/* Centered title */}
      <table className="table table-bordered text-center"> {/* Centered text in the table */}
        <thead>
          <tr>
            <th className="text-start">Complainant Name</th>
            <th className="text-start">Complaint Name</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th> {/* Added Action Column */}
          </tr>
        </thead>
        <tbody>
          {[
            { name: "Evelyn Harper", complaint: "Unethical Behavior", date: "01/02/2024", priority: "Medium", status: "Open" },
            { name: "Alan Harper", complaint: "Noisy Neighbors", date: "05/02/2024", priority: "High", status: "Pending" },
            { name: "John Doe", complaint: "Water Leakage", date: "12/02/2024", priority: "High", status: "Resolved" },
            { name: "Jane Smith", complaint: "Parking Issues", date: "15/02/2024", priority: "Low", status: "Open" },
            { name: "Samuel Green", complaint: "Elevator Malfunction", date: "20/02/2024", priority: "Medium", status: "Pending" },
          ].map((complaint, index) => (
            <tr key={index}>
              <td className="text-start">{complaint.name}</td>
              <td className="text-start">{complaint.complaint}</td>
              <td>{complaint.date}</td>
              <td>
                <span className={`badge bg-${complaint.priority === "High" ? "danger" : complaint.priority === "Medium" ? "warning" : "success"}`}>
                  {complaint.priority}
                </span>
              </td>
              <td>
                <span className={`badge bg-${complaint.status === "Open" ? "primary" : complaint.status === "Resolved" ? "success" : "warning"}`}>
                  {complaint.status}
                </span>
              </td>
              <td>
  <button className="btn btn-link me-2 p-0" style={{ color: '#007bff' }}>
    <FaEye /> {/* View (Eye) Icon */}
  </button>
  <button className="btn btn-link me-2 p-0" style={{ color: '#ffc107' }}>
    <FaEdit /> {/* Edit Icon */}
  </button>
  <button className="btn btn-link p-0" style={{ color: '#dc3545' }}>
    <FaTrashAlt /> {/* Delete Icon */}
  </button>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ComplaintList;
