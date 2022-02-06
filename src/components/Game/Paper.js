function Paper() {

    function handleClick() {
     
     fetch('http://fauques.freeboxos.fr:3000/matches/61ffb6fde30ebceab98dd5e8/turns/3', {  
       headers: {
         Authorization: "Bearer " + localStorage.getItem("token"),
         'Content-Type': 'application/json'
       },
       method: 'POST', 
       body: JSON.stringify({
         "move": "paper"
       })
         
         
     })
   };
 
   return (
     <button onClick={handleClick} style={{
       textAlign: 'center',
       width: '100px',
       border: '1px solid gray',
       borderRadius: '5px'
     }}>
       Paper
     </button>
     
   );
 
 }
 
 
 
 
 export default Paper;