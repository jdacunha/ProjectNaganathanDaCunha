import './App.css';
import React, { Component } from 'react';
import "./images/ciseaux.png"
import "./images/feuille.png"
import "./images/pierre.png"
import { Link, Route, Routes } from "react-router-dom";
//import Test from "./components/Test/test2";
import MatchList from "./components/Matches/MatchList";
import Login from "./components/Login/Login";
import Shifumi from "./components/Game/Shifumi"
import Test from "./components/Test/test2";



class App extends Component {
  

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/test">Test</Link>
          <Link to="/test2">Test</Link>
          <Link to="/matchs">Matchs</Link>
          <Link to="/jeu">Game Test</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Shifumi />} />
          <Route path="/test2" element={<Test />} />
          <Route path="/matchs" element={<MatchList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
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