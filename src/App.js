import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { Navi } from './components/Navi';
import { Footer } from './components/Footer';
import { Cards } from './Cards';
import './App.css';
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

// This Component Compiles all the separate components

class App extends Component {
    render() {
        return (
            <div>
                <Particles 
                    params={particleOpt}
                >                </Particles>
                <Navi />
                 <Layout>
                     <Router>
                         <Switch>
                             <Route exact path='/' component={Home} />
                             <Route component={NoMatch} />
                         </Switch>
                     </Router>
                     <Cards />
                 </Layout>
                 <Footer />

            </div>
        )
    }
}

export default App;