import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Movie = ({ movie }) => {
    return (
        <Link to={`/moviesdetails/${movie.imdbID}`}>
            <StyledGame>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </StyledGame>
        </Link>
    );
};

const StyledGame = styled.div`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Movie;
