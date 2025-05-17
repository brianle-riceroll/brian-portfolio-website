
function Video() {
    // We will need to add our own video at some point lol
    return(
        <>
            <div class="player-div">
                <iframe class="player" src="https://www.youtube.com/embed/2h9CqRlHzrc?si=csMAbKTxjpVjS5DM" 
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
        </>
    )
}

export default Video