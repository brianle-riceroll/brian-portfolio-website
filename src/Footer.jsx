import react_pic from './assets/react.svg'

function Footer() {
    return(
        <>
            <div className='footer-div'>
                <img src={react_pic} alt="react picture"></img>
                <p style={{fontSize: "1em"}}>This website was made by Brian with React!</p>
            </div>
        </>
    );
}

export default Footer