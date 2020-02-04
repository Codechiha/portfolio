import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { Navi } from './components/Navi';
import { Footer } from './components/Footer';
import { Cards } from './Cards';
// import './App.css';
// import Particles from 'react-particles-js';
import david from './assets/red-bg.jpg';

// const particleOpt = {
//     particles: {
//         number: {
//             value: 550,
//             density: {
//                 enable: true,
//                 value_area: 1000
//             }
//         },
//         retina_detect: true, 
//         config_demo: {
//             hide_card: false,
//             background_color: 'blue',     
//         }

//     }
// }

// This Component Compiles all the separate components

class App extends Component {
    render() {
        return (
            <div>
                {/* <Particles params={particleOpt} /> */}
                 <Layout>
                     <Navi />
                     <Router>
                         <Switch>
                             <Route exact path='/' component={Home} />
                             <Route component={NoMatch} />
                             <Route path='/projects' component={Cards} />
                         </Switch>
                     </Router>
                     <Footer />
                 </Layout>
                 

            </div>
        )
    }
}

export default App;