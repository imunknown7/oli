import SongCard from "../components/SongCard";
import { useFavorites } from "../context/FavoritesContext";
import "./Favorites.css";

function Favorites() {
    const { favorites } = useFavorites();

    return (
        <main className="favorites-page">
            <h1>Your Favorites</h1>

            {favorites.length === 0 ? (
                <p className="empty-message">No favorite songs yet.</p>
            ) : (
                <section className="results">
                    {favorites.map((song) => (
                        <SongCard key={song.trackId} song={song} />
                    ))}
                </section>
            )}
        </main>
    );
}

export default Favorites;
