import { responsiveFontSizes } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function CurrentMatch() {
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
        let turn = 1;
        if (localStorage.getItem("turn_id") == '4') {
            localStorage.setItem("turn_id", 1);
        }
        localStorage.getItem("turn_id") ? (turn = localStorage.getItem("turn_id")) : (localStorage.setItem("turn_id", 1));
        
        fetch("http://fauques.freeboxos.fr:3000/matches/" + id + "/turns/" + turn, {  
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            'Content-Type': 'application/json'
          },
          method: 'POST', 
          body: JSON.stringify({ "move": move })
        })
        .then( response => {
            if (response.status == 202) {
                let temp = Number(localStorage.getItem("turn_id"))
                localStorage.setItem("turn_id", temp + 1 )
                
            }
            throw response
        })
        
    };

if(loading) {
    return <div> </div>
}
return (
<> 
    <div>  {match._id} </div>
    <div> {match.user1.username} vs {match.user2.username} </div>

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
)

}


export default CurrentMatch;