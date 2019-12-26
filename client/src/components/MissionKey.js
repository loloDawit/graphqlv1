import React from "react";

export default function MissionKey() {
  return (
    <div className="my-3">
      <p>
        <span className="px-3 mr-3 bg-success"/>= Successful Mission
      </p>
      <p>
        <span className="px-3 mr-3 bg-danger"/>= Failed Mission
      </p>
    </div>
  );
}
