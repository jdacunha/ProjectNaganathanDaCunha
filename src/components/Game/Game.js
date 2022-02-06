import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import './Game.css';

function Match() {
    const [match,setMatch] = useState();
    const {id} =useParams();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch("http://fauques.freeboxos.fr:3000/matches/" + id, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => response.json())
          .then((data) => setMatch(data))
          .then(() => setLoading(false))
    }, [id]);

    
    function handleClick(move) {
        
        let turn = 0;
        if (match.turns[match.turns.length - 1]?.winner) {
          turn = match.turns.length + 1;
        }
        else {
          if(match.turns.length == 0) {
            turn = 1
          }
          else {
            turn = match.turns.length;
          }
          
        }
        
        fetch("http://fauques.freeboxos.fr:3000/matches/" + id + "/turns/" + turn, {  
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            'Content-Type': 'application/json'
          },
          method: 'POST', 
          body: JSON.stringify({ "move": move })
        })
        
    };

if(loading) {
    return <div> </div>
}
return (
<> 
  <div className="match-container">

    <div className="match-cont-id">  Match ID : {match._id} </div>

    <div> {match.user1.username} vs {match.user2.username} </div>

    <div> Turn : {match.turns.length}/3 </div>
    
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

  </div>
    
</>
)

}

export default Match;