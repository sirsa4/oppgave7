import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Movie = ({ movie }) => {
  const { id } = useParams();
  console.log(id);

  console.log(movie);

  const findMovie = movie.find((film) => film.imdbID === id);

 /*  console.log(findMovie); */
  return (
    <>
      {/* <article>
        <h1>Movie {findMovie.id}</h1>
        <p>{findMovie.title}</p>
        <Link to='/'>Go Back Home</Link>
      </article> */}
       {movie?.map((film)=>{
            const {imdbID: idd,Title, Year, Poster} = film;
            if(idd === id ){
              return <article key={id}>
              <img src={Poster} alt={Title} />
              <h2>{Title}</h2>
              <p>{Year}</p>
              <div>
                  <Link to='/'>Go Back Home</Link>
              </div>
          </article>
            }
           
        })}
        
    </>
  );
};

export default Movie;
