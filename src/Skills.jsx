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
import git from './assets/git.svg'
import springboot from './assets/spring.svg'
import java from './assets/java-original.svg'
import mongodb from './assets/mongodb-original-wordmark.svg'
import SkillsIcons from './SkillIcons.jsx'
import docker from './assets/docker.svg'
import bootstrap from './assets/bootstrap.svg'
import azure from './assets/azure.svg'
import fastapi from './assets/fastapi.svg'

// <h2 className="languages">Languages</h2>

function Skills() {
    return(<>
        <div className="skills-div">
            <div>
                <h2 className="languages">Languages</h2>
                <div className="skills-icons-div">
                    <SkillsIcons src={python} alt="python" name="⭐Python" type="default"></SkillsIcons>
                    <SkillsIcons src={cpp} alt="c++" name="C++" type="default"></SkillsIcons>
                    <SkillsIcons src={csharp} alt="c#" name="C#" type="default"></SkillsIcons>
                    <SkillsIcons src={c} alt="c" name="C" type="default"></SkillsIcons>
                    <SkillsIcons src={js} alt="js" name="JavaScript" type="big"></SkillsIcons>
                    <SkillsIcons src={html} alt="html" name="HTML" type="default"></SkillsIcons>
                    <SkillsIcons src={css} alt="css" name="CSS" type="default"></SkillsIcons>
                </div>
            </div>

            <div>
                <h2 className="languages">Technologies</h2>
                <div className="skills-icons-div">
                    <SkillsIcons src={azure} alt="azure" name="Azure" type="default"></SkillsIcons>
                    <SkillsIcons src={fastapi} alt="fastapi" name="FastAPI" type="default"></SkillsIcons>
                    <SkillsIcons src={react} alt="react" name="React" type="default"></SkillsIcons>
                    <SkillsIcons src={psql} alt="psql" name="PostgreSQL" type="default"></SkillsIcons>
                    <SkillsIcons src={mongodb} alt="mongodb" name="MongoDB" type="default"></SkillsIcons>
                    <SkillsIcons src={springboot} alt="springboot" name="Spring Boot" type="default"></SkillsIcons>
                    <SkillsIcons src={firebase} alt="firebase" name="Firebase" type="default"></SkillsIcons>
                    <SkillsIcons src={git} alt="git" name="Git" type="default"></SkillsIcons>
                </div>
            </div>

        </div>
    </>);
}

export default Skills