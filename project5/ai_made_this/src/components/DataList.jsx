import React from "react";
function DataList({ data }) {
  if (data.length === 0)
    return <div className="no-results">No results found.</div>;
  return (
    <ul className="data-list">
      {data.map((user) => (
        <li key={user.id} className="data-item">
          <div>
            <strong>{user.name}</strong>
          </div>
          <div>Email: {user.email}</div>
          <div>Company: {user.company.name}</div>
        </li>
      ))}
    </ul>
  );
}
export default DataList;
