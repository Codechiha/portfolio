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
const github = <FontAwesomeIcon icon={faGithub} className='fa-3x'/>
const linkedin = <FontAwesomeIcon icon={faLinkedin} className='fa-3x'/>
const contact = <FontAwesomeIcon icon={faEnvelope} className='fa-3x'/>


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
        border: 1px solid lightgray;
        background-color: #8a2019;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
        outline: 1px solid;
        outline-color: rgba(255, 255, 255, 0.5);
        outline-offset: 0px;
        text-shadow: none;
        transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
        letter-spacing: 4px;
        position: relative;

        &:hover {
            background-color: black;
            text-decoration: none;
            border: 1px solid lightgray;
            outline-color: rgba(255, 255, 255, 0);
            outline-offset: 15px;
            text-shadow: 2px 2px 2px #427388;
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
        margin-bottom: 40px;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .intro-p {
        margin-bottom: 40px;
    }

    .next {
        font-size: 18px;
        font-weight: bold;
        color: lightgray;
        letter-spacing: 2px;
        text-align: center;
    }

    .links {
        display: flex;
        justify-content: center;
        margin-top: 80px;
        
        a {
            margin-right: 25px;
            margin-left: 25px;

            &:hover {
            }
        }
    }
`

export const Home = () => (
    <Styles>
        <div className='main'>
            <img className='logo' src={logo} />
            <h2 className='intro'>
                Full Stack Web Developer
            </h2>
            <p className='intro-p'>Bringing your website to reality with my keyboard</p>
            <div className='next'>
                <div className='buttons'>
                    <button className='button'>
                        <NavLink to="/projects" style={{color: '#e3e1da'}}>Projects</NavLink>
                    </button>
                    <button className='button'>
                        <a href='mailto:davidsitu626@gmail.com?subject=We are interested in connecting' style={{color: '#e3e1da'}}>Contact</a>
                    </button>
                </div>
                <div className='links'>
                    <a href='https://github.com/Codechiha' className='link' target="_blank" style={{color: '#969389'}}>{github}</a>
                    <a href='https://www.linkedin.com/in/david-situ-8514977a/' className='link' target="_blank" style={{color: '#969389'}}>{linkedin}</a>
                </div>
            </div>
        </div>
    </Styles>
)
