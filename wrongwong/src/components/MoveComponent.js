import React from 'react';
import { Jumbotron, Card, CardHeader, CardBody } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';

const Move = () => {
    return (
        <React.Fragment>

            <Jumbotron>
                <div className="container">
                    <div className="row row-header align-items-center">
                        <div className="col-sm-3">
                            <div className="row justify-content-center">
                                <div className="col-header">
                                    <Stagger in>
                                        <Fade in>
                                            <h2><i className="fa fa-child fa-5x"></i></h2>
                                        </Fade>
                                        <Fade in>
                                            <div className="row justify-content-center">
                                                <h1>Move</h1>
                                            </div>
                                        </Fade>
                                    </Stagger>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm offset-1">
                            <div className="row">
                                <blockquote className="blockquote">
                                    <Stagger in>
                                        <Fade in>
                                            <h3 className="mb-0">80% of success is just showing up</h3>
                                        </Fade>
                                        <Fade in>
                                            <footer className="blockquote-footer">Woody Allen</footer>
                                        </Fade>
                                    </Stagger>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <Fade in>
                <div className="container">
                    <div className="row row-content">
                        <div className="col">
                            <div id="accordion">
                                <Card>
                                    <CardHeader className="bg-warning">
                                        <h3 className="mb-0">Weight Lifting</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="col-12">
                                            <div className="row card-quote">
                                                <div className="col-offset-1"></div>
                                                <blockquote className="blockquote">
                                                    <p className="mb-0">
                                                        So no matter how hard it get,<br/>
                                                        stick your chest out, keep your head up, and handle it
                                                    </p>
                                                    <footer className="blockquote-footer">Tupac Shakur, <cite>Me Against the World (1995)</cite></footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <p>
                                            I ended up consistently hurting myself weight lifting.&nbsp; So I starting rock climbing
                                            to lift myself instead of weights.&nbsp; Rock climbing builds
                                            core strength and is an enjoyable full-body problem solving activity.&nbsp; In general
                                            static resistance training creates less pain and inflammation in my joints while still
                                            maintaining strength and muscle mass.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader className="bg-warning">
                                        <h3 className="mb-0">Walk / Swim</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="col-12">
                                            <div className="row card-quote">
                                                <div className="col-offset-1"></div>
                                                <blockquote className="blockquote">
                                                    <p className="mb-0">Even when I was close to defeat<br/>I rose to my feet</p>
                                                    <footer className="blockquote-footer">Dr. Dre feat. Snoop Dogg, <cite>"Still D.R.E." from 2001</cite></footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <p>
                                            Running puts too much stress on my joints and was <em>not</em> sustainable for me in the long-term;&nbsp;
                                            instead I've been walking, hiking, and swimming.&nbsp; These activities are just as enjoyable
                                            and softer on my joints.&nbsp; When I first started swimming, I had improper body position
                                            and body rotation.&nbsp; There's a lot of balance and coordination involved with swimming.&nbsp;
                                            I learned how to swim properly from the experts at <a href="https://swimsmooth.com" target="_blank" rel="noopener noreferrer">
                                            SwimSmooth.com</a>.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader className="bg-warning">
                                        <h3 className="mb-0">Yoga</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="col-12">
                                            <div className="row card-quote">
                                                <div className="col-offset-1"></div>
                                                <blockquote className="blockquote">
                                                    <p className="mb-0">
                                                        I never forgot Van Ness and Imperial<br/>
                                                        Look at my life, Ice Cube is a miracle
                                                    </p>
                                                    <footer className="blockquote-footer">Ice Cube, <cite>"Gangster Rap Made Me Do It" (Raw Footage, 2008)</cite></footer>
                                                </blockquote>
                                            </div>

                                        </div>
                                        <p>
                                            Yoga has helped me to increase mobility, focus my mind, live in the moment, and be thankful
                                            for every breath which I usually take for granted throughout each day.&nbsp;
                                            Think about right now, you're probably not as grateful for simply breathing compared to someone
                                            who is drowning or unable to breathe.&nbsp; It's funny, many times we don't realize what
                                            we have to be thankful for until it's gone.&nbsp; Being grateful for simply
                                            breathing has helped me to appreciate all the wonderful things in my life.&nbsp;
                                        </p>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

        </React.Fragment>
    );
}

export default Move;