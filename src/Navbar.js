import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            
            <h1 className="invisible lg:visible ">Rick & Morty <span className="Wiki">Wiki</span></h1>
            <div className="links">
                <Link className="character" to="/character">Characters</Link>
                <Link to="/episode" >Episodes</Link>
                <Link to="/sites">Sites</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;