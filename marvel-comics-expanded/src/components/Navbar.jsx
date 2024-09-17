//Task 1: Implement Navigation Links
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/browse-characters" activeClassName="active">Browse Characters</NavLink>
            <NavLink to="/comics" activeClassName="active">Comics</NavLink>
        </nav>
    );
};

export default Navbar;
