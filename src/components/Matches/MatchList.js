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
      {matchs?.map((match) => (
        <li>{
          //match.user1.username + " VS " + match.user2.username
        match._id
        }
        </li> 
      ))}
      {matchs?.username === 0 && <span>No data</span>}
    </ul>
  );
}




export default MatchList  ;