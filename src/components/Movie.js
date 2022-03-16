import { Link, useParams } from "react-router-dom";

const Movie = ({ movie }) => {
  const { id } = useParams();
  const findMovie = movie.find((film) => film.id === parseInt(id));
  return (
    <>
      <article>
        <h1>Movie {findMovie.id}</h1>
        <p>{findMovie.title}</p>
        <Link to='/'>Go Back Home</Link>
      </article>
    </>
  );
};

export default Movie;
