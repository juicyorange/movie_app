import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MovieCommon = styled.div`
    width: 45%;
    background-color: white;
    margin-bottom: 70px;
    display : flex;
    align-items : flex-start;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
        0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

    img {
        position: relative;
        top: -50px;
        max-width: 150px;
        width: 100%;
        margin-right: 30px;
        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
          0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    }
    `;

const MovieData = styled.div`
    grid-template-columns: minmax(150px, 1fr) 2fr;
    grid-gap: 20px;
    text-decoration: none;
    color: inherit
`;

const MovieTitle = styled.h3`
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
`;

const MovieYear = styled.h5`
    margin : 0;
    font-weight: 300;
`;

const MovieSummary = styled.p`
`;

const MovieGenres = styled.ul`
    margin-top: 5px;
    list-style: none;
    padding: 0;
    display : flex;

    li {
        margin-right : 10px;
        font-size : 14px;
    }
`;

function Movie({ id, year, title, summary, poster, genres}) {
    return (
        <MovieCommon>
            <img src={poster} alt={title} title={title} />
            <MovieData>
                <MovieTitle>{title}</MovieTitle>
                <MovieYear>{year}</MovieYear>
                <MovieGenres>{genres.map((genre, idx) => (
                    <li key={idx}>{genre}</li>))}
                </MovieGenres>
                <MovieSummary>{summary.slice(0,140)}...</MovieSummary>
            </MovieData>
        </MovieCommon>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;