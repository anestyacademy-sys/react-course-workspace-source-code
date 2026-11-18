import { NavLink } from "react-router-dom";

function Header(){

    return(
        <nav className="bg-white shadow p-4 flex gap-4 sticky top-0 z-10" >

            <NavLink to="/" className="text-blue-700 font-bold px-4 py-2" >Home</NavLink>
            <NavLink to="/blog" className="text-blue-700 font-bold px-4 py-2" >Blog</NavLink>
            <NavLink to="/about" className="text-blue-700 font-bold px-4 py-2" >About</NavLink>

        </nav>
    )

}

export default Header;