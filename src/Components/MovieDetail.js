import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Default } from 'react-spinners-css';

const MovieDetail = ({ match }) => {
    const movieId = match.params.id;
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);

    const changeMovie = async () => {
        setLoading(true);
        const { data } = await axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=38fd4ade`);
        setMovie(data);
        setLoading(false);
    };

    useEffect(() => {
        changeMovie();
        //eslint-disable-next-line
    }, [match]);

    return (
        <>
            {movie &&
                (loading ? (
                    <Default />
                ) : (
                    <MovieDetailStyle>
                        <MoviePoster>
                            <img src={movie.Poster} alt={movie.Title} />
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                        </MoviePoster>
                        <MovieDetails>
                            <h1>Title</h1>
                            <p>{movie.Title}</p>
                            <h1>Director</h1>
                            <p>{movie.Director}</p>
                            <h1>Genre</h1>
                            <p>{movie.Genre}</p>
                            <h1>Plot</h1>
                            <p>{movie.Plot}</p>
                            <h1>Rating</h1>
                            <p>{movie.imdbRating}</p>
                        </MovieDetails>
                    </MovieDetailStyle>
                ))}
        </>
    );
};

const MovieDetailStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin: 3%;
`;

const MoviePoster = styled.div`
    text-align: center;
    img {
        width: 50%;
        object-fit: center;
        margin: auto;
    }
`;

const MovieDetails = styled.div`
    p {
        margin: 0rem 0 1.25rem 0;
    }
`;

export default MovieDetail;
