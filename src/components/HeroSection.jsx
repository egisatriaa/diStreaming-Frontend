import './StyleComponents/HeroSection.css';
import { VscTriangleRight } from 'react-icons/vsc';

export default function HeroSection({ movie }) {
    // Jika tidak ada film, tampilkan placeholder
    if (!movie) {
        return <div className="hero-placeholder">Loading featured movie...</div>;
    }

    // Ambil nama kategori pertama atau gabung semua jika lebih dari satu
    const genres = movie.categories?.map((category) => category.category_name).join(' . ') || '–';

    const backgroundImage = movie.poster_url?.trim() || '/placeholder.jpg';

    return (
        <section className="hero-section">
            {/* Background Image */}
            <div
                className="hero-background"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            {/* Overlay */}
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-title">{movie.title}</h1>
                    <p className="hero-genres">{genres}</p>
                    <p className="hero-description">{movie.description}</p>
                    <div className="hero-buttons">
                        <button className="btn-primary">
                            <VscTriangleRight /> Check Now
                        </button>
                        <button className="btn-secondary">+ My List</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
