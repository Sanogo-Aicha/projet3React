import React from "react";
import Player from "./Player";
import Players from "./Players";
const PlayerListe=()=>{
   let liste=Players;
   return(
    <div>
        {
            liste.map((valeur)=>{
                return <Player joueur={valeur}/>
            })
        }
    </div>
   )
}
export default PlayerListe;