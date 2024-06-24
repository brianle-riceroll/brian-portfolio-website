import image from './assets/8bit_me_transparent.png'

function Header(prop) {
    return(
        <>
            <div className="header-div">
                <div className="name-img-div">
                    <img src={image} alt="8bit image" height="100" className="_8bit-img"></img>
                    <p className="title">{prop.name}</p>
                </div>

                <nav className="navbar">
                    <ul>
                        <li><a href="/brian-portfolio-website">About</a></li>
                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Projects</a></li>
                        <li><a href="mailto:bpl4@pdx.edu">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    ) 
}

export default Header