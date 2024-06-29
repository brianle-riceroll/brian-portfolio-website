import resume from './assets/LE_R.pdf'

function Intro() {
    return(
        <>
            <div className="intro-div">
                <div className="intro-text">
                    <h1 className="intro-greeting" style={{marginBottom: "5px"}}>Hi, I am</h1>
                    <h1 className="intro-name">Brian Le.</h1>
                </div>

                <div className="intro-buttons">
                    <a href={resume} target="_blank" rel="noreferrer noopener">
                        <button style={{fontSize: ".8em"}}>My Resume</button>
                    </a>

                    <a href="mailto:brianp.le@outlook.com" style={{color: "inherit"}} target="_blank" rel="noopener noreferrer">
                        <i className="fa-regular fa-envelope fa-2x" style={{marginRight: "0em"}}></i>
                    </a>

                    <a href="https://www.linkedin.com/in/brian-le-ab78b0264/" style={{color: "inherit"}} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin fa-2x" style={{marginRight: "0em"}}></i>
                    </a>

                    <a href="https://github.com/brianle-riceroll" style={{color: "inherit"}} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github fa-2x" style={{marginRight: "0em"}}></i>
                    </a>

                    <a href="https://gitlab.cecs.pdx.edu/bpl4" style={{color: "inherit"}} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-gitlab fa-2x" style={{marginRight: "0em"}}></i>
                    </a>
                </div>
                <div style={{marginBottom: "8em"}}>
                    <p className="see-more">See more about me below!</p>
                </div>
            </div>
        </>
    );
}

export default Intro