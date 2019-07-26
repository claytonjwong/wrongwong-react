import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

const Home = () => {
    return (
        <Jumbotron>
            <div class="container">
                <div class="row row-header align-items-center">
                    <div class="col-12 col-md-8">
                        <div class="row justify-content-center top-margin">
                            <div class="col-auto text-center">
                                <h1>Ankylosing Spondylitis</h1>
                            </div>
                        </div>

                        <div class="media row justify-content-center">
                            <img class="img-fluid rounded" src="assets/images/header.png" />
                            <div class="media-body d-none d-sm-block">
                                <p>
                                    Hi, my name is Clayton Wong.  Explore my lifestyle changes
                                    which reduce inflammation and pain caused by this rare autoimmune disease.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col col-md">
                        <div class="row justify-content-center">
                            <div class="col-auto"><i class="fa fa-medkit fa-5x mb-3"></i></div>
                        </div>
                        <div class="col">
                            <div class="row justify-content-center">
                                <div class="col-auto col-sm-auto">
                                    <a role="button" class="btn btn-block nav-link btn-warning" data-toggle="tooltip" data-html="true"
                                       title="<div class='white-anchor'><a href='https://www.spondylitis.org/Ankylosing-Spondylitis' target='_blank'>Spondylitis Association<br/><strong>www.spondylitis.org</strong></a></div>"
                                       data-placement="bottom" href="https://www.spondylitis.org/Ankylosing-Spondylitis" target="_blank">
                                        <strong>What is AS ?</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
}

export default Home;