import React, { Component } from 'react';
import { Home } from './components/Home';
import { Cards } from './Cards';
import Contact from './components/Contact';
import { Route } from 'react-router-dom';

// This Component Compiles all the separate components

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' 
                    render= {props => <Home  {...props} />}
                />
                <Route path='/projects' 
                    render= {props => <Cards  {...props} />}
                />
                <Route path='/about' 
                    render= {props => <Contact  {...props} />}
                />
            </div>
        )
    }
}

export default App;