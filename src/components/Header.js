import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Jumbotron className="jumbotron">
                    <h1 id="jumboTitle">Ultimate Moviegoers Guide</h1>
            </Jumbotron>
            <Navbar className="navbar navbar-dark" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="/movie.png" height="50" width="50" alt="Movie Logo" />
                    </NavbarBrand>
                    <NavbarToggler className="mr-2" onClick={toggleNavbar} />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar className="nav">
                            <NavItem >
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/nowplaying">Now Playing</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/mostpopular">Most Popular</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/toprated">Top Rated</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header
