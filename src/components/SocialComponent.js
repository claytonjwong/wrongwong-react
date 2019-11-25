import React from 'react';
import { Jumbotron, Card, CardHeader, CardBody } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';

const Social = () => {
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
                                            <h2><i className="fa fa-facebook-square fa-5x"></i></h2>
                                        </Fade>
                                        <Fade in>
                                            <div className="row justify-content-center">
                                                <h1>Social</h1>
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
                                            <h3 className="mb-0">I sit alone in my four-cornered room staring at candles</h3>
                                        </Fade>
                                        <Fade in>
                                            <footer className="blockquote-footer">Scarface, <cite>"Mind Playing Tricks on Me" (We Can't Be Stopped, 1991)</cite></footer>
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
				    	<div className="col-1"></div>
				        <div className="col-10">
			                <Card>
		                        <CardHeader className="bg-warning" role="tab" id="facebookhead">
		                            <h3 className="mb-0">Facebook</h3>
		                        </CardHeader>
			                    <CardBody>
		                            <div className="col-12">
		                                <div className="row card-quote">
		                                    <div className="col-offset-1"></div>
		                                    <blockquote className="blockquote">
		                                        <p className="mb-0">Thank God when I bless the mic<br/>
		                                            You finally get to hear the shit that you like</p>
		                                        <footer className="blockquote-footer">Ice Cube, <cite>"Gangster Rap Made Me Do It" (Raw Footage, 2008)</cite></footer>
		                                    </blockquote>
		                                </div>
		                            </div>
		                            <p>
		                                There's many online groups to join for support and advice.&nbsp; Beware of negative
		                                groups with bad advice.&nbsp; I'm a member of the following Facebook groups which
		                                focus on positive, accurate knowledge transfer:
		                            </p>
		                            <ul>
		                            	<a href="https://www.facebook.com/groups/470884762984762/" target="_blank"
		                            	   rel="noopener noreferrer">
		                                	<li>The Low/No Starch Diet for Ankylosing Spondylitis</li>
		                            	</a>
		                                <a href="https://www.facebook.com/groups/2279428628766768/" target="_blank"
		                                   rel="noopener noreferrer">
		                                	<li>Meat-Based Diets/Lifestyles(Keto, Carnivore, Paleo, PKD, WAPF, etc.)</li>
		                            	</a>
		                                <a href="https://www.facebook.com/groups/SpondySeattle/" target="_blank"
		                                   rel="noopener noreferrer">
		                                	<li>SAA Seattle-Area Spondylitis Support Group</li>
		                            	</a>
		                            	<a href="https://www.facebook.com/groups/2089672651294088/" target="_blank"
		                            	    rel="noopener noreferrer">
		                                	<li>Phoenix Area Spondylitis Support Group</li>
		                            	</a>
		                            </ul>
			                    </CardBody>
			                </Card>
			                <Card>
		                        <CardHeader className="card-header bg-warning" role="tab" id="kickashead">
		                            <h3 className="mb-0">kickAS.org</h3>
		                        </CardHeader>
			                    <CardBody>
			                        <div className="card-body">
			                            <div className="col-12">
			                                <div className="row card-quote">
			                                    <div className="col-offset-1"></div>
			                                    <blockquote className="blockquote">
			                                        <p className="mb-0">I'm here to kick ass and chew bubblegum... and I'm all out of gum</p>
			                                        <footer className="blockquote-footer">Duke Nukem, <cite>originated from John Carpenter's "They Live" (1988)</cite></footer>
			                                    </blockquote>
			                                </div>
			                            </div>
			                            <p>
			                                <a href="http://kickas.org/" target="_blank" rel="noopener noreferrer">kickas.org</a> is a free online support
			                                group which contains helpful AS information:
			                            </p>
			                            <ul>
			                                <li><a href="http://www.kickas.org/medical/index.shtml" target="_blank" rel="noopener noreferrer">Research Papers</a></li>
			                                <li><a href="http://www.kickas.org/londondiet.shtml" target="_blank" rel="noopener noreferrer">Dietary Advice</a></li>
			                                <li><a href="http://www.kickas.org/guide.shtml" target="_blank" rel="noopener noreferrer">AS Guidebook</a></li>
			                                <li><a href="http://www.kickas.org/docvisitsnew.shtml" target="_blank" rel="noopener noreferrer">Dr. Visit Preparation</a></li>
			                                <li><a href="http://www.kickas.org/painmap.shtml" target="_blank" rel="noopener noreferrer">Pain Maps</a></li>
			                            </ul>
			                            <p>
			                                <a href="http://kickas.org/" target="_blank" rel="noopener noreferrer">kickas.org</a> also has a support forum.&nbsp;
			                                It is a private site funded by its members.&nbsp; I highly encourage
			                                <a href="http://www.kickas.org/donations/index.shtml" target="_blank" rel="noopener noreferrer">donating to kickas.org!</a>
			                            </p>
			                        </div>
			                    </CardBody>
			                </Card>
			                <Card className="card">
		                        <CardHeader className="card-header bg-warning" role="tab" id="supporthead">
		                            <h3 className="mb-0">Support</h3>
		                        </CardHeader>
			                    <CardBody>
			                        <div className="card-body">
			                            <div className="col-12">
			                                <div className="row card-quote">
			                                    <div className="col-offset-1"></div>
			                                    <blockquote className="blockquote">
			                                        <p className="mb-0">
			                                            No one knows my struggle, they only see the trouble
			                                        </p>
			                                        <footer className="blockquote-footer">Tupac Shakur, <cite>"Thugz Mansion" (Better Dayz, 2002)</cite></footer>
			                                    </blockquote>
			                                </div>
			                            </div>
			                            <p>
			                                My brother once asked me how AS felt.&nbsp; Upon receiving this request for information,
			                                I cried and was unable to formulate a response.&nbsp; Everyday I experience a significant
			                                amount of pain and other unseen challenges from the side-effects of this relentless disease.&nbsp;
			                                It's beneficial to get support from others who are managing AS in helpful,
			                                positive ways.&nbsp; The <a href="https://www.spondylitis.org/" target="_blank" rel="noopener noreferrer">Spondylitis Association of America</a>
			                                coordinates support groups across the U.S.&nbsp;
			                            </p>
			                            <ul>
			                                <li><a href="https://www.spondylitis.org/Support-Groups" target="_blank" rel="noopener noreferrer">Support Groups</a></li>
			                            </ul>
			                        </div>
			                    </CardBody>
			                </Card>
				        </div>
				        <div className="col-1"></div>
				    </div>
		    	</div>
    		</Fade>

	    </React.Fragment>

	);
};
export default Social;