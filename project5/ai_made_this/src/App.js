import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setData(users);
    }
    fetchData();
  }, []);

  // Filter by search and company
  const filtered = data.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || user.company.name === filter)
  );

  return (
    <Dashboard
      data={filtered}
      allData={data}
      search={search}
      setSearch={setSearch}
      filter={filter}
      setFilter={setFilter}
    />
  );
}

export default App;
