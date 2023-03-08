import React, { useState, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import movieService from "../services/movie.service";
import './AddMovie.css'

const AddMovie = () => {
    const[title, setTitle] = useState('');
    const[actor, setActor] = useState('');
    const[director, setDirector] = useState('');
    const[genre, setGenre] = useState('');
    const[year, setYear] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    const saveMovie = (e) => {
        e.preventDefault();
        
        const movie = {title, actor, director, genre, year, id};
        if (id) {
            //update
            movieService.update(movie)
                .then(response => {
                    console.log('Movie data updated successfully', response.data);
                    navigate.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            movieService.create(movie)
            .then(response => {
                console.log("movie added successfully", response.data);
                navigate.push("/");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            movieService.get(id)
                .then(movie => {
                    setTitle(movie.data.title);
                    setActor(movie.data.actor);
                    setDirector(movie.data.director);
                    setGenre(movie.data.genre);
                    setYear(movie.data.year);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Movie Details</h3>
            <hr/>
            <div class="col-sm-6">
            <div class="card">
            <form>
            <label for="title">Title :</label>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Title"
                    />

                </div>
                <label for="actor">Actor Name :</label>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="actor"
                        value={actor}
                        onChange={(e) => setActor(e.target.value)}
                        placeholder="Enter Actor"
                    />

                </div>
                <label for="director">Actor Director :</label>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="director"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                        placeholder="Enter Director"
                    />
                </div>
                <div >
                <label for="genre">Genre :</label>
                <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    placeholder="Enter Genre"
                />

            </div>
            <label for="year">Releases Year :</label>
            <div className="form-group">
            <input 
                type="text" 
                className="form-control col-4"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Enter Year"
            />

        </div>

                    <button onClick={(e) => saveMovie(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            </div>
            </div>
            <hr/>
            <Link to="/">Back 🔙</Link>
        </div>
    )
}

export default AddMovie;