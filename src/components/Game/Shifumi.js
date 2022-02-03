function Test() {


  function handleClick() {
    
    // Send data to the backend via POST
    fetch('http://fauques.freeboxos.fr:3000/matches', {  
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      method: 'DELETE', 
      mode: 'cors'
      
    })
    
  }

  return (
    <div onClick={handleClick} style={{
      textAlign: 'center',
      width: '100px',
      border: '1px solid gray',
      borderRadius: '5px'
    }}>
      Send data to backend
    </div>
  );

}

export default Test;