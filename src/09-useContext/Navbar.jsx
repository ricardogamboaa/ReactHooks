import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/' >MainApp</Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={ ( { isActive } ) => `nav-item nav-link ${ isActive ? 'active' : '' }`} to='/login'>Login</NavLink>
                        <NavLink className={ ( { isActive } ) => `nav-item nav-link ${ isActive ? 'active' : '' }`} to='/about'>About</NavLink>
                        <NavLink className={ ( { isActive } ) => `nav-item nav-link ${ isActive ? 'active' : '' }`} to='/testing'>Hook</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
