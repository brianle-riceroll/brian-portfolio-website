import portrait from './assets/portrait.jpg'
import psu_logo from './assets/psulogo_vert_spot.jpg'

function About() {
    return(
        <>
            <div className="about">
                <img src={portrait} alt="Portrait" height="400" className='portrait'></img>
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
                    <h1>Computer Science Major</h1>
                    <p>
                        Studying at Portland State University
                    </p>
                </div>
                <a href="https://www.pdx.edu" target='_blank' rel="noreferrer noopener">
                    <img src={psu_logo} alt="psu logo" className='psu_logo'></img>
                </a>
            </div>
        </>
    );
}

export default About