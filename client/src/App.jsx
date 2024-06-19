import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss'
import Home from './pages/Home/Home.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route
          path="/dashboard/:username"
          element={<Dashboard />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
