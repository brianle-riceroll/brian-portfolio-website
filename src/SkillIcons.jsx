function SkillIcons(props) {
    if (props.type == 'big') {
        return(
            <div className="skill-icon-container">
                <div className='circle-container'>
                    <img className="skills-icons-big" src={props.src} alt={props.alt}></img>
                </div>
                <p>{props.name}</p>
            </div>
        );

    }

    else if (props.type == 'huge') {
        return(
            <div className="skill-icon-container">
                <div className='circle-container'>
                    <img className="skills-icons-huge" src={props.src} alt={props.alt}></img>
                </div>
                <p>{props.name}</p>
            </div>
        );

    }

    else {
        return(
            <div className="skill-icon-container">
                <div className='circle-container'>
                    <img className="skills-icons" src={props.src} alt={props.alt}></img>
                </div>
                <p>{props.name}</p>
            </div>
        );
    }
}

export default SkillIcons