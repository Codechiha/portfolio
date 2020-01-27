import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { Navi } from './components/Navi';
import { Footer } from './components/Footer';
import { Cards } from './components/Cards';

// This Component Compiles all the separate components

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navi />
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/about' component={About} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                    <Cards />
                </Layout>
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;