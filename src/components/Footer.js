import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <ul className="list-unstyled">
                            <li><Link to='/' className="footer-link">Home</Link></li>
                            <li><Link to='/nowplaying' className="footer-link">Now Playing</Link></li>
                            <li><Link to='/mostpopular' className="footer-link">Most Popular</Link></li>
                            <li><Link to='/toprated' className="footer-link">Top Rated</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 text-center">
                        <img src="/TMDb_logo.svg" height="100" width="100" alt="The Movie Database Logo" />
                    </div>
                    <div className="col-sm-4">
                        <h5 className="attribution">This product uses the TMDb API but is not endorsed or certified by TMDb.</h5>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;