import React from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Movie Database</h1>
        </header>
        // <React.Fragment>
        //     <Jumbotron fluid>
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col">
        //                     <h1>Ultimate Moviegoers Guide</h1>
        //                 </div>
        //             </div>
        //         </div>
        //     </Jumbotron>

        //     <Navbar dark sticky="top" expand="md">
        //         <div className="container">
        //             <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="30" width="30" alt="NuCamp Logo" /></NavbarBrand>
        //                 <Nav navbar>
        //                     <NavItem>
        //                         <NavLink className="nav-link" to="/home">
        //                             <i className="fa fa-film fa-lg" /> Home
        //                             </NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                         <NavLink className="nav-link" to="/nowplaying">
        //                             <i className="fa fa-calendar fa-lg" /> Now Playing
        //                             </NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                         <NavLink className="nav-link" to="/popular">
        //                             <i className="fa fa-star fa-lg" /> Most Popular
        //                             </NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                         <NavLink className="nav-link" to="/toprated">
        //                             <i className="fa fa-trophy fa-lg" /> Top Rated
        //                             </NavLink>
        //                     </NavItem>
        //                 </Nav>
        //             {/* </Collapse> */}
        //         </div>
        //     </Navbar>
        // </React.Fragment>
    );
}

export default Header
