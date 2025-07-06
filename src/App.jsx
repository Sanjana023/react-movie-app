import './App.css';
import { MovieCard } from './components/MovieCard';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/Error';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './pages/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
