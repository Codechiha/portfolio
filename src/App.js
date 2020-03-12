import React, { Component } from 'react';
import { Home } from './Home';
import { Cards } from './Cards';
import Contact from './components/Contact';

// This Component Compiles all the separate components

class App extends Component {
    render() {
        return (
            <div>
                <Home />
                <Cards />
                <Contact />
            </div>
        )
    }
}

export default App;