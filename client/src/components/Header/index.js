import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };

    return (
        <header>
            <div>
                <Link to="/" className="text-decoration-none text-body">
                    <h1>Quente Copo</h1>
                </Link>
                <p>You're primary location to find out about new unsolved mysteries, cold cases, and to discuss what you think happened.</p>
                <div className="double-border"></div>
                <div className="d-flex flex-row justify-content-between">
                    <span className="english-font px-3 py-2">January 28th, 2021</span>
                <nav className="d-flex flex-row justify-content-end">
                    {Auth.loggedIn() ? (
                        <>
                            {/* <Link to="/profile">Me</Link> */}
                            <a href="/" className="px-3 py-2 text-uppercase" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                    <>
                        <Link to="/login" className="px-3 py-2 text-uppercase">Login</Link>
                        <Link to="/signup" className="px-3 py-2 text-uppercase">Signup</Link>
                    </>
                    )}
                </nav>
                </div>

                <div className="double-border"></div>
            </div>
        </header>
    )
};

export default Header;