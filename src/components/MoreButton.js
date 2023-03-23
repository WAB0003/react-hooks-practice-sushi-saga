import React from "react";

function MoreButton({setSushiIndex}) {
  
  const handleMoreButton = () => {
    setSushiIndex((prevIndex)=>prevIndex+4)
  }


  return <button onClick={handleMoreButton}>More sushi!</button>;
}

export default MoreButton;
