import portrait from './assets/portrait.jpg'
import psu_logo from './assets/psulogo_vert_spot.jpg'
import standard_logo from './assets/standard_logo.jpg'

function About() {
    return(
        <>
            <div className="about">
                <a href="https://www.linkedin.com/in/brian-le-ab78b0264/"
                    target='_blank' rel="noreferrer noopener">
                    <img src={portrait} alt="Portrait" height="400" className='portrait'></img>
                </a>
                <div className='about-text'>
                    <h1>Brian Le</h1>
                    <p className="about-me">
                        I am a CS student at Portland State University with a passion for developing
                        software and applications. I can be described as someone who is eager to learn
                        new concepts and create something fun and interesting out of it.
                    </p>
                </div>
            </div>

            <div className='education'>
                <div className="education-text">
                    <div>
                        <h1 style={{marginBottom: "0em"}}>Computer Science Major</h1>
                        <h4 style={{marginTop: "0em"}}>Sep. 2021 - Present</h4>
                    </div>
                    <p>
                        Studying at Portland State University
                    </p>
                </div>
                <a href="https://www.pdx.edu" target='_blank' rel="noreferrer noopener">
                    <img src={psu_logo} alt="psu logo" className='psu_logo' height="400"></img>
                </a>
            </div>

            <div className='work'>
                <div className='work-text'>
                    <div>
                        <h1 style={{marginBottom: "0em"}}>Software Development Engineer in Test</h1>
                        <h4 style={{marginTop: "0em"}}>Aug. 2024 - Present</h4>
                    </div>

                    <p>Interning as an SDET at The Standard</p>
                </div>

                <a href="https://www.standard.com" target='_blank' rel="noreferrer noopener">
                    <img src={standard_logo} alt="standard logo" className='standard_logo' height="300"></img>
                </a>

            </div>
        </>
    );
}

export default About