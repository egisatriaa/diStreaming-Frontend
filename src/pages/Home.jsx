import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MovieGrid from '../components/MovieGrid';
import HotMoviesSection from '../components/HotMoviesSection';
import Loading from '../components/Loading';
import { fetchGuest } from '../lib/api';

export default function Home() {
    // State
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // Ambil 4 film pertama sebagai "Hot Movies", nanti ganti pake rating_class (inget ini namanya DERIVED DATA)
    const hotMovies = movies.slice(0, 4);
    const featuredMovie = movies[0];

    const getMoviesByCategory = (categoryId) => {
        return movies.filter((movie) => movie.categories && movie.categories.some((category) => category.id === categoryId));
    };

    const categorySections = categories.map((category) => {
        const categoryMovies = getMoviesByCategory(category.id);
        if (!categoryMovies.length) return null;

        return <MovieGrid key={category.id} movies={categoryMovies} title={category.category_name} />;
    });

    // buat fetching data movies dan categories
    useEffect(() => {
        const startTime = Date.now();

        Promise.all([fetchGuest('/movies'), fetchGuest('/categories')])
            .then(([fetchedMovies, fetchedCategories]) => {
                setMovies(fetchedMovies);
                setCategories(fetchedCategories);

                const elapsed = Date.now() - startTime;
                const minLoadingTime = 2000;

                // biar tidak overcomplicated
                setTimeout(() => {
                    setLoading(false);
                }, Math.max(minLoadingTime - elapsed, 0));
            })
            .catch((err) => {
                console.error('Error fetching ', err);
                setLoading(false);
            });
    }, []);

    if (loading) return <Loading />;

    return (
        <>
            <Navbar />
            <main>
                {/* propsnya movie, ngambil objek film, contohnya saya pakai film id 1 yaitu zootopia */}
                {featuredMovie && <HeroSection movie={featuredMovie} />}

                {/* Section "Hot Movies" ---- props movies untuk menampilkan array film1,film2,... */}
                <HotMoviesSection movies={hotMovies} />

                {/* Section kategori */}
                {categorySections}
            </main>
        </>
    );
}
