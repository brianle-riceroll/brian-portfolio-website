import Header from './Header.jsx'
import About from './About.jsx'
import Project from './Project.jsx'
import stc_app from './assets/stc_app.png'
import ftp_img from './assets/ftp_img.png'
import discord_bot from './assets/discordbot.gif'
import sss_img from './assets/sss_img.gif'

function App() {
  return (
    <>
      <Header name="Brian Le" className="header"></Header> 
      <div style={{marginBottom: "10em"}}></div>
      <h1 className="section-header">About</h1>
      <About></About>
      <div style={{marginBottom: "10em"}}></div>
      <h1 className="section-header">Projects</h1>
      <Project title="Sales Tax Calculator App" 
        description="A simple Android app that accurately calculates your sales taxes, grabbing the most up-to-date sales tax rates from all US states and cities. Developed in Android Studio utilizing the Jetpack Compose framework."
        img={stc_app} 
        link='https://github.com/brianle-riceroll/Sales-Tax-Calculator'></Project>

      <Project title="FTP Program" 
        description="A basic Linux FTP program that allows the client to send and retrieve files to and from the server. Utilizing strong hashing algorithms and multi-threading
        to securely transfer multiple files in parallel."
        img={ftp_img} 
        link='https://gitlab.cecs.pdx.edu/bpl4/linux-ftp-bpl-4'></Project>

      <Project title="Slimes, Swords, and Shotgun Game" 
        description="Developing an exciting 2D platformer game in Unity. Play as a slime armed with a sword and shotgun and blast your way each level."
        img={sss_img} 
        link='https://www.youtube.com/watch?v=2Ghoo2YYpDA'></Project>

      <Project title="Discord Bot" 
        description="A Discord bot with commands, user input and profanity detection, logging, and music-playing capabilities. Developed using the Discord.py and FFmpeg library."
        img={discord_bot} 
        link='https://github.com/brianle-riceroll/python-discord-bot'></Project>

    </>
  );
}

export default App
