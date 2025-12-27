import MovieCard from './MovieCard';
import './StyleComponents/HotMoviesSection.css';

export default function HotMoviesSection({ movies }) {
    if (!movies || movies.length === 0) {
        return null; 
    }
    return (
        <section className="hot-movies-section">
            <h2 className="hot-section-title">Top Movies of the Week</h2>
            <div className="hot-movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}
