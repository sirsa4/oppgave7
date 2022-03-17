import {Outlet} from 'react-router-dom'
import { Main } from '../styled/Main';
const Layout = () => {
    return ( 
        <Main>
            <Outlet/>
        </Main>
     );
}
 
export default Layout;