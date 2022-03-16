import { Link } from "react-router-dom";

const Movies = ({movies, movie}) => {
    
    return ( 
        <>
        {/* <h1>Movies Page</h1>
        {movies.map((film)=>{
            const {id,title}=film;
            return <article key={id}>
                <p>{title}</p>
                <Link to={`${id}`}>Read More</Link>
            </article>
        })} */}
        {movie?.length > 0? movie.map((film)=>{
            const {imdbID: id,Title, Year, Poster} = film;
            return <article key={id}>
                <img src={Poster} alt={Title} />
                <h2>{Title}</h2>
                <p>{Year}</p>
            </article>
        }) : null}
        </>
     );
}
 
export default Movies;