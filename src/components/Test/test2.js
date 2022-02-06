import React, { useState, useEffect, useParams } from 'react';
import './test2.css';

function PierreFeuilleCiseaux() {

  function handleClick(move) {
    fetch('http://fauques.freeboxos.fr:3000/matches/61fcf971e30ebceab98d95ae/turns/1', {  
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        'Content-Type': 'application/json'
      },
      method: 'POST', 
      body: JSON.stringify({ "move": move })
    })
  };

  return (
    <>
    <button onClick={() => handleClick("rock")} style={{
      textAlign: 'center',
      width: '100px',
      border: '1px solid gray',
      borderRadius: '5px'
    }}>
      Rock
    </button>
    <button onClick={() => handleClick("paper")} style={{
      textAlign: 'center',
      width: '100px',
      border: '1px solid gray',
      borderRadius: '5px'
    }}>
      Paper
    </button>
    <button onClick={() => handleClick("scissors")} style={{
      textAlign: 'center',
      width: '100px',
      border: '1px solid gray',
      borderRadius: '5px'
    }}>
      Scissors
    </button>

    </>
    
  );
} 



export default PierreFeuilleCiseaux;
