import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Test from "./components/Test/test2";
import Game from "./components/Game/Game";
import MatchList, {AddMatch} from "./components/Matches/MatchList";
import Login from "./components/Login/login"; 
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/"> <HomeIcon> </HomeIcon> <span> Home </span> </Link> 
          <Link to="/test"> <SettingsIcon></SettingsIcon> <span> Test </span> </Link>
          <Link to="/matchs"> <ListIcon> </ListIcon> <span> Matchs </span> </Link>
          <Link to="/login" className='BoutonLogin'> <AccountCircleIcon> </AccountCircleIcon> <span> Login </span> </Link>
        </nav>
      </header>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/matchs" element={<><AddMatch/><MatchList/></>} />
          <Route path="/match/:id" element={<Game />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

function Home() {
  return(
    <div className='home'>
      <p>
        Ceci est la home mon bg.
      </p>
    </div>
  );
}

export default App;
