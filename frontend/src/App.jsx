
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import LearnMoreDetails from './Pages/LearnMoreDetails'
import UserProfileLayout from './Pages/User/UserProfileLayout'
import NotificationTag from './Pages/User/NotificationTag'
import HowCanWeHelp from './Pages/User/HowCanWeHelp'
import TermsPrivacyPolicy from './Pages/User/TermsPrivacyPolicy'
import FilterPage from './Pages/Filter/FilterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:id" element={<LearnMoreDetails />}></Route>
          <Route path="/user-profile-layout" element={<UserProfileLayout />} />
          <Route path="/notification-tag" element={<NotificationTag />} />
          <Route path="/how-can-we-help" element={<HowCanWeHelp/>} />
          <Route path="/terms-privacy-policy" element={<TermsPrivacyPolicy/>} />
          <Route path="/filter" element={<FilterPage/>} />



        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App