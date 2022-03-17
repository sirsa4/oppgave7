import { Link } from "react-router-dom";
import Search from "./Search";

const Movies = ({movies, search, setSearch}) => {
    
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
    {/*     <Search
        search={search}
        setSearch={setSearch}
        /> */}
        {movies?.length > 0? movies.map((film)=>{
            const {imdbID: id,Title, Year, Poster} = film;
            /* console.log(typeof id); */
            return <article key={id}>
                <img src={Poster} alt={Title} />
                <h2>{Title}</h2>
                <p>{Year}</p>
                <div>
                    <Link to={id}>Read More</Link>
                </div>
            </article>
        }) : null}
        </>
     );
}
 
export default Movies;