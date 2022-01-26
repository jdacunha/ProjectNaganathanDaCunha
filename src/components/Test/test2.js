import React, { useState } from "react";
import './test2.css';

function Testbutton() {
  function handleClick() {
    alert('Le lien a été cliqué.');
  }

  return (
    <button onClick={handleClick} id="boutontest">
      Bouton Test
    </button>
  );
}




export default Testbutton;
