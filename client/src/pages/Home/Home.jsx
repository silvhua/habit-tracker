import React,{ useState, useEffect } from 'react'

import './Home.scss'
import Dashboard from '../Dashboard/Dashboard';

function Home() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); //so user only logins once 
  const [waterConsumed, setWaterConsumed] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [comments, setComments] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (username) {
      localStorage.setItem('username', username);
      setIsLoggedIn(true);
    } else{
      alert('Please enter a username')
    }
  };

  useEffect(() => {
    const storedWaterConsumed = localStorage.getItem('waterConsumed');
    if (storedWaterConsumed) {
      setWaterConsumed(parseInt(storedWaterConsumed, 1));
    }
  }, []);

  const handleWaterSubmission = (e) => {
    e.preventDefault();
    setShowResult(true);
    const waterConsumedToday = parseInt(waterConsumed, 1);

    localStorage.setItem('waterConsumed', waterConsumed);
    setWaterConsumed(0);
    setComments('');
  };

  return (
    <>
      <header>
        <form onSubmit={handleLogin}>
          <label>Username: </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br></br>
          <button type="submit">Login</button>
        </form>
      </header>
    </>
  )
}

export default Home
