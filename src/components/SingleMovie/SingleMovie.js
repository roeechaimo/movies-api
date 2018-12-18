import React from "react";
import { Link } from "react-router-dom";

function SingleMovie(props) {
  const element = (
    <Link to={`/details/${props.movie.id}`}>
      {props.movie.name} - Year: {props.movie.year}
    </Link>
  );

  return element;
}

export default SingleMovie;
