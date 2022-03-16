import {FaSearch} from 'react-icons/fa'
const Search = ({search, setSearch}) => {
    return ( 
        <>
        <h2>Search</h2>
        <form>
            <input type="text" placeholder="search movie here" id="search"/>
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