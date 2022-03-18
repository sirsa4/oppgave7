import { FaSearch } from "react-icons/fa";
import StyledSearchSection from "../styled/StyledSearchSection";
const Search = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
    /* console.log(search); */
  };
  return (
    <>
      <StyledSearchSection>
        <h2>Search Movie</h2>
        <form>
          <input
            type="text"
            placeholder="search movie here"
            id="search"
            onChange={handleChange}
            value={search}
          />
          <label htmlFor="search">
            <button type="submit">
              <FaSearch aria-label="search" />
            </button>
          </label>
        </form>
      </StyledSearchSection>
    </>
  );
};

export default Search;
