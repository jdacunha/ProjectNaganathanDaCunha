import './App.css';
import React, { Component } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, Route, Routes } from "react-router-dom";
//import Test from "./components/Test/test2";
import MatchList, {Test} from "./components/Matches/MatchList";
import Login from "./components/Login/Login";
import Rock from "./components/Game/Rock"
import Paper from "./components/Game/Paper"
import Scissors from "./components/Game/Scissors"
//import Test from "./components/Test/test2";



class App extends Component {
  

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
        <Link to="/"> <HomeIcon> </HomeIcon> <span> Home </span> </Link> 
          <Link to="/test"> <SettingsIcon></SettingsIcon> <span> Shifumi Test </span> </Link>
          <Link to="/matchs"> <ListIcon> </ListIcon> <span> Matchs </span> </Link>
          <Link to="/login" className='BoutonLogin'> <AccountCircleIcon> </AccountCircleIcon> <span> Login </span> </Link>
          <Link to="/jeu">Game Test</Link>
        </nav>
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<><Rock/><Paper/><Scissors/></>} />
          <Route path="/matchs" element={<><Test/><MatchList/></>} />
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}
}

function Home() {
  return(
    <div className='home'>
      <p>
        Ceci est la home mon bgs.
      </p>
    </div>
  );
}


export default App;