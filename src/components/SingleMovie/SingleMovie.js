import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SingleMovie(props) {
  const element = (
    <Link to={`/details/${props.movie.id}`}>
      {props.movie.name} - Year: {props.movie.year}
    </Link>
  );

  return element;
}

SingleMovie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.string
  })
};

export default SingleMovie;
