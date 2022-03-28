import React from "react"

const Movie = (props) => {
    const {myTitle, title} = props;

    return <div>
        <h1>Movies</h1>
        <p>{myTitle}</p>
    </div>;
}

export default Movie;