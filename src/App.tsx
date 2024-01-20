// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Appointment from './pages/Appointment';

function App() {
  return (
    <>
     <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
