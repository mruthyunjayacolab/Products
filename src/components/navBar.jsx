import { Link } from "react-router-dom";
import '../style/nav.css'


const NavBar1 = () => {



    return (
        <div class="navBar">
            <div class="Logo">  <a href="#"> Logo</a></div>
            <div class=" lis">
                <Link class="nav-link" to="/">Home</Link>


                <Link class="nav-link" to="/products">Products</Link>
                {/* <Link class="nav-link" to="/Products">Products</Link> */}


                <Link class="nav-link" to="/cart">Cart</Link>

            </div>
        </div>
    );
}

export default NavBar1;