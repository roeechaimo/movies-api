import React, { Component } from "react";
import SingleMovie from "../../components/SingleMovie/SingleMovie";
import Loader from "../../components/shared/Loader/Loader";
import "./MoviesList.css";

const axios = require("axios");

class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      filteredMovies: [],
      isLoading: false
    };

    this.filterMovies = this.filterMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.setState({
      isLoading: true
    });

    axios({
      method: "get",
      url:
        "https://cors-anywhere.herokuapp.com/http://x-mode.co.il/exam/allMovies/allMovies.txt"
    })
      .then(response => {
        const { movies } = response.data;

        const sortedMoviesByYear = movies.sort((a, b) => {
          return a.year - b.year;
        });

        this.setState({
          movies: sortedMoviesByYear,
          filteredMovies: sortedMoviesByYear,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);

        this.setState({
          isLoading: false
        });
      });
  }

  filterMovies(e) {
    const { movies } = this.state;

    const filtered = movies.filter(movie =>
      movie.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    this.setState({
      filteredMovies: filtered
    });
  }

  render() {
    const isLoading = this.state.isLoading;

    return (
      <div>
        {isLoading && <Loader />}

        {!isLoading && (
          <input
            type="text"
            placeholder="Search for a movie"
            onChange={this.filterMovies}
          />
        )}

        <ul style={{ listStyleType: "none", textAlign: "left" }}>
          {this.state.filteredMovies.map(movie => (
            <li key={movie.id}>
              <SingleMovie movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesList;
