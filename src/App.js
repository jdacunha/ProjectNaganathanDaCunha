import './App.css';
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Test from "./components/Test/test2";
import MatchList from "./components/Matches/test";
import Login from "./components/Login/Login"; 
import Game from "./components/Game/Game"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/test">Test</Link>
          <Link to="/matchs">Matchs</Link>
          <Link to="/jeu">Game Test</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/matchs" element={<MatchList />} />
          <Route path="/jeu" element={< Game />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
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