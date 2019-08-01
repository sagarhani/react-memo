import React from "react";

function Child({ duration }) {
  console.log("Render Child Component");
  return <p>Updates every {duration} second</p>;
}

export default React.memo(Child);
