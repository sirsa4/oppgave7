import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return ( 
        <>
        <nav>
            <ul><li><NavLink to='/'>Movies</NavLink></li></ul>
        </nav>
        </>
     );
}
 
export default Navigation;