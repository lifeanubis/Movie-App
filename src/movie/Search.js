import React from "react";
import { Input } from "antd";

function Search({ handleInput, search, selected }) {
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <div>
        <h1>Movies Search </h1>
      </div>
      <div>
        <Input
          className="search-box"
          type="text"
          placeholder="search movies"
          onChange={handleInput}
          onKeyPress={search}
        />
      </div>
    </div>
  );
}

export default Search;
