import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { fetchGuest } from '../lib/api';
import Loading from '../components/Loading';
import './MovieDetail.css';
import { VscTriangleRight } from 'react-icons/vsc';

export default function MovieDetail() {
    const { id } = useParams(); // ambil :id dari URL
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        fetchGuest(`/movies/${id}`)
            .then((data) => {
                if (!isMounted) return;
                setMovie(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching movie:', error);
                if (isMounted) {
                    setLoading(false);
                    navigate('/');
                }
            });

        return () => {
            isMounted = false;
        };
    }, [id, navigate]);

    if (loading) return <Loading />;

    if (!movie) {
        return <div>Movie not found.</div>;
    }

    const genres = movie.categories?.map((category) => category.category_name).join(', ') || '–';
    const displayRating = movie.rating_avg > 0 ? movie.rating_avg.toFixed(1) : '–';

    return (
        <>
            <Navbar />
            <main className="movie-detail">
                <div className="detail-poster">
                    <img src={movie.poster_url?.trim() || '/placeholder.jpg'} alt={movie.title} onError={(e) => (e.target.src = '/placeholder.jpg')} />
                </div>
                <div className="detail-info">
                    <h1 className="detail-title">{movie.title}</h1>
                    <div className="detail-meta">
                        <span>{movie.release_year}</span>
                        <span>{movie.duration_minutes} min</span>
                        <span>⭐ {displayRating}</span>
                    </div>
                    <p className="detail-genres">{genres}</p>
                    <p className="detail-description">{movie.description}</p>
                    <div className="detail-actions">
                        <button className="btn-play">
                            <VscTriangleRight /> Play Now
                        </button>
                        <button className="btn-list">+ Add to My List</button>
                    </div>
                </div>
            </main>
        </>
    );
}
