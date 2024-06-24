import portrait from './assets/portrait.jpg'
import psu_logo from './assets/psu-logo.jpg'

function About() {
    return(
        <>
            <div className="about">
                <img src={portrait} alt="Portrait" height="400" className='portrait'></img>
                <div className='about-text'>
                    <h1>About Me</h1>
                    <p className="about-me">
                        I am a CS student at Portland State University with a passion for developing
                        software and applications. I can be described as someone who is eager to learn
                        new ideas and apply them to real-world development.
                    </p>
                </div>
            </div>

            <div className='education'>
                <img src={psu_logo} alt="psu logo" className='psu_logo'></img>

                <div className="education-text">
                    <h1>Computer Science Major</h1>
                    <p>
                        Studying at Portland State University.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About