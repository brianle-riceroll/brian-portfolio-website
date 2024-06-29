import cpp from './assets/c++.svg'
import csharp from './assets/c-sharp-c.svg'
import c from './assets/c-original.svg'
import python from './assets/python.svg'
import kotlin from './assets/kotlin-original.svg'
import js from './assets/javascript-js.svg'
import ts from './assets/typescript-icon.svg'
import html from './assets/file-type-html.svg'
import css from './assets/file-type-css.svg'
import psql from './assets/postgresql.svg'
import react from './assets/react.svg'
import nodejs from './assets/file-type-node.svg'
import aws from './assets/aws.svg'
import firebase from './assets/file-type-firebase.svg'

// <h2 className="languages">Languages</h2>

function Skills() {
    return(<>
        <div className="skills-div">
            <div>
                <h2 className="languages">Languages</h2>
                <div className="skills-icons-div">
                    <div className='circle-container'>
                        <img className="skills-icons" src={cpp} alt="c++"></img>
                    </div>

                    <div className='circle-container'>
                        <img className='skills-icons' src={csharp} alt="cs"></img>
                    </div>

                    <div className='circle-container'>
                        <img className='skills-icons' src={c} alt="c"></img>
                    </div>


                    <div className='circle-container'>
                        <img className='skills-icons' src={python} alt="python"></img>
                    </div>

                    <div className='circle-container'>
                        <img className='skills-icons-big' src={kotlin} alt="kotlin"></img>
                    </div>

                    <div className='circle-container'>
                        <img className='skills-icons-big' src={js} alt="js"></img>
                    </div>

                    <div className='circle-container'>
                        <img className='skills-icons-big' src={ts} alt="ts"></img>
                    </div>

                    <div className='circle-container'>
                        <img className='skills-icons' src={html} alt="html"></img>
                    </div>

                    <div className='circle-container'>
                        <img className='skills-icons' src={css} alt="css"></img>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="languages">Technologies</h2>
                <div className="skills-icons-div">
                    <div className='circle-container'>
                        <img className='skills-icons' src={psql} alt="psql"></img>
                    </div>

                    <div className='circle-container'>
                        <img className='skills-icons' src={react} alt="react"></img>
                    </div>

                    <div className='circle-container'>
                        <img className='skills-icons-huge' src={aws} alt="aws"></img>
                    </div>

                    <div className='circle-container'>
                        <img className='skills-icons' src={nodejs} alt="nodejs"></img>
                    </div>

                    <div className='circle-container'>
                        <img className='skills-icons' src={firebase} alt="firebase"></img>
                    </div>

                </div>
            </div>

        </div>
    </>);
}

export default Skills