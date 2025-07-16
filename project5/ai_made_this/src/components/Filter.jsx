import React from "react";
function Filter({ data, filter, setFilter }) {
  const companies = Array.from(new Set(data.map((u) => u.company.name)));
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="filter-select"
    >
      <option value="All">All Companies</option>
      {companies.map((company) => (
        <option value={company} key={company}>
          {company}
        </option>
      ))}
    </select>
  );
}
export default Filter;
