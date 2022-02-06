import './MatchList.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonMUI from '@mui/material/Button';

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
      <div className='ListContainer'>

            <ul className='ulMatchlist'>
            {matchs === undefined && <span>Loading...</span>}
            {matchs?.length === 0 && <span>No data</span>}
            {matchs?.map((match) => 
            {        
                if(match.user2)
                return ( 

                    <li className='liMatchlist'> {match.user1.username}<span> VS </span>{match.user2.username}  
                    <Link className='match-id' to={'/match/' + match._id }> Join match </Link>  </li>)
                else
                {
                    return match.user1.username + " VS ??? "
                }
            })}
            </ul>

      </div>

  )

}

function AddMatch() {

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
      <div className='ButtonContainer'> 

        <ButtonMUI variant="contained" onClick={handleClick} sx={{
        color: 'white',
        display: 'flex',
        fontSize: 14,
        }}>Create/Join  a game</ButtonMUI>

      </div>
    
    
  );
  
}

export {AddMatch};
export default MatchList;