import MovieCard from './MovieCard';
import './StyleComponents/MovieGrid.css';

export default function MovieGrid({ movies = [], title = 'All Movies' }) {
    if (movies.length === 0) return null;
    return (
        <section className="movie-grid-section">
            <h2 className="section-title">{title}</h2>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}
