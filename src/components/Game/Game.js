import React, { useState } from "react";



function Testbutton() {
  function handleClick() {
    alert('Le bouton a été cliqué.');
  }

  
  
  return (
    <button onClick={handleClick} id="boutontest">
      Bouton Test
    </button>
  );
}



export default Testbutton;