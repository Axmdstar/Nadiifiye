import {Outlet} from 'react-router-dom';

const HomeLayout = () => {
    return ( 
        <>
            {/* <p>NavBar</p> */}
                <Outlet />
            {/* <p>Footer</p> */}
        </>
     );
}
 
export default HomeLayout;