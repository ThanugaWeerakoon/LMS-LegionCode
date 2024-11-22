import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import LearnMoreDetails from './Pages/LearnMoreDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:id" element={<LearnMoreDetails />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
