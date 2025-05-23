import { useRef } from 'react'
import Intro from '../Intro.jsx'
import Header from '../Header.jsx'
import About from '../About.jsx'
import Experience from '../Experience.jsx'
import Skills from '../Skills.jsx'
import Project from '../Project.jsx'
import Contact from '../Contact.jsx'
import Footer from '../Footer.jsx'
import Fun from '../Fun.jsx'
import stc_app from '../assets/stc_app.png'
import ftp_img from '../assets/ftp_img.png'
import discord_bot from '../assets/discordbot.gif'
import discord_ai from '../assets/discord_ai.gif'
import sss_img from '../assets/sss_img.gif'
import kioku from '../assets/kioku_banner.png'
import miko from '../assets/miko_banner_art.gif'

function Home() {
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projRef = useRef(null);
  const contactRef = useRef(null);
  const introRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <>
      <Header name="Brian Le" className="header"  
        aboutRef={aboutRef}
        projRef={projRef} 
        expRef={expRef}
        contactRef={contactRef} 
        introRef={introRef} 
        skillsRef={skillsRef}
        ></Header> 
      <div style={{marginBottom: "10em"}} ref={introRef}></div>
      <Intro></Intro>

      <h1 className="section-header" ref={aboutRef}>About</h1>
      <About></About>
      <div style={{marginBottom: "10em"}}></div>


      <h1 className="section-header" ref={expRef}>Experience</h1>
      <Experience></Experience>
      <div style={{marginBottom: "10em"}}></div>

      <h1 className='section-header' ref={skillsRef}>Skills</h1>
      <Skills></Skills>
      <div style={{marginBottom: "20em"}}></div>

      <h1 className="section-header" ref={projRef}>Projects</h1>

      <Project title="Miko: The Awesome Discord AI Chatbot" 
        description="This is Miko. Your witty, smart, and uniquely personable Discord AI Chatbot that interacts with users in both text and voice channels in Discord. Powered by a personally fine-tuned LlaMa 3-8B, Text-To-Speech, and Retrieval-based Voice Conversion model, all running locally. It also has the ability to play Minecraft!"
        img={miko} 
        date="Dec. 2024 - Present"></Project>

      <Project title="Kioku! The Online Flashcard" 
        description="Creating an online full-stack web app for users to create and manage flashcards for studying. Built using React with Bootstrap for the frontend, and Spring Boot with MongoDB for the backend. Hosted on Firebase and backend deployed on AWS."
        img={kioku} 
        date="Aug. 2024 - Nov. 2024"
        link='https://kiokucards.com'></Project>

      <Project title="Sales Tax Calculator App" 
        description="A simple Android app that accurately calculates your sales taxes, grabbing the most up-to-date sales tax rates from all US states and cities. Developed in Android Studio utilizing the Jetpack Compose framework."
        img={stc_app} 
        date="Feb. 2024 - June 2024"
        link='https://github.com/brianle-riceroll/Sales-Tax-Calculator'></Project>

      <Project title="FTP Program" 
        description="A basic Linux FTP program that allows the client to send and retrieve files to and from the server. Utilizing strong hashing algorithms and multi-threading
        to securely transfer multiple files in parallel."
        img={ftp_img} 
        date="March 2024 - May 2024" 
        link='https://gitlab.cecs.pdx.edu/bpl4/linux-ftp-bpl-4'></Project>

      <Project title="Slimes, Swords, and Shotgun Game" 
        description="Prototyped a 2D platformer game in Unity, playing as a slime armed with a sword and shotgun and blast your way each level."
        img={sss_img} 
        date="June 2023 - Sep. 2023"
        link='https://www.youtube.com/watch?v=2Ghoo2YYpDA'></Project>

      <Project title="Discord Bot" 
        description="A Discord bot with commands, user input and profanity detection, logging, and music-playing capabilities. Developed using the Discord.py and FFmpeg library."
        img={discord_bot} 
        date="Dec. 2019 - March 2020"
        link='https://github.com/brianle-riceroll/python-discord-bot'></Project>


      <div style={{marginBottom: "10em"}}></div>
      <h1 className="section-header" ref={contactRef}>Contact</h1>
      <Contact></Contact>
      <Footer></Footer>
      <Fun></Fun>

    </>
  );

}

export default Home