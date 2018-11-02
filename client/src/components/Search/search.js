// import React, { Component } from "react";
import React from "react";
import "./Search.css";

// Class Search extends React.component{everything}

function search() {
  return (
    <form>
      <h3>QuickSearch</h3>
      <input
        className="searchbar"
        required
        placeholder="This is the Searchbar"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default search;
