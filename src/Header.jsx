import image from './assets/8bit_me_transparent.png'
import slime from './assets/Player.png'
import { useRef } from 'react'

let count = 0;

function easterEgg() {
    if (count == 5) {
        image = slime;
    }

    else {
        count += 1;
    }

    console.log(count);
}

function Header(prop) {
    let img = image;

    return(
        <>
            <div className="header-div">
                <div className="name-img-div">
                    <button style={{background: "none", border: "none", }} onClick={() => {count == 5 ? img = slime : count += 1}}>
                        <img src={img} alt="8bit image" height="100" className="_8bit-img"></img>
                    </button>

                    <button className="home-button" style={{cursor: "pointer"}} onClick={() => {
                            prop.introRef.current.scrollIntoView({behavior: 'smooth', block: 'end'})
                    }}>{prop.name}</button>

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