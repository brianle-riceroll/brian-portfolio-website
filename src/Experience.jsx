import standard_logo from './assets/standard_logo.jpg'
import pcc_logo from './assets/pcc-logo.png'
import multco_logo from './assets/multco-logo.jpg'

function Experience() {
    return(
        <>
            <div className='work-section'>

                <div className='work'>
                    <div className='work-text'>
                        <div>
                            <h1 style={{marginBottom: "0em"}}>QA Automations Engineer</h1>
                            <h4 style={{marginTop: "0em"}}>Jan. 2025</h4>
                        </div>

                        <p>Incoming intern at Multnomah County</p>
                    </div>

                    <a href="https://multco.us/" target='_blank' rel="noreferrer noopener">
                        <img src={multco_logo} alt="multnomah county logo" className='standard_logo' height="225"></img>
                    </a>
                </div>

                <div className='work'>
                    <div className='work-text'>
                        <div>
                            <h1 style={{marginBottom: "0em"}}>Software Development Engineer in Test</h1>
                            <h4 style={{marginTop: "0em"}}>Aug. 2024 - Dec. 2024</h4>
                        </div>

                        <p>Interned as an SDET at The Standard</p>
                    </div>

                    <a href="https://www.standard.com" target='_blank' rel="noreferrer noopener">
                        <img src={standard_logo} alt="standard logo" className='standard_logo' height="300"></img>
                    </a>
                </div>

                <div className='work'>
                    <div className='work-text'>
                        <div>
                            <h1 style={{marginBottom: "0em"}}>IT Assistant</h1>
                            <h4 style={{marginTop: "0em"}}>Jan. 2024 - Present</h4>
                        </div>

                        <p>Working as a casual IT Assistant at Portland Community College</p>
                    </div>

                    <a href="https://www.pcc.edu" target='_blank' rel="noreferrer noopener">
                        <img src={pcc_logo} alt="pcc logo" className='standard_logo' height="300"></img>
                    </a>
                </div>
            </div>

        </>
    );
}

export default Experience