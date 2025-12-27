import { Link } from 'react-router-dom';
import './StyleComponents/MovieCard.css';
import { FaStar } from 'react-icons/fa';

export default function MovieCard({ movie }) {
    if (!movie) return null;

    // Ambil nama kategori pertama (nanti ubah biar dinamis)
    const categoryName = movie.categories?.[0]?.category_name || '–';

    // Format rating: jika 0, tampilkan –, jika ada, tampilkan 1 angka desimal
    const displayRating = movie.rating_avg > 0 ? movie.rating_avg.toFixed(1) : '–';

    const posterUrl = movie.poster_url?.trim() || '/placeholder.jpg';

    return (
        <Link to={`/movies/${movie.id}`} className="movie-card-link">
            <div className="movie-card">
                <div className="movie-poster-wrapper">
                    <img
                        src={posterUrl}
                        alt={movie.title}
                        className="movie-poster"
                        onError={(e) => {
                            e.target.src = '/placeholder.jpg'; // fallback jika gambar error
                        }}
                    />
                    <div className="movie-overlay">
                        <span className="movie-rating">
                            <FaStar /> {displayRating}
                        </span>
                    </div>
                </div>
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-category">{categoryName}</p>
            </div>
        </Link>
    );
}
