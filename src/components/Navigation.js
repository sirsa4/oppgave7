import { NavLink } from "react-router-dom";
import StyledNav from "../styled/StyledNav";

const Navigation = () => {
  return (
    <>
      <StyledNav>
        <ul>
          <li>
            <NavLink to="/">Movies</NavLink>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};

export default Navigation;
