import React, { Component } from 'react';
import Home from './HomeComponent';
import Food from './FoodComponent';
import Move from './MoveComponent';
import Mindset from './MindsetComponent';
import Tools from './ToolsComponent';
import Social from './SocialComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/food" component={Food} />
                            <Route path="/move" component={Move} />
                            <Route path="/mindset" component={Mindset} />
                            <Route path="/tools" component={Tools} />
                            <Route path="/social" component={Social} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />                
            </React.Fragment>
        );
    }
}

export default withRouter(Main);