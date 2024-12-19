import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import LearnMoreDetails from './Pages/LearnMoreDetails'
import CommentSection from './Pages/QandASection/CommentSection'
import QuestionDetail from './Pages/QandASection/QuestionDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/learnmoredetails" element={<LearnMoreDetails />}></Route>
          <Route path="/commentsection" element={<CommentSection />}></Route>
          <Route path="/questiondetails" element={<QuestionDetail/>}></Route>
          



{/* 
          <Route path="/notification-tag" element={<NotificationTag />} />
          <Route path="/how-can-we-help" element={<HowCanWeHelp/>} />
          <Route path="/terms-privacy-policy" element={<TermsPrivacyPolicy/>} /> */}

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
