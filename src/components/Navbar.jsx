import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link to="/home">Travel karo</Link> 
                <i className='bx bxs-bus'></i>
            </div>

            <div className="tickets">
                <Link to="/bus">Bus</Link>
                <Link to="/flight">Fligth</Link>
                <Link to="/active">Active</Link>
                <Link to="/profile">Profile</Link>
            </div>

            <div className="profile">
                <button>Logout</button>
            </div>
        </nav>
    );
}
export default Navbar;






