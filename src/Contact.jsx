function Contact() {
    return(
        <>
            <div className="contact-div">
                <a href="mailto:brianp.le@outlook.com" style={{color: "inherit"}} target="_blank" rel="noopener noreferrer">
                    <i className="fa-regular fa-envelope fa-7x" style={{marginRight: "2em"}}></i>
                    <p style={{fontSize: "2em", marginLeft: "0.5em", marginRight: "0.5em"}}>Email</p>
                </a>

                <a href="https://www.linkedin.com/in/brian-le-ab78b0264/" style={{color: "inherit"}} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin fa-7x" style={{marginRight: "1.82em"}}></i>
                    <p style={{fontSize: "2em"}}>LinkedIn</p>
                </a>

                <a href="https://github.com/brianle-riceroll" style={{color: "inherit"}} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github fa-7x" style={{marginRight: "2em"}}></i>
                    <p style={{fontSize: "2em"}}>GitHub</p>
                </a>

                <a href="https://gitlab.cecs.pdx.edu/bpl4" style={{color: "inherit"}} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-gitlab fa-7x" style={{marginRight: "2em"}}></i>
                    <p style={{fontSize: "2em"}}>GitLab</p>
                </a>
            </div> 
        </>
    );
}

export default Contact