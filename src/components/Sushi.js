import React, { useState } from "react";

function Sushi({sushi, setEaten, setBudget,budget}) {
  const{name,img_url,price}=sushi
  
  //*Create a state variable to handle eaten or not
  const[isEaten,setIsEaten] = useState(false)
  

  const handleClick = () => {
    if (budget<price){
      return null
    }
    setIsEaten(!isEaten)
    setEaten((prevState)=>[...prevState,name])
    setBudget((prevState)=>prevState-price)
  }
  
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
