import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import DataList from "./DataList";
import SummaryStats from "./SummaryStats";

function Dashboard({ data, allData, search, setSearch, filter, setFilter }) {
  return (
    <div className="dashboard-container">
      <h1>User Data Dashboard</h1>
      <SummaryStats data={allData} />
      <div className="controls-row">
        <SearchBar search={search} setSearch={setSearch} />
        <Filter data={allData} filter={filter} setFilter={setFilter} />
      </div>
      <DataList data={data} />
    </div>
  );
}
export default Dashboard;
