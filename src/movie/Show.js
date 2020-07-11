import React from "react";
import { Drawer, Button } from "antd";

function Show({ selected, hide }) {
  return (
    <div className="show">
      <div>
        <h2> {selected.Title} </h2>
        <p> {selected.Plot} </p>
        <img src={selected.Poster} />
        <div className="button">
          <Button onClick={hide}> close </Button>
        </div>
      </div>
    </div>
  );
}

export default Show;
