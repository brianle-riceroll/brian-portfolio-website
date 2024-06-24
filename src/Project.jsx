import PropTypes from 'prop-types'

function Project(props) {
    return(
        <>
            <div className="proj-div">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <img src={props.img} alt="picture" height="300px"></img>
                </a>
                <div className="proj-text">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    );
}

Project.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
}

Project.defaultProps = {
    title: "Project",
    description: "Description",
    link: '/'
}

export default Project