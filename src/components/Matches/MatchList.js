import { useEffect, useState } from "react";

function MatchList() {
  const [matchs, setMatchs] = useState();
  useEffect(() => {
    fetch("http://fauques.freeboxos.fr:3000/matches", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setMatchs(data));
  }, []);
  return (
    <ul>
      {matchs === undefined && <span>Loading...</span>}
      {matchs?.length === 0 && <span>No data</span>}

       {matchs?.map((match) => 
        {        
          if(match.user2)
          return (       
             <li> {match.user1.username}<span> VS </span>{match.user2.username}  <span>ID:</span>  {match._id} </li> 
           )
          else
          {
            return match.user1.username + " VS ??? "
          }
      })}
    </ul>

  )

}

function Test() {


  function handleClick() {
    
    fetch('http://fauques.freeboxos.fr:3000/matches', {  
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      method: 'POST', 
      mode: 'cors'
      
    })
    window.location.href = '/matchs';
  }

  return (
    <button onClick={handleClick} style={{
      textAlign: 'center',
      width: '100px',
      border: '1px solid gray',
      borderRadius: '5px'
    }}>
      Create a game
    </button>
  );

}





export default MatchList  ;
export {Test};