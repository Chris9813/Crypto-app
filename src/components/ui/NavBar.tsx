
import { memo } from 'react';
import { Link, NavLink } from 'react-router-dom'

export const Navbar = memo(() => {
    console.log("holi");
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/coins"
            >
                Crypto
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/coins"
                    >
                        Coins
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/exchanges"
                    >
                        Exchanges
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                </ul>
            </div>
        </nav>
    )
})