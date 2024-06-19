import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss'
// import Home from './pages/Home/Home.jsx';
import Home from './pages/HomeCopy/Home.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
