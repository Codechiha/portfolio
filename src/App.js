import React, { Component } from 'react';

//React Libraries
import { Route } from 'react-router-dom';

//Components
import { About } from './components/About';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import Contact from './components/Contact';

//Font Styling all in index.css

// This Component Compiles all the separate components

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' 
                    render= {props => <Home  {...props} />}
                />
                <Route path='/projects' 
                    render= {props => <Projects  {...props} />}
                />
                <Route path='/about' 
                    render= {props => <About  {...props} />}
                />
                <Route path='/resume' 
                    render = {props => <Resume {...props} />}
                />
            </div>
        )
    }
}

export default App;