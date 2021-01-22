import React, { useState, useEffect } from 'react';
import MovielCards from '../Cards/MovieCards';

export default function Home() {

    const URL = `http://localhost:4000/movies`;

    const [movies, setMovies] = useState([]);

    const getArticel = async () => {
        const movieData = await fetch(`${URL}`)
            .then(response => response.json())
            .then(movies => {
                setMovies(movies)
                console.log("///////////////////////////", movies);
            })
            .catch(e => console.log(e));
        console.log("...............data........", movieData);
    }

    useEffect(() => {
        getArticel();
    }, []);

    return (
        <div>
            <MovielCards movies={movies} URL={URL} />
        </div >

    );
}
