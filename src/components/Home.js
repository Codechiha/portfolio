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
import me from '../assets/pro-pic-pencils.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Styling
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />

// This is the Home Page
const Styles = styled.div`

    a {
        color: black;
        &:hover {
            color: red;
        }
    }

    .main {  
        
        @media ${XS}, ${S} {
            background-image: none;
            border: none;
            width: 95%;
        }

        @media ${L} {
            background-image: url(${me});
            background-position: center bottom;
            background-repeat: no-repeat;
            min-height: 570px;
            border: 1px solid lightgray;
            border-radius: 1%;
            width: 95%;
        }
    }

    .description {
        @media ${XS}, ${S}, ${M} {
            display: flex;
            flex-direction: column;
        }

        @media ${L} {
            display: flex;
            flex-direction: row;
        }
    }

    .desc1 {
        @media ${XS}, ${S}, ${M} {
            padding-left: 51px;
            padding-top: 70px;
            min-height: 280px;
            border: 1px solid lightgray;
            border-radius: 1%;
            margin-bottom: 71px;

            h4 {
                font-size: 40px;
            }
        }

        @media ${L} {
            display: flex;
            color: black;
            flex-direction: column;
            min-height: 570px;
            justify-content: flex-start;
            padding-top: 125px;
            padding-left: 75px;
            border: none;
            
            h4 {
                font-size: 40px;
            }
        }

        @media ${XL} {
            h4 {
                font-size: 60px;
            }
        }
    }

    .desc2 {
        @media ${XS}, ${S}, ${M} {
            padding-left: 40px;
            padding-top: 30px;
            min-height: 303px;
            border: 1px solid lightgray;
            border-radius: 1%;

            h4 {
                font-size: 40px;
            }     
        }
        @media ${L} {
            display: flex;
            color: black;
            flex-direction: column;
            min-height: 570px;
            justify-content: flex-start;
            padding-top: 200px;
            padding-left: 345px;
            border: none;
            
            h4 {
                font-size: 40px;
            }
        }
        
        @media ${XL} {
            h4 {
                font-size: 60px;
            }
        }
    }

    .skills {
        display: flex;
        flex-direction: row;
    }

    .section {
        height: 400px;
        border: 1px solid lightgray;
        border-radius: 1%;
        width: 30%;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .three {
        margin-right: 0;
    }
`;

//Change font, add some js functions

export const Home = () => (
    <Styles>
        <div>
            <Navi />
            <Container className='main'>
                <Row className='description'>
                    <Col className='desc1'>
                        <h4>Full-Stack Web Developer</h4>
                        <p>Equipped to handle User interface, Front-end, and Back-end Development</p>
                    </Col>
                    <Col className='desc2'>
                        <a href='https://github.com/Codechiha' style={{color: 'black'}}><h4>{'Problem Solver'}</h4></a>
                        <p>Changing the world by solving one problem at a time</p>
                    </Col>
                </Row>
                
            </Container>
        </div>
    </Styles>
)


