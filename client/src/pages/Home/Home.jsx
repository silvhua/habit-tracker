import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiInstance from '../../utils/apiRequest';

import './Home.scss';
import Wrangler from '../../components/Wrangler/Wrangler';

function Home() {

  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [historyArray, setHistoryArray] = useState(null);
  console.log(isLoggedIn);
  
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
    console.log('api request sent');
  }

  useEffect(() => {
    if (username) {
      getHistory(username);
    }
  }, [username]);

  if (historyArray) {
    console.log(`Navigating to dashboard for ${username}`);
  }

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
        <h1 className="question-header">Did you drink enough water today?</h1>
        <p className = "home-subheader">Let's Find Out! </p>
      </header>
      <div className="home-container">
        {historyArray ?
          <Wrangler
            username={username}
            historyArray={historyArray}
          />
          :
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
        }
      </div>
    </>
  )
}

export default Home
