import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './components/MoviesList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MovieList/>} />
            <Route path="/add" element={<AddMovie/>} />
            <Route path="/movies/edit/:id" element={<AddMovie/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;