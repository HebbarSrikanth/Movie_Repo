import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

const Nav = ({ text, fun, fetchCall }) => {
    const inputHandler = (e) => {
        fun(e.target.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        fetchCall(text);
    };
    return (
        <StyledNav>
            <Logo>
                <img src={logo} alt="logo" />
                <h1>&nbsp;Movies</h1>
            </Logo>
            <form className="search">
                <input value={text} onChange={inputHandler} type="text" />
                <button onClick={submitSearch} type="submit">
                    Search
                </button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    padding: 3rem 5rem;
    text-align: center;
    background-color: black;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
    }
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        height: 3.2rem;
        width: 2rem;
    }
    h1 {
        color: white;
    }
`;

export default Nav;
