import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Title from "./Title";


function Layout(){
    return(
        <div>
            <Title/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout