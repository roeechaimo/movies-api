import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/shared/Loader/Loader";

const axios = require("axios");

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      isLoading: false
    };

    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    this.setState({
      isLoading: true
    });

    const { id } = this.props.match.params;

    axios({
      method: "get",
      url: `https://cors-anywhere.herokuapp.com/http://x-mode.co.il/exam/descriptionMovies/${id}.txt`
    })
      .then(response => {
        const { data } = response;
        this.setState({
          movie: data,
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

  goBack() {}

  render() {
    const isLoading = this.state.isLoading;

    return (
      <div style={{ padding: "2vw", textAlign: "left" }}>
        {isLoading && <Loader />}

        {!isLoading && (
          <div
            style={{
              backgroundColor: "#343aed",
              padding: "0.5vw",
              borderRadius: "5px",
              width: "50px",
              textAlign: "center",
              boxShadow: "1px 1px 1px 1px slategrey"
            }}
            onClick={this.goBack}
          >
            <Link to={"/"} style={{ color: "#f7f7f9" }}>
              Back
            </Link>
          </div>
        )}

        <h4>{this.state.movie.name}</h4>

        <p>{this.state.movie.description}</p>

        {!isLoading && <img alt="Pic" src={this.state.movie.imageUrl} />}
      </div>
    );
  }
}

export default MovieDetails;
