import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';
import HeaderImage from '../images/header.png';

const Home = () => {
    return (
        <React.Fragment>

            <Jumbotron>
                <div className="container">
                    <div className="row row-header align-items-center">
                        <div className="col-12 col-md-8">
                            <Stagger in>
                                <Fade in>
                                    <div className="row justify-content-center top-margin">
                                        <div className="col-auto text-center">
                                            <h1>Ankylosing Spondylitis</h1>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade in>
                                    <div className="media row justify-content-center">
                                        <img className="img-fluid rounded" src={HeaderImage} alt="Clayton Wong" />
                                        <div className="media-body d-none d-sm-block">
                                            <p>
                                                Hi, my name is Clayton Wong.  Explore my lifestyle changes
                                                which reduce inflammation and pain caused by this rare autoimmune disease.
                                            </p>
                                        </div>
                                    </div>
                                </Fade>
                            </Stagger>
                        </div>

                        <div className="col col-md">
                            <Stagger in>
                                <Fade in>
                                    <div className="row justify-content-center">
                                        <div className="col-auto"><i className="fa fa-medkit fa-5x mb-3"></i></div>
                                    </div>
                                </Fade>
                                <Fade in>
                                    <div className="col">
                                        <div className="row justify-content-center">
                                            <div className="col-auto col-sm-auto">
                                                <a role="button" className="btn btn-block nav-link btn-warning" data-toggle="tooltip" data-html="true"
                                                   title="<div class='white-anchor'><a href='https://www.spondylitis.org/Ankylosing-Spondylitis' target='_blank'>Spondylitis Association<br/><strong>www.spondylitis.org</strong></a></div>"
                                                   data-placement="bottom" href="https://www.spondylitis.org/Ankylosing-Spondylitis" target="_blank"
                                                   rel="noopener noreferrer">
                                                    <strong>What is AS ?</strong>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </Stagger>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <Fade in>
                <div className="container">
                    <div className="row row-content justify-content-center">
                        <div className="col-auto">
                            <div className="card">
                                <h3 className="card-header bg-warning">Did you know?</h3>
                                <div className="card-body">
                                    <ul>
                                        <Stagger in>
                                            <Fade in>
                                                <li>More than 23.5 million people in the U.S. ( 1 in 13 ) are affected by <a href="https://en.wikipedia.org/wiki/Autoimmune_disease" target="_blank" rel="noopener noreferrer">autoimmune diseases</a></li>
                                            </Fade>
                                            <Fade in>
                                                <li>About 25% of people with an <a href="https://en.wikipedia.org/wiki/Autoimmune_disease" target="_blank" rel="noopener noreferrer">autoimmune disease</a> develop additional <a href="https://en.wikipedia.org/wiki/Autoimmune_disease" target="_blank" rel="noopener noreferrer">autoimmune diseases</a></li>
                                            </Fade>
                                            <Fade in>
                                                <li><a href="https://en.wikipedia.org/wiki/Dan_Reynolds_(singer)" target="_blank" rel="noopener noreferrer">Imagine Dragons' lead singer, Dan Reynolds</a>, has <a href="https://www.spondylitis.org/Ankylosing-Spondylitis" target="_blank" rel="noopener noreferrer">Ankylosing Spondylitis</a></li>
                                            </Fade>
                                            <Fade in>
                                                <li><a href="https://www.awarenessdays.com/awareness-days-calendar/world-ankylosing-spondylitis-day-2019/" target="_blank" rel="noopener noreferrer">Ankylosing Spondyilitis Day</a> is the first Saturday of May</li>
                                            </Fade>
                                        </Stagger>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

        </React.Fragment>
    );
}

export default Home;