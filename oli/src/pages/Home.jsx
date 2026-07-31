import "./Home.css";
import { useState } from "react";
import SongCard from "../components/SongCard";
import { FaSearch } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    async function searchMusic() {
        if (!searchTerm.trim()) return;
        const response = await fetch(
            `https://itunes.apple.com/search?term=${encodeURIComponent(
                searchTerm
            )}&entity=song&limit=25`
        );
        const data = await response.json();

        setResults(data.results);
    }

    return (
        <main className="home">
            <h1>Oli - Music Library</h1>
            <div className="search-container">
                <input
                    type="text"
                    name=""
                    id=""
                    className="search-box"
                    placeholder="Search songs, artists or albums..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            searchMusic();
                        }
                    }}
                />
                <button className="search-button" onClick={searchMusic}>
                    <FaSearch />
                </button>
            </div>

            <section className="results">
                <h2>{searchTerm}</h2>
                {results.map((song) => (
                    <SongCard key={song.trackId} song={song} />
                ))}
            </section>
        </main>
    );
}

export default Home;
