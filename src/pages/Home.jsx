import { MovieCard } from '../components/MovieCard';

export function Home() {
  const movies = [
    {
      id: 1,
      title: 'Johnwick',
      release_date: '2020',
    },
    {
      id: 2,
      title: 'Alice in wonderland',
      release_date: '1999',
    },
    {
      id: 3,
      title: 'shinchan',
      release_date: '2025',
    },
    {
      id: 4,
      title: 'terminator',
      release_date: '2020',
    },
  ];

  const handleSearch = () => {};
  return (
    <div className="home">
      <form onsubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        ></input>
        <button type="submit" className="search-button">
          search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
