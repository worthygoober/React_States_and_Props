import { useState } from "react";
import styles from './MovieStyles.module.css';

const MoviesList = () => {
    const [movies, setMovies] = useState ([
        { id: 1, title: "Firefly", genre: "Sci-Fi", description: "Fly with a crew of intrepid space-cowboys across the 'verse! "},
        { id: 2, title: "Hot Fuzz", genre: "Comedy", description: "When over-acheiving cop, Nicholas Angel, is transfered to the country, does he really see conspiracy behind every corner or does he just miss the excitement of the city? "},
        { id: 3, title: "Interstellar", genre: "Sci-Fi", description: "Cooper, astronaut turned farmer on a dying Earth, embarks on humanities last ditch effort to find a new home among the stars! "},
        { id: 4, title: "The Other Guys", genre: "Comedy", description: "When the top cops in the precinct can't get the job done, it's up to the laughing stock of the break room, the Other Guys, to save the city! "},
        { id: 5, title: "The Last Starfighter", genre: "Sci-Fi", description: "This classic follows the adventures of an arcade nerd as he's recruited to put his skills at joystick to use defeating a galatic threat! "},
    ]);

    const [showGenre, setShowGenre] = useState("All");
    const [showDescription, setShowDescription] = useState({});

    const handleGenreToggle = () => {
        setShowGenre((prev) => (prev === "All" ? 'Sci-Fi' : 'All'));
    };

    const handleDescriptionToggle = (id) => {
        setShowDescription((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleRemoveMovie = (id) => {
        setMovies((prev) => prev.filter((movie) => movie.id !== id));
    };

    const filterMovies = () =>
        showGenre === "All" ? movies : movies.filter((movie) => movie.genre === showGenre);

    return (
        <div className="movie-list">
            <h1>Favorite Movies</h1>
            <ul>
                {filterMovies().map((movie) => (
                    <li key={movie.id}>
                        <span onClick={() => handleDescriptionToggle(movie.id)}>
                            {movie.title}
                        </span>
                        {showDescription[movie.id] && <p>{movie.description}</p>}
                        <button onClick={() => handleRemoveMovie(movie.id)}>Remove</button>
                    </li>
                ))}
            </ul>

            <div className="button-container">
                <button onClick={handleGenreToggle}>
                    {showGenre === "All" ? 'Show Sci-Fi Movies' : 'Show All Movies'}
                </button>
            </div>
        </div>
    );
};

export default MoviesList;