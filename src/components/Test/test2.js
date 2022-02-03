  
import React, { useState } from "react";

function handleDeleteItem() {

  fetch("http://localhost:3000/matches/61fab3f8e30ebceab98ce549",{
    method: "DELETE",
  }).then((response) => {
    if (response.status === 404) {
      alert("Match not found");
    } else {
      alert("Match deleted");
    }
  });
}

function Testbutton() {
  
  return (
    <button onClick={handleDeleteItem} id="boutontest">
      Bouton Test
    </button>
  );
}



export default Testbutton;