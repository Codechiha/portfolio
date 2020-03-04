import React, { Component } from 'react';
import { Home } from './Home';
import { Cards } from './Cards';
// This Component Compiles all the separate components

class App extends Component {
    render() {
        return (
            <div>
                <Home />
                <Cards />
            </div>
        )
    }
}

export default App;