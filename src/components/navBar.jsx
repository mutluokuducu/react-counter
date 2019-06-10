import React from 'react';

/*
stateless functional components
short cut
rsc
 */

const NavBar = ({sum,counted}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="badge badge-pill badge-secondary">
                <h3>{sum}</h3>
            </span>
            <span className="badge badge-pill badge-secondary">
                <h3>{counted}</h3>
            </span>
        </nav>
    );
};

export default NavBar;

