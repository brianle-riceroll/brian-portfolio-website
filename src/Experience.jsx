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
                            <h1 style={{marginBottom: "0em"}}>Software Developer</h1>
                            <h4 style={{marginTop: "0em"}}>Jan. 2025</h4>
                        </div>

                        <p>Interning as a Software Developer at Multnomah County through PSU's PCEP program.</p>
                    </div>

                    <a href="https://multco.us/" target='_blank' rel="noreferrer noopener">
                        <img src={multco_logo} alt="multnomah county logo" className='mult_logo'></img>
                    </a>
                </div>

                <div className='work'>
                    <div className='work-text'>
                        <div>
                            <h1 style={{marginBottom: "0em"}}>Software Development Engineer in Test</h1>
                            <h4 style={{marginTop: "0em"}}>Aug. 2024 - Dec. 2024</h4>
                        </div>

                        <p>Developed and integrated data integrity checks for data curations code and maintained code for encryptions of PIIs in development environments
                            with Pyspark and Databricks. Developed and provisioned new APIs for product teams and for testing purposes in Azure.
                        </p>
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

                        <p>Working as a casual IT Assistant at Portland Community College. Responsible for maintaining and provisioning hundreds of computers 
                            campus-wide.
                        </p>
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