import React from "react";
import { Card } from "react-bootstrap";
const Player=({joueur})=>{
let {name,age,nationnalite,numero,club,image}=joueur
return(
  <div className="container">
    <Card>
        <img src={image} alt="" />
        <h1>{name}</h1>
        <h1>{age}ans</h1>
        <h2>CLUB:{club}</h2>
        <h3>Numero {numero}</h3>
        <h4>nationnalite {nationnalite}</h4>
    </Card>
       
  </div>
  
)
}
export default Player;