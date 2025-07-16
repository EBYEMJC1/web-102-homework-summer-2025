import React from "react";
function SummaryStats({ data }) {
  const totalUsers = data.length;
  const companyCount = new Set(data.map((u) => u.company.name)).size;
  const avgNameLength =
    totalUsers > 0
      ? (data.reduce((acc, u) => acc + u.name.length, 0) / totalUsers).toFixed(2)
      : 0;

  return (
    <div className="summary-stats">
      <div className="stat-box">Total Users: {totalUsers}</div>
      <div className="stat-box">Unique Companies: {companyCount}</div>
      <div className="stat-box">Avg Name Length: {avgNameLength}</div>
    </div>
  );
}
export default SummaryStats;
