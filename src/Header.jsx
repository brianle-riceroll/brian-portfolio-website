import image from './assets/8bit_me_transparent.png'
import { useRef } from 'react'

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
                        <button style={{cursor: "pointer"}} onClick={() => {
                            prop.aboutRef.current.scrollIntoView({behavior: 'smooth'})
                        }}>About</button>

                        <button style={{cursor: "pointer"}} onClick={() => {
                            prop.projRef.current.scrollIntoView({behavior: 'smooth'})
                        }}>Projects</button>
                        
                        <button style={{cursor: "pointer"}} onClick={() => {
                            prop.contactRef.current.scrollIntoView({behavior: 'smooth'})
                        }}>Contact</button>
                    </ul>
                </nav>
            </div>
        </>
    ) 
}

export default Header