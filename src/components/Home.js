import React from 'react';

//Global Variables
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
import logo from '../assets/dslogowhite2.png';
import me from '../assets/pro-pic-pencils.png';
import typing from '../assets/black-keyboard.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Styling
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import {NavLink} from 'react-router-dom';

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />

// This is the Home Page
// const Styles = styled.div`

//     a {
//         color: black;
//         &:hover {
//             color: red;
//         }
//     }

//     .main {  
        
//         @media ${XS}, ${S} {
//             background-image: none;
//             border: none;
//             width: 95%;
//         }

//         @media ${L} {
//             background-image: url(${me});
//             background-position: center bottom;
//             background-repeat: no-repeat;
//             min-height: 570px;
//             border: 1px solid lightgray;
//             border-radius: 1%;
//             width: 95%;
//         }
//     }

//     .description {
//         @media ${XS}, ${S}, ${M} {
//             display: flex;
//             flex-direction: column;
//         }

//         @media ${L} {
//             display: flex;
//             flex-direction: row;
//         }
//     }

//     .desc1 {
//         @media ${XS}, ${S}, ${M} {
//             padding-left: 51px;
//             padding-top: 70px;
//             min-height: 280px;
//             border: 1px solid lightgray;
//             border-radius: 1%;
//             margin-bottom: 71px;

//             h4 {
//                 font-size: 40px;
//             }
//         }

//         @media ${L} {
//             display: flex;
//             color: black;
//             flex-direction: column;
//             min-height: 570px;
//             justify-content: flex-start;
//             padding-top: 125px;
//             padding-left: 75px;
//             border: none;
            
//             h4 {
//                 font-size: 40px;
//             }
//         }

//         @media ${XL} {
//             h4 {
//                 font-size: 60px;
//             }
//         }
//     }

//     .desc2 {
//         @media ${XS}, ${S}, ${M} {
//             padding-left: 40px;
//             padding-top: 30px;
//             min-height: 303px;
//             border: 1px solid lightgray;
//             border-radius: 1%;

//             h4 {
//                 font-size: 40px;
//             }     
//         }
//         @media ${L} {
//             display: flex;
//             color: black;
//             flex-direction: column;
//             min-height: 570px;
//             justify-content: flex-start;
//             padding-top: 200px;
//             padding-left: 345px;
//             border: none;
            
//             h4 {
//                 font-size: 40px;
//             }
//         }
        
//         @media ${XL} {
//             h4 {
//                 font-size: 60px;
//             }
//         }
//     }

//     .skills {
//         display: flex;
//         flex-direction: row;
//     }

//     .section {
//         height: 400px;
//         border: 1px solid lightgray;
//         border-radius: 1%;
//         width: 30%;
//         margin-top: 10px;
//         margin-bottom: 10px;
//     }

//     .three {
//         margin-right: 0;
//     }
// `;

// //Change font, add some js functions

// export const Home = () => (
//     <Styles>
//         <div>
//             <Navi />
//             <Container className='main'>
//                 <Row className='description'>
//                     <Col className='desc1'>
//                         <h4>Full-Stack Web Developer</h4>
//                         <p>Equipped to handle User interface, Front-end, and Back-end Development</p>
//                     </Col>
//                     <Col className='desc2'>
//                         <a href='https://github.com/Codechiha' style={{color: 'black'}}><h4>{'Problem Solver'}</h4></a>
//                         <p>Changing the world by solving one problem at a time</p>
//                     </Col>
//                 </Row>
                
//             </Container>
//         </div>
//     </Styles>
// )



const Styles = styled.div`

    p {
        color: #e3e1da;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 6px;
    }

    .button {
        padding: 20px 30px;
        font-size: 20px;
        font-weight: bold;
        margin: 20px 55px;
        border: 2px solid lightgray;
        background-color: #8a2019;
        color: #e3e1da;
        box-shadow: 5px 5px black;

        &:hover {
            background-color: black;
        }
    }

    .main {
        background-image: url(${typing});
        height: 100vh;
        background-position: center;
    }

    .logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .intro {
        color: #e3e1da;
        font-weight: bold;
        font-size: 59px;
        justify-content: center;
        text-align: center;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        margin-right: 67px;
        margin-left: 67px;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .next {
        font-size: 18px;
        font-weight: bold;
        color: lightgray;
        letter-spacing: 2px;
        text-align: center;
    }

    .buttons {

    }
`

export const Home = () => (
    <Styles>
        <div className='main'>
            <Navi />
            <img className='logo' src={logo} />
            <h2 className='intro'>
                Full Stack Web Developer
            </h2>
            <p>Bringing your website to reality with my keyboard</p>
            <div className='next'>
                <div className='buttons'>
                    <button className='button'>My Projects</button>
                    <button className='button'>Hire Me</button>
                </div>
            </div>
        </div>
    </Styles>
)
