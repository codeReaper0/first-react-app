import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    return (
      <div className="p-10 space-y-6">
        <p>Showing 9 movies in the database</p>

        <table className="divide-y divide-gray-300 space-y-6 w-full text-left">
          <thead className="text-lg">
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </thead>

          <tbody>
            <td>Terminator</td>
            <td>Action</td>
            <td>6</td>
            <td>2.5</td>
            <td className="text-center">
              <button className="text-white bg-red-700 hover:bg-red-800 rounded-md px-6 py-2">
                Delete
              </button>
            </td>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
