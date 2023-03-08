import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import movieService from '../services/movie.service';

const MovieList = () => {

  const [movies, setMovies] = useState([]);

  const init = () => {
    movieService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setMovies(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    movieService.remove(id)
      .then(response => {
        console.log('employee deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>Favourite Movies List</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Your Fav Movie</Link>
        <table className="table table-bordered text-black table-hover text-center table-striped">
          <thead className="bg-success">
            <tr>
              <th>Title</th>
              <th>Actor</th>
              <th>Director</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.actor}</td>
                <td>{movie.director}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
                <td>
                  <Link className="btn btn-info" to={`/movies/edit/${movie.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(movie.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default MovieList;