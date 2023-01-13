import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  function onSearchChange(event) {
    onSearchChange(event.target.value);
}

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={onSearchChange}
      />
   
    <select name="filter" onChange={onCategoryChange}>
      <option value="All">All</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Desert">Desert</option>
    </select>
    </div>
    );
}

export default Filter;
