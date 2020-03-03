import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Navi } from './components/Navi';
import { Cards } from './Cards';
import david from './assets/red-bg.jpg';

// This Component Compiles all the separate components

class App extends Component {
    render() {
        return (
            <div>
                <Navi />
                <Home />
                <Cards />
            </div>
        )
    }
}

export default App;