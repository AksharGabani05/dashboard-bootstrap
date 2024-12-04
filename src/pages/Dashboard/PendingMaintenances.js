import React from "react";

const PendingMaintenances = () => {
  // Sample data for pending maintenance tasks
  const maintenances = [
    { id: 1, name: "Roger Lubin", amount: "₹5,000", status: "2 Month Pending" },
    { id: 2, name: "Martha Stewart", amount: "₹3,200", status: "1 Month Pending" },
    { id: 3, name: "John Doe", amount: "₹2,500", status: "3 Month Pending" },
    { id: 4, name: "Alice Smith", amount: "₹4,800", status: "1 Month Pending" },
    { id: 5, name: "Michael Johnson", amount: "₹3,000", status: "5 Month Pending" },
    { id: 6, name: "Sarah Connor", amount: "₹1,700", status: "6 Month Pending" },
    { id: 7, name: "David Wilson", amount: "₹4,500", status: "4 Month Pending" },
    { id: 8, name: "Olivia Brown", amount: "₹2,800", status: "1 Month Pending" },
    { id: 9, name: "James Anderson", amount: "₹6,000", status: "3 Month Pending" },
    { id: 10, name: "Sophia Lee", amount: "₹3,600", status: "2 Month Pending" },
  ];

  return (
    <div className="card border-0 mb-4 shadow">
      <div className="card-body p-1">
        <div className="d-flex justify-content-between align-items-center mb-3 pt-2">
          <h5 className="card-title mb-0 fw-bold" style={{ fontSize: "17px" }}>
            Pending Maintenances
          </h5>
          <button className="btn btn-link text-decoration-none text-primary">
            View All
          </button>
        </div>
        {/* Scrollable list */}
        <ul
          className="list-group list-group-flush"
          style={{ maxHeight: "280px", overflowY: "auto" }} // Added scrolling
        >
          {maintenances.map((maintenance) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center p-2 mb-2 border-bottom"
              key={maintenance.id}
              style={{ fontSize: "13px", height: "60px" }} // Smaller font size and height
            >
              <div className="d-flex align-items-center">
                <img
                  src={`https://tse2.mm.bing.net/th?id=OIP.Ck2Usj84bIh_SiI2QJ7b-QHaEp&pid=Api&P=0&h=180`}
                  alt={maintenance.name}
                  className="rounded-circle me-3"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
                <div>
                  <h6 className="mb-0" style={{ fontSize: "14px", fontWeight: "600" }}>
                    {maintenance.name}
                  </h6>
                  <small className="text-muted" style={{ fontSize: "11px" }}>
                    {maintenance.status}
                  </small>
                </div>
              </div>
              <span className="badge text-danger fs-6 px-3 py-1 rounded-pill">
                {maintenance.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PendingMaintenances;
