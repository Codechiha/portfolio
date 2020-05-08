import React from 'react';

import {
    XS,
    S,
    M,
    L,
    XL
} from '../global/global';

//Components
import Navi from './Navi';

//Fonts and Images
import me from '../assets/professional-picture.jpg';
import spring07 from '../assets/spring07-undefeated.jpg';
import summer07 from '../assets/summer-07-champs.jpg';
import spring08 from '../assets/spring08-champs.jpg';
import hoodie from '../assets/gudetama-hoodie.jpg';
import tar from '../assets/house-t.JPG';
import rainbow from '../assets/rainbow-dragon.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

//Styling
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss'
import AnimationStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />

const AutoplaySlider = withAutoplay(AwesomeSlider);

// const Styles = styled.div`

//     h3 {
//         margin-bottom: 40px;
//     }

//     a {
//         color: black;
//         &:hover {
//             color: red;
//         }
//     }

//     .row {
//         @media ${XS}, ${S}, ${M}  {
//             display: flex;
//             flex-direction: column;
//             padding: 20px;
//             margin-bottom: 20px;
//         }

//         @media ${L}, ${XL}{
//             display: flex;
//             flex-direction: row;
//             min-height: 600px;
//             align-items: center;
//             justify-content: space-between;
//             border: 1px solid lightgray;
//             border-radius: 1%;
//         }
        
//     }

//     .about{

//         @media ${XS}, ${S}, ${M} {
//             margin-bottom: 20px;
//             padding: 63px;
//             border: 1px solid lightgray;
//             border-radius: 1%;
//         }
        
//         @media ${L}, ${XL} {
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//             padding: 20px;
//             border: none;
            
//         }
//     }

//     .links {
//         display: flex;
//         flex-direction: row;
//         justify-content: space-evenly;
//     }

//     .pic {
//         @media ${XS}, ${S}, ${M} {
//             border: 1px solid lightgray;
//             border-radius: 1%;
//             padding: 20px;
//         }

//         @media ${L} {
//             border: none;
//         }
//     }
// `
// export const About = () => (
//     <div>
//         <Styles>
//             <Navi />
//             <Container className='main'>
//                 <Row className='row'>
//                     <Col className='about'>
//                         <h3>David Situ</h3>
//                         <p>A survivor of the vigorous Full-Stack Web Development program at Lambda School. 
//                             The intensive course teaches User-Interface (HTML, CSS, Javascript), Front-end (React, State Management, JSX), and
//                             Back-end (Python, RESTful API, Hashing, Blockchain, and Computer Architecture).</p>
//                             <p> When I'm not changing the world with my amazing websites, I make vinyl graphic T-shirts, play basketball, and develop theories about the fantasy world of One Piece. </p>
//                         <div className='links'>
//                             <a href='https://resume.creddle.io/resume/gqg7n9l0lsi'>Resume</a>
//                             <span>{' | '}</span>
//                             <a href='https://github.com/Codechiha'>{github}</a>
//                             <span>{' | '}</span>
//                             <a href='https://www.linkedin.com/in/david-situ-8514977a/'>{linkedin}</a>
//                             <span>{' | '}</span>
//                             <a href='mailto:davidsitu626@gmail.com?subject=We are interested in connecting'>{contact}</a>
//                         </div>
                        
//                     </Col>
//                     {/* <Col className='pic'>
//                         <img src={me} style={{width: '100%', height: '400px'}} />
//                     </Col> */}
//                     <Col className='about'>
//                     <AutoplaySlider style={{height: '500px'}} play={true} cancelOnInteraction={false} interval={3000} animation='fallAnimation' cssModule={[CoreStyles, AnimationStyles]}>
//                         <div data-src={me} />
//                         <div data-src={spring07} />
//                         <div data-src={summer07} />
//                         <div data-src={spring08} />
//                         <div data-src={hoodie} />
//                         <div data-src={tar} />
//                         <div data-src={rainbow} />
//                     </AutoplaySlider>
//                     </Col>
//                 </Row>
//             </Container>
//         </Styles>
//     </div>
// )
const Styles = styled.div`

    h1 {
        padding: 20px;
        font-size: 30px;
        border-bottom: 2px solid black;
    }
    .main {
        
    }

    ProgressBar {
        height: 50px;
        width: 600px;
    }

    .subtitle {
        font-size: 40px;
        font-weight: bold;
        margin-top: 40px;
        margin-right: 856px;
        margin-bottom: 20px;
        justify-content: left;
        padding-bottom: 5px;
        padding-left: 40px;
        border-bottom: 3px solid black;
    }

    .capable {
        border: 1px solid lightgray;
        border-radius: 10%;
        margin-right: 50px;
        padding: 20px;
        text-align: center;
    }

    .st {
        margin-right: 0;
    }
    .skills {
        font-size: 27px;
        line-height: 3;
        font-weight: bold;
    }


`

export const About = () => (
    <Styles>
        <div className='main'>
            <div className='subtitle'>
                Capabilities
            </div>
            <Container>
                <Row>
                    <Col className='capable'>
                        <h1>
                            Languages
                        </h1>
                        <ul style={{listStyle: 'none'}}>
                            <li className='skills'>HTML</li>
                            <li className='skills'>CSS</li>
                            <li className='skills'>Javascript</li>
                            <li className='skills'>Python</li>
                            <li className='skills'>SQL</li>
                        </ul>
                    </Col>
                    <Col className='capable'>
                        <h1>
                            Frameworks
                        </h1>
                        <ul style={{listStyle: 'none'}}>
                            <li className='skills'>React</li>
                            <li className='skills'>Node</li>
                            <li className='skills'>Knex</li>
                        </ul>
                    </Col>
                    <Col className='capable st'>
                        <h1>
                            Software Tools
                        </h1>
                        <ul style={{listStyle: 'none'}}>
                            <li className='skills'>SQLite</li>
                            <li className='skills'>PostGres</li>
                            <li className='skills'>Git</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    </Styles>
)