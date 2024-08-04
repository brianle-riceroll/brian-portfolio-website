/*
import { useRef } from 'react'
import Intro from './Intro.jsx'
import Header from './Header.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import Fun from './Fun.jsx'
import stc_app from './assets/stc_app.png'
import ftp_img from './assets/ftp_img.png'
import discord_bot from './assets/discordbot.gif'
import sss_img from './assets/sss_img.gif'
*/

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Privacy_Policy from "./pages/Privacy_Policy.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element ={<Home></Home>}></Route>
            <Route path="/home" element ={<Home></Home>}></Route>
            <Route path="/app_privacy_policy" element ={<Privacy_Policy></Privacy_Policy>}></Route>
            <Route path="*" element= {<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
