import React from 'react';
import { Jumbotron, Card, CardHeader, CardBody } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';

const Tools = () => {
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
                                            <h2><i className="fa fa-wrench fa-5x"></i></h2>
                                        </Fade>
                                        <Fade in>
                                            <div className="row justify-content-center">
                                                <h1>Tools</h1>
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
					                        <h3 className="mb-0">Use your brain, not your back<br/>
					                            Use your brain, not a gat, it's a party, not a jack
				                            </h3>
                                        </Fade>
                                        <Fade in>
                                            <footer className="blockquote-footer">Ice Cube, <cite>"Gangster Rap Made Me Do It" (Raw Footage, 2008)</cite></footer>
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
			                            <h3 className="mb-0">TENS Unit</h3>
			                        </CardHeader>
			                        <CardBody>
			                            <div className="col-12">
			                                <div className="row card-quote">
			                                    <div className="col-offset-1"></div>
			                                    <blockquote className="blockquote">
			                                        <p className="mb-0">Hush, I'm just a lush for this Hen<br/>
			                                            Chrome electroids, connected to my pen</p>
			                                        <footer className="blockquote-footer">Ice Cube, <cite>"Dr. Frankenstein" from War & Peace Vol. 1: The War Disc (1998)</cite></footer>
			                                    </blockquote>
			                                </div>
			                            </div>
			                            <p>
			                                A transcutaneous electrical nerve stimulation (TENS) unit has helped me to flush out
			                                inflammation and pain from my sacroiliac (SI) joints when I was experiencing too much pain
			                                to perform basic movements such as standing, sitting, and walking.&nbsp; A TENS unit
			                                is especially helpful when experiencing limited mobility.&nbsp; The TENS units I've used
			                                have 4 contact points.&nbsp; I benefit most from aligning the contact points in a four-cornered
			                                X pattern across my low-back and SI joints.
			                            </p>
			                        </CardBody>
				                </Card>
				                <Card>
			                        <CardHeader className="bg-warning">
			                            <h3 className="mb-0">Light Therapy</h3>
			                        </CardHeader>
			                        <CardBody>
			                            <div className="col-12">
			                                <div className="row card-quote">
			                                    <div className="col-offset-1"></div>
			                                    <blockquote className="blockquote">
			                                        <p className="mb-0">It's not a fluke, it's been tried, I'm the truth.<br />
			                                            Since "Turn Off the Lights" from the World Class Wreckin Cru</p>
			                                        <footer className="blockquote-footer">Dr. Dre feat. Snoop Dogg, <cite>"Still D.R.E." from 2001</cite></footer>
			                                    </blockquote>
			                                </div>
			                            </div>
			                            <p>
			                                The Sun is significantly less prominent during winter season of the Pacific Northwest.&nbsp; The lack of
			                                sunshine is one of many factors which increase my pain and inflammation.&nbsp; I've found
			                                light therapy as a helpful alternative to the Sun.&nbsp; I've used two "Happy Lights":
			                            </p>
			                            <ul>
			                                <li>Verilux HappyLight VT32 Touch 10,000 Lux LED Light Therapy Lamp with Adjustable Color and Brightness Controls</li>
			                                <li>Aurora Lightpad - SAD Light Therapy Box - Brightest 10,000 LUX Seasonal Depression Lamp</li>
			                            </ul>
			                            <p>
			                                Both lights are rated at 10,000 LUX.&nbsp; The Verilux is around $80 and is <em>not</em> as bright
			                                as the Aurora which costs $180.&nbsp; I'm <em>not</em> sure if brighter is better though,
			                                they both seem to help.&nbsp; I place these lights on my desk and allow light to shine
			                                indirectly into my eyes for a few hours each day while I'm working on my computer.
			                            </p>
			                        </CardBody>
				                </Card>
				                <Card>
			                        <CardHeader className="bg-warning">
			                            <h3 className="mb-0">Massage</h3>
			                        </CardHeader>
			                        <CardBody>
			                            <div className="col-12">
			                                <div className="row card-quote">
			                                    <div className="col-offset-1"></div>
			                                    <blockquote className="blockquote">
			                                        <p className="mb-0">
			                                            Damn.&nbsp; I'm broke.&nbsp; My feet hurt.
			                                        </p>
			                                        <footer className="blockquote-footer">Ice Cube, <cite>"Down For Whatever" from Lethal Injection, 1993</cite></footer>
			                                    </blockquote>
			                                </div>
			                            </div>
			                            <h4 className="mb-4">Automatic:</h4>
			                            <p>
			                                Massage is one of the most helpful activities for my tight tendons and sore muscles.&nbsp;
			                                I am a proud owner of the following <a href="https://www.homedics.com/" target="_blank" rel="noopener noreferrer">HoMedics</a> device:
			                            </p>
			                            <ul>
			                                <li>
			                                    <a href="https://www.homedics.com/massage/perfect-touch-masseuse-kneading-massage-cushion-with-heat-and-custom-app.html" target="_blank" rel="noopener noreferrer">
			                                        Perfect Touch Masseuse App-Controlled Massage Cushion with Heat (Model: MSC-1000H)
			                                    </a>
			                                </li>
			                            </ul>
			                            <p>
			                                I place this massage device flat on the floor and lay atop it.&nbsp;
			                                My body weight drives the massager deep into my back muscles along my spine.&nbsp;
			                                <a href="https://www.homedics.com/" target="_blank" rel="noopener noreferrer">HoMedics</a> provides excellent customer service
			                                for their massage devices.&nbsp; After regular daily use, the fabric on my massage cushion ripped and
			                                <a href="https://www.homedics.com/" target="_blank" rel="noopener noreferrer">HoMedics</a> sent me a brand new
			                                massage device.&nbsp; I only paid for the shipping fee to return the one I ripped.&nbsp;
			                            </p>
			                            <h4 className="mt-4 mb-4">Manual:</h4>
			                            <p>
			                                I also use a foam roller on my back and legs.&nbsp; I feel better after rolling out my iliotibial
			                                (IT) band, although it's a fairly painful experience, it helps keep me moving.&nbsp;
			                            </p>
			                            <p>
			                                One of the most basic massage tools is a Lacrosse ball.&nbsp; Laying atop a Lacrosse ball
			                                and slightly rolling back-and-forth provides deep and pinpointed massage.
			                            </p>
			                            <p>
			                                A frozen water bottle feels amazing on sore feet suffering from plantar fasciitis.&nbsp;
			                                While seated, place the frozen water bottle on the floor and roll it back-and-forth
			                                under the arch of each foot.
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
};
export default Tools;