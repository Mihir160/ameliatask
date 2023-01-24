import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Layout = ({ children }) => {
    return (
        <div>
           <Navbar></Navbar> 
           <main>{children}</main>
           <Footer></Footer>
        </div>
    );
};

export default Layout;