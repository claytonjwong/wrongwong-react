import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.scss';
import { HashRouter } from 'react-router-dom';

class App extends Component {
    
    render() {
        return (
            <HashRouter>
                <div>
                    <Main />
                </div>
            </HashRouter>
        );
    }
}

export default App;
