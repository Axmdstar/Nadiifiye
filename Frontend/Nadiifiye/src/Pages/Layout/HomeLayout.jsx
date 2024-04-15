import {Outlet} from 'react-router-dom';
import Header from "../../components/header";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import '../../../public/style.css'


const HomeLayout = () => {
    return ( 
        <>
        <Header />
            <Outlet />
            <Footer />
            <ScrollToTopButton></ScrollToTopButton>
        </>
     );
}
 
export default HomeLayout;