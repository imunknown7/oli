import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Artist.css";
import SongCard from "../components/SongCard";

function Artist() {
    const { artistName } = useParams();

    const [songs, setSongs] = useState([]);
    const [artistInfo, setArtistInfo] = useState(null);

    useEffect(() => {
        async function fetchArtistSongs() {
            const response = await fetch(
                `https://itunes.apple.com/search?term=${encodeURIComponent(
                    artistName
                )}&entity=song&limit=25`
            );

            const data = await response.json();

            setSongs(data.results);

            if (data.results.length > 0) {
                setArtistInfo(data.results[0]);
            }
        }

        fetchArtistSongs();
    }, [artistName]);

    const albums = [
        ...new Map(
            songs.map((song) => [
                song.collectionId,
                {
                    name: song.collectionName,
                    artwork: song.artworkUrl100,
                },
            ])
        ).values(),
    ];

    return (
        <main className="artist-page">
            {artistInfo && (
                <section
                    className="artist-cover"
                    style={{
                        backgroundImage: `url(${artistInfo.artworkUrl100})`,
                    }}
                >
                    <div className="artist-overlay">
                        <img
                            src={artistInfo.artworkUrl100}
                            alt={artistInfo.artistName}
                        />

                        <div>
                            <h1>{artistInfo.artistName}</h1>
                            <p>{songs.length} songs</p>
                        </div>
                    </div>
                </section>
            )}
            <h2>Albums</h2>
            <section className="albums">
                {albums.map((album) => (
                    <div className="album-card" key={album.name}>
                        <img
                            src={album.artwork.replace("100x100", "600x600")}
                            alt={album.name}
                        />

                        <h3>{album.name}</h3>
                    </div>
                ))}
            </section>

            <section className="songs">
                <h1>Songs</h1>
                {songs.map((song) => (
                    <SongCard key={song.trackId} song={song} compact />
                ))}
            </section>
        </main>
    );
}

export default Artist;
