import img from './assets/8bit_me_transparent.png'
import React, {useState} from 'react';

function Easteregg() {
    const [count, setCount] = useState(0);

    const handleClick = () => { 
        setCount(count + 1);
    }

    if (count < 4) {
        return(
            <button style={{background: "none", border: "none", }} onClick={handleClick}>
                <img src={img} alt="8bit image" height="100" className="_8bit-img"></img>
            </button>
        );
    }

    else {
        return(
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style={{color: "inherit"}} >
                <button style={{background: "none", border: "none", }} onClick={handleClick}>
                    <img src={img} alt="8bit image" height="100" className="_8bit-img"></img>
                </button>
            </a>
        );
    }
}

export default Easteregg