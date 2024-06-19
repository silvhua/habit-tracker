import React, { useState, useEffect } from 'react';
import apiInstance from '../../utils/apiRequest';

import './Home.scss'
// import Dashboard from '../Dashboard/Dashboard.jsx';

function Home() {
  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); //so user only logins once
  const [historyArray, setHistoryArray] = useState(null);
  
  const handleLogin = (e) => {
    e.preventDefault();
    const usernameValue = e.target.username.value;
    if (usernameValue) {
      setUsername(usernameValue);
      setIsLoggedIn(true);
    } else{
      alert('Please enter a username')
    }
  };

  const getHistory = async (username) => {
    const response = await apiInstance.getHistory(username);
    setHistoryArray(response);
    setIsLoggedIn(false);
    console.log('api request sent')
  }

  useEffect(() => {
    if (username) {
      getHistory(username);
      console.log(username);
    }
  }, [username]);

  if (historyArray) {
    console.log(historyArray);
  }

  // const handleWaterSubmission = (e) => {
  //   e.preventDefault();
  //   setShowResult(true);
  //   const waterConsumedToday = parseInt(waterConsumed, 1);

  //   localStorage.setItem('waterConsumed', waterConsumed);
  //   setWaterConsumed(0);
  //   setComments('');
  // };

  return (
    <>
      <header>
        <form onSubmit={handleLogin}>
          <label htmlFor="username-field">Username: </label>
          <input
            type="text"
            name="username"
            id="username-field"
            placeholder="Enter your username"
            defaultValue={localStorage.getItem('username') || 'Enter your username'}
          />
          <button type="submit">Login</button>
        </form>
      </header>
    </>
  )
}

export default Home
