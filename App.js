
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/movies/popular`);
            setMovies(response.data);
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Popular Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
