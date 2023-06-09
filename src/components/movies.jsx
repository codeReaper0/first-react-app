import React, {Component} from "react";
import "../assets/css/index.css";
import {getMovies} from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({movies});
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
  };

  render() {
    const {length: count} = this.state.movies;

    if (count === 0)
      return <p className="p-10">There are no movies in the database</p>;

    return (
      <div className="p-10 space-y-6">
        <p>Showing 9 movies in the database</p>

        <table className="divide-y divide-gray-300 w-full text-left">
          <thead className="text-lg">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>

          <tbody className="">
            {this.state.movies.map((movie) => (
              <tr className="" key={movie._id} height="60px">
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  {
                    <Like
                      liked={movie.liked}
                      onLikeToggle={() => this.handleLike(movie)}
                    />
                  }
                </td>
                <td className="">
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="text-white bg-red-700 hover:bg-red-800 rounded-md px-6 py-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
