import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ImportantNumbers = () => {
  const contacts = [
    { name: "Hanna Donin", phone: "+91 99857 33657", work: "Plumber" },
    { name: "John Doe", phone: "+91 98765 43210", work: "Electrician" },
    { name: "Alice Smith", phone: "+91 91234 56789", work: "Carpenter" },
    { name: "Jane Roe", phone: "+91 99888 11223", work: "Painter" },
    { name: "Michael Brown", phone: "+91 99222 44556", work: "Mason" },
  ];

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3 d-flex justify-content-between align-items-center">
          Important Numbers
          <button className="btn btn-primary btn-sm">Add</button>
        </h5>
        {/* Scrollable list with fixed height */}
        <ul
          className="list-group list-group-flush custom-scroll"
          style={{
            maxHeight: "270px", // Set a fixed height
            overflowY: "auto",  // Enable vertical scrolling if the content overflows
          }}
        >
          {contacts.map((contact, index) => (
            <li
              className="list-group-item bg-light mb-3 rounded shadow-sm d-flex align-items-center p-3"
              key={index}
            >
              {/* Contact Details - 70% */}
              <div style={{ flex: "0 0 70%" }}>
                <h6 className="text-primary mb-1" style={{ fontSize: "15px" }}>
                  {contact.name}
                </h6>
                <p className="mb-1" style={{ fontSize: "12px" }}>
                  <strong>Phone:</strong> {contact.phone}
                </p>
                <p className="mb-0" style={{ fontSize: "12px" }}>
                  <strong>Work:</strong> {contact.work}
                </p>
              </div>
              {/* Buttons - 30% */}
              <div
                style={{ flex: "0 0 30%" }}
                className="d-flex justify-content-end gap-2"
              >
                <button
                  className="btn btn-sm btn-success"
                  style={{ fontSize: "0.875rem" }}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  style={{ fontSize: "0.875rem" }}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImportantNumbers;
