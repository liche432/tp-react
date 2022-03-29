import React from "react"
import toto from './Movie.module.css'

const Movie = (props) => {
    const {myTitle, title} = props;
    const {myDescription, opening_crawl} = props;

    return <div className={toto.bodyMovie}>
        <h3>{myTitle}</h3>
        <p className={toto.descriptionMovie}>{myDescription}</p>
    </div>
    
}

export default Movie;