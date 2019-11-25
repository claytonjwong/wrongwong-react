import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/food">Food</Link></li>
                            <li><Link to="/move">Move</Link></li>
                            <li><Link to="/mindset">Mindset</Link></li>
                            <li><Link to="/tools">Tools</Link></li>
                            <li><Link to="/social">Social</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm">
                        <blockquote className="blockquote">
                            <p className="mb-0">
                                  We have two lives, and the second begins when we realize we only have one.
                            </p>
                            <footer className="blockquote-footer">Confucius</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright <span id="current_year"></span><a href="mailto:claytonjwong@gmail.com" target="_blank" rel="noopener noreferrer"> Clayton Wong</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;