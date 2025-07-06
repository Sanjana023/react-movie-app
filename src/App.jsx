import './css/App.css';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/Error';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import { NavBar } from './pages/NavBar';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
