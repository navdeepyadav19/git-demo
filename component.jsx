function SongCard({ title, artist }) {
  return (
    <div className="song-card">
      <h2>{title}</h2>
      <p className="artist">{artist}</p>
    </div>
  );
}