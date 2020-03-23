import React, { Component } from 'react';
import { About } from './components/About';
import { Home } from './components/Home';
import { Cards } from './components/Cards';
import Contact from './components/Contact';
import { Route } from 'react-router-dom';

import styled from 'styled-components';

const Styles = styled.div`

    h4 {
        font-size: 20px;
    }

    p {
        border: 1px solid black;
        font-size: 15px;
    }
`

// This Component Compiles all the separate components

class App extends Component {
    render() {
        return (
            <div>
                <Styles>
                    <Route exact path='/' 
                        render= {props => <Home  {...props} />}
                    />
                    <Route path='/projects' 
                        render= {props => <Cards  {...props} />}
                    />
                    <Route path='/about' 
                        render= {props => <About  {...props} />}
                    />
                </Styles>
            </div>
        )
    }
}

export default App;