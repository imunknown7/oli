import "./Home.css";
import { useState } from "react";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    async function searchMusic() {
        const response = await fetch(
            `https://itunes.apple.com/search?term=${encodeURIComponent(
                searchTerm
            )}&limit=25`
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
                    placeholder="Search songs, artists or albums..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={searchMusic}>Search</button>
            </div>

            <section className="results">
                {results.map((song) => (
                    <div key={song.trackId}>
                        <h3>{song.trackName}</h3>
                        <p>{song.artistName}</p>
                    </div>
                ))}
                <h2>Results</h2>
                <p>Nothing here yet.</p>
                <p>{searchTerm}</p>
            </section>
        </main>
    );
}

export default Home;
