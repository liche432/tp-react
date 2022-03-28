import React from "react"

const Movie = (props) => {
    const {myTitle, title} = props;
    const {myDescription, opening_crawl} = props;

    return <div>
        <h3>{myTitle}</h3>
        <p>{myDescription}</p>
    </div>;
}

export default Movie;