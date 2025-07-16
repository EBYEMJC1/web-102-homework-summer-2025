import React from "react";
function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search by name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
export default SearchBar;
