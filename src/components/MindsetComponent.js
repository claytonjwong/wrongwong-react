import React from 'react';
import { Jumbotron, Card, CardHeader, CardBody } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';


const Mindset = () => {
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
                                            <h2><i className="fa fa-smile-o fa-5x"></i></h2>
                                        </Fade>
                                        <Fade in>
                                            <div className="row justify-content-center">
                                                <h1>Mindset</h1>
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
                                            <h3 className="mb-0">You cannot have a positive life and a negative mind.</h3>
                                        </Fade>
                                        <Fade in>
                                            <footer className="blockquote-footer">Joyce Meyer</footer>
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
                                        <h3 className="mb-0">Stress</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="col-12">
                                            <div className="row card-quote">
                                                <div className="col-offset-1"></div>
                                                <blockquote className="blockquote">
                                                    <p className="mb-0">Damn right I like the life I live 'Cause I went from negative to positive.</p>
                                                    <footer className="blockquote-footer">The Notorious B.I.G.,
                                                        <cite title="Source Title">"Juicy" from "Notorious" soundtrack</cite>
                                                    </footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <p>
                                            Bad stress causes me to experience additional fatigue, brain fog, and inflammation.&nbsp;
                                            I avoid bad stress by focusing on conflict resolution and focusing forward on the day
                                            to avoid dwelling and ruminating upon previous stressful experiences.&nbsp; It's easy to get
                                            caught up in a negative cycle.&nbsp; The sooner I abscond the negativity cyclone, the better.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader className="bg-warning">
                                        <h3 className="mb-0">Stay Positive</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="col-12">
                                            <div className="row card-quote">
                                                <div className="col-offset-1"></div>
                                                <blockquote className="blockquote">
                                                    <p className="mb-0">When one's expectations are reduced to zero, one really appreciates everything one does have.</p>
                                                    <footer className="blockquote-footer">Stephen Hawking</footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <p>
                                            After I was diagnosed with an incurable autoimmune disease, it was very easy for me
                                            to focus on negative aspects of my life.&nbsp; With proper expectations, I've realized
                                            my cup is still more than half-full.&nbsp; I've transformed the side-effects of an autoimmune disease
                                            into daily reminders to be thankful for what I have.&nbsp; The daily pain I experience is a constant reminder
                                            of my mortality.&nbsp; Those reminders guide me to efficiently prioritize, utilize, appreciate,
                                            and take advantage of all the amazing opportunities in my life.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader className="bg-warning">
                                        <h3 className="mb-0">Future</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="col-12">
                                            <div className="row card-quote">
                                                <div className="col-offset-1"></div>
                                                <blockquote className="blockquote">
                                                    <p className="mb-0">The key to realizing a dream is to focus not on success but on
                                                        significance, and then even the small steps and little victories along
                                                        your path will take on greater meaning.
                                                    </p>
                                                    <footer className="blockquote-footer">Oprah Winfrey</footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <p>
                                            I was scared of the future and how bad I might end up after I attended an AS meetup
                                            in San Diego, CA.&nbsp; I witnessed first-hand the horrible affects of AS.&nbsp; Some folks
                                            were fused and lacked basic abilities, such as turning their heads.&nbsp;
                                            Most everyone was in discomfort and pain.&nbsp;
                                            I was concerned about lack of mobility and paralysis, since its easier to fracture
                                            a fused spine and neck from an accidental fall.&nbsp; There are many horrible outcomes
                                            from AS, but it is <em>not</em> helpful at all to wonder and dwell upon a potential future.&nbsp;
                                            By focusing on a negative potential future, I became extremely anxious and worried about the future.
                                            I ended up severely depressed and had difficultly with basic things in life, such
                                            as socializing and communicating with others, due to overwhelming anxiety.
                                        </p>
                                        <p>
                                            I've recently found the best way to predict my future is to create it.&nbsp; I became empowered
                                            when I consistently chose to focus my mind's attention from the past and the future to the present.&nbsp;
                                            I started living in the moments of each day.&nbsp; Focusing on the present,
                                            I found the small things I could do each and every day to proactively create my own future.
                                        </p>
                                        <p>
                                            I can't change the future by thinking about it, so I stopped thinking about it.
                                            Similiarly I can't change the past by thinking about it.  I previously ruminated daily
                                            about what I <em>should</em> have done, which caused the same depressing affect as focusing
                                            on the future.&nbsp;
                                        </p>
                                        <h4>Recipe for Success:</h4>
                                        <ol>
                                            <li>Focus on the present</li>
                                            <li>Take action today</li>
                                            <li>Don't just think about it, make it happen</li>
                                        </ol>
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

export default Mindset;