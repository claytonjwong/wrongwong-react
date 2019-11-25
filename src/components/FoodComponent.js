import React from 'react';
import { Jumbotron, Card, CardHeader, CardBody } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';

const Food = () => {
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
                                            <h2><i className="fa fa-cutlery fa-5x"></i></h2>
                                        </Fade>
                                        <Fade in>
                                            <div className="row justify-content-center">
                                                <h1>Food</h1>
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
                                            <h3 className="mb-0">I don't mean to brag, I don't mean to boast<br/>But we like hot butter on your breakfast toast</h3>
                                        </Fade>
                                        <Fade in>
                                            <footer className="blockquote-footer">The Sugarhill Gang, <cite>“Rappers Delight" (Sugarhill Gang, 1980)</cite></footer>
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
                            <Card>
                                <CardHeader className="bg-warning" role="tab" id="nostarchhead">
                                    <h3 className="mb-0">NO Starch</h3>
                                </CardHeader>
                                <CardBody>
                                    <div className="col-12">
                                        <div className="row card-quote">
                                            <div className="col-offset-1"></div>
                                            <blockquote className="blockquote">
                                                <p className="mb-0">Born sinner, the opposite of a winner<br/>Remember when I used to eat sardines for dinner</p>
                                                <footer className="blockquote-footer">Notorious B.I.G., <cite>“Juicy" (Ready to Die, 1994)</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <p>
                                        I feel significantly better with <strong>abolutely NO starch whatsoever in my diet</strong>.&nbsp;
                                         I noticed  maximized benefits after 3 months of NO starch diet.&nbsp; Food can be tested for
                                        starch using iodine.&nbsp; If iodine turns black when placed on a piece of food, then
                                        there's a high probability starch exists in that food.
                                    </p>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader className="bg-warning" role="tab" id="ketohead">
                                    <h3 className="mb-0">Ketogenic</h3>
                                </CardHeader>

                                <CardBody>
                                    <div className="col-12">
                                        <div className="row card-quote">
                                            <div className="col-offset-1"></div>
                                            <blockquote className="blockquote">
                                                <p className="mb-0">Off that BQE near Mickey D's<br/>and occasionally treat myself to a nice little fish and cheese</p>
                                                <footer className="blockquote-footer">Joell Ortiz feat. Jim Jones, <cite>“Nissan, Honda, Chevy (Remix)”</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <p>
                                        After cutting out all starchy foods, I began eating meat and non-starchy vegetables.
                                        I enjoy eating baked vegetables drenched in avocado oil.&nbsp; My favorite baked
                                        vegetables are brussel sprouts, broccoli, asparagus, and onions.&nbsp; I ceased consumption
                                        of fruit and all other sources of sugar.&nbsp; My body began to run on fat
                                        rather than glucose, and I noticed consistently higher energy levels throughout the day.
                                    </p>
                                    <h4>Baked Vegetables Recipe:</h4>
                                    <ol>
                                        <li>Drench vegetables in avocado oil</li>
                                        <li>Place vegetables on a baking pan</li>
                                        <li>Bake at 420 F for 20-30 minutes (until browned)</li>
                                    </ol>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader className="bg-warning" role="tab" id="carnivorehead">
                                    <h3 className="mb-0">Carnivore</h3>
                                </CardHeader>
                                <CardBody>
                                    <div className="col-12">
                                        <div className="row card-quote">
                                            <div className="col-offset-1"></div>
                                            <blockquote className="blockquote">
                                                <p className="mb-0">
                                                    What you know 'bout shark meat, perch, and tilapia?<br/>Alligator, dog meat, caviar, we mafia!
                                                </p>
                                                <footer className="blockquote-footer">Young Dro, <cite>“Grand Hustle Mafia" (Grand Hustle Presents: In da Streetz Volume 4; 2006)</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <p>
                                        Currently I've been eating fatty meats and soups exclusively.&nbsp; The soup I drink
                                        is made from bone broth and vegetables.&nbsp; I strain the soup to remove all vegetables
                                        before consumption.&nbsp; I purchase high-quality meat
                                        and bones from <a href="https://grasslandbeef.com/" target="_blank" rel="noopener noreferrer">GrasslandBeef.com</a>.&nbsp; I
                                        also eat sushi from my favorite grocery store, <a href="https://www.uwajimaya.com/" target="_blank" rel="noopener noreferrer">Uwajimaya</a>.&nbsp;
                                        I feel best intermittently fasting.&nbsp; My daily "eating window" is on average 4 hours
                                        (i.e. I fast for 20 hours a day, and I eat within a 4 hour timespan).&nbsp;
                                        I usually eat one big dinner (3 pounds of meat) within the 4 hours immediately preceding sleep.
                                    </p>
                                    <h4>Soup Recipe:</h4>
                                    <ol>
                                        <li>Bake bones at 350 F for 30 minutes</li>
                                        <li>Place bones in large pot of water with a teaspoon of apple cider vinegar for 30 minutes</li>
                                        <li>Add vegetables and raise the water temperature until boiling</li>
                                        <li>Turn the heat down low for 2 days</li>
                                        <li>Strain soup before consumption</li>
                                    </ol>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </Fade>

        </React.Fragment>
    );
}

export default Food;