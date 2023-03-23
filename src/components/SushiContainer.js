import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({currentSushiList, setEaten, setBudget, budget}) {
  //*Create a state for the sushi's index in the entire array of Sushis. This will be used to only show 4 at a time
  const[sushiIndex,setSushiIndex] = useState(0)
 
  //!display the 4 sushi's at a time
  const sushiDisplay = currentSushiList.slice(sushiIndex,sushiIndex+4).map((sushi)=>{
  return <Sushi key={sushi.id} sushi={sushi} setEaten={setEaten} setBudget={setBudget} budget={budget} />
  })

  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton setSushiIndex={setSushiIndex} />
    </div>
  );
}

export default SushiContainer;
