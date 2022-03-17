import {FaSearch} from 'react-icons/fa'
const Search = ({search, setSearch}) => {
    const handleChange = (e)=>{
        setSearch(e.target.value)
        /* console.log(search); */
    }
    return ( 
        <>
        <h2>Search</h2>
        <form>
            <input type="text" placeholder="search movie here" id="search"
            onChange={handleChange}
            value={search}
            />
            <label htmlFor="search">
                <button type='submit'>
                <FaSearch aria-label='search' />
                </button>
            </label>
        </form>
        </>
     );
}
 
export default Search;