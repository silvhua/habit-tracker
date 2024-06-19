import React,{ useState, useEffect } from 'react'

import './App.css'

function App() {
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
   <>
  <header>
    {isLoggedIn ? (
      <h1>Hello {username}!</h1>
    ) : (
      <form onSubmit={handleLogin}>
        <label>Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br></br>
        <button type="submit">Login</button>
      </form>
    )}
  </header>
  {isLoggedIn && (
    <div>
      {/* enter form on water intake */}
      <form onSubmit={handleWaterSubmission}>
        <label>How many glasses of water did you take today? </label>
        <input type="number" value={waterConsumed} onChange={(e) => setWaterConsumed(e.target.value)} />
        <br />
        <label>Comments: </label>
        <input type="text" value={comments} onChange={(e) => setComments(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
      {showResult && <p>You have consumed {waterConsumed} glasses of water today.</p>}
    </div>
  )}
</>
    </>
  )
}

export default App
