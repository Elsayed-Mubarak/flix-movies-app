import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './MovieCards.css';

const MovieCards = ({ movies }) => {
    return (
        <div className="all-cards">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        movies.map(movie =>
                            <div key={Math.random(100)} >
                                <div className="col mb-4" >
                                    <Card.Img variant="top" src={`${movie.image}`} />
                                    <Card.Body>
                                        <Card.Title>{movie.name}</Card.Title>
                                        <Card.Text>
                                            {movie.storyline.length < 100 ? `${movie.storyline}` : `${movie.storyline.substring(0, 100)} . . .`}
                                        </Card.Text>
                                    </Card.Body>

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieCards;