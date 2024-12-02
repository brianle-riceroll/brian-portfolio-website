import standard_logo from './assets/standard_logo.jpg'

function Experience() {
    return(
        <>
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

export default Experience