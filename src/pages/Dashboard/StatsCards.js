import React from "react";

const StatsCards = () => (
  <div className="row g-4 mb-4">
    {[
      { title: "Total Balance", value: "₹ 2,22,520", icon: "💰", bg: "primary" },
      { title: "Total Income", value: "₹ 55,000", icon: "📈", bg: "success" },
      { title: "Total Expense", value: "₹ 20,550", icon: "💸", bg: "danger" },
      { title: "Total Unit", value: "20,550", icon: "🏠", bg: "warning" },
    ].map((card, index) => (
      <div className="col-12 col-sm-6 col-lg-3" key={index}>
        <div
          className={`card text-dark bg-white shadow-sm h-100`}
          style={{ borderRadius: "12px" }}
        >
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h6 className="card-title mb-2">{card.title}</h6>
              <p className="card-text fs-5 fw-bold mb-0">{card.value}</p>
            </div>
            <span className="fs-1">{card.icon}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default StatsCards;
