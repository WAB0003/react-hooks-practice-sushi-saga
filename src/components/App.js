import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis/";

function App() {
const[currentSushiList,setCurrentSushiList] = useState([])
const[budget,setBudget]=useState(50)
const[eatenItemArray,setEaten]=useState([])


useEffect(()=>{
  fetch(API)
  .then(r=>r.json())
  .then(apiSushis=>setCurrentSushiList(apiSushis))
},[])



  return (
    <div className="app">
      <SushiContainer currentSushiList={currentSushiList} setEaten={setEaten} setBudget={setBudget} budget={budget} />
      <Table plates={eatenItemArray} budget={budget}/>
    </div>
  );
}

export default App;
