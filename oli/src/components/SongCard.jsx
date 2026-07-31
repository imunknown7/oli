import { useFavorites } from "../context/FavoritesContext";
import "./SongCard.css";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function SongCard({ song }) {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const isFavorite = favorites.some((item) => item.trackId === song.trackId);

    return (
        <div className="song-card">
            <img src={song.artworkUrl100} alt={song.trackName} />

            <div className="song-info">
                <h3>{song.trackName}</h3>
                <p>{song.artistName}</p>
                <p>{song.collectionName}</p>
            </div>

            <button
                className="favorite-btn"
                onClick={() =>
                    isFavorite ? removeFavorite(song) : addFavorite(song)
                }
            >
                {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
        </div>
    );
}

export default SongCard;
