import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import styled from 'styled-components';
import Nav from '../Components/Nav';
import ReactPaginate from 'react-paginate';
import 'bootstrap/scss/bootstrap.scss';
import { Default } from 'react-spinners-css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [textInput, setTextInput] = useState('bat');
    const [loading, setLoading] = useState(false);

    const fetchMovies = async () => {
        setLoading(true);
        const { data } = await axios.get(
            `https://www.omdbapi.com/?s=${textInput}&apikey=38fd4ade&page=${currentPage}`
        );
        setMovies(data);
        setLoading(false);
    };
    useEffect(() => {
        fetchMovies();
        //eslint-disable-next-line
    }, [currentPage]);

    const setPage = ({ selected }) => {
        console.log(selected);
        setCurrentPage(selected === 0 ? 1 : selected + 1);
    };
    return (
        <>
            <Nav
                text={textInput}
                fun={setTextInput}
                fetchCall={fetchMovies}
                movies={movies.Search}
            />
            <HomeStyle>
                {loading ? (
                    <DefaultStyled />
                ) : movies.Search ? (
                    movies.Search.map((movie, id) => <Movie key={id} movie={movie} />)
                ) : (
                    <div style={{ textAlign: 'center' }}>No Results</div>
                )}
            </HomeStyle>
            <PaginateStyle>
                <ReactPaginate
                    pageCount={movies.totalResults ? Math.ceil(movies.totalResults) : 1}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={1}
                    onPageChange={setPage}
                    containerClassName="pagination"
                    activeClassName="active"
                    pageLinkClassName="page-link"
                    breakLinkClassName="page-link"
                    nextLinkClassName="page-link"
                    previousLinkClassName="page-link"
                    pageClassName="page-item"
                    breakClassName="page-item"
                    nextClassName="page-item"
                    previousClassName="page-item"
                    previousLabel={<>&laquo;</>}
                    nextLabel={<>&raquo;</>}
                />
            </PaginateStyle>
        </>
    );
};

const HomeStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    margin: 3%;
`;

const DefaultStyled = styled(Default)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const PaginateStyle = styled.div`
    margin: 0 50% 0 50%;
`;

export default Home;
