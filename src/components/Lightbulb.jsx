import { useState } from "react";
export const Lightbulb = () => {
  // Initialize the state for on/off
  const [bulb, setBulb] = useState(false);

  const toggleLight = () => {
    // Toggle the on/off state
    setBulb(!bulb)

    console.log("Clicked");
   
  };
  return (
    <div className="lightbulb-container">
      <div className= {bulb ? "lightbulb on" : "lightbulb off"} onClick={toggleLight}>
        <div className="bulb">
        </div>
      </div>
    </div>
  );
};
