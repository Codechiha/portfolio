import React from 'react';
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

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
import refugeeHome from '../assets/refugeeSC.PNG';
import refugeeVideo from '../assets/refugee.mp4';
import snj from '../assets/snj.PNG';
import snjVideo from '../assets/snj.mp4';
import enter from '../assets/black-keyboard.jpg';

//Styling
import styled from 'styled-components';
import { Container, Row, Col, Card, Button, Accordion, AccordionCollapse } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

// import "node_modules/video-react/dist/video-react.css";

//Fonts and Images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';



const github = <FontAwesomeIcon icon={faGithub} className='fa-2x'/>
// const linkedin = <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
// const contact = <FontAwesomeIcon icon={faEnvelope} className='fa-2x'/>
const externalLink = <FontAwesomeIcon icon={faExternalLinkSquareAlt} className='fa-2x' />


const Styles = styled.div`

//================================= Animation for Social Media Icons ============================================

    @keyframes tada {
        0% {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
        
        10%, 20% {
            -webkit-transform: scale(.9) rotate(-8deg);
            -ms-transform: scale(.9) rotate(-8deg);
            transform: scale(.9) rotate(-8deg);
        }
        
        30%, 50%, 70% {
            -webkit-transform: scale(1.3) rotate(8deg);
            -ms-transform: scale(1.3) rotate(8deg);
            transform: scale(1.3) rotate(8deg);
        }
        
        40%, 60% {
            -webkit-transform: scale(1.3) rotate(-8deg);
            -ms-transform: scale(1.3) rotate(-8deg);
            transform: scale(1.3) rotate(-8deg);
        }
        
        80% {
            -webkit-transform: scale(1) rotate(0);
            -ms-transform: scale(1) rotate(0);
            transform: scale(1) rotate(0);
        }
    }

//=============================== Styling for Components ================================================

    .main {
        background-image: url(${enter});
        height: 100%;
        background-position: center;
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
        margin-bottom: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .title {
        color: #e3e1da;
        font-weight: bold;
        font-size: 1.75rem;
        margin-bottom: 40px;
    }

    .row {
        @media ${XS}, ${S} {
            display: flex;
            flex-direction: column;
        }

        @media ${L} {
            display: flex;
            flex-direction: row;
        }
    }

    .column {
        @media ${XS}, ${S} {
            margin-top: 40px;
            padding-bottom: 39px;
            border-bottom: 1px solid white;
        }

        @media ${M} {
            border-bottom: none;
        }
        
    }

    .links {
        display: flex;
        justify-content: center;
        margin-top 40px;

        a {
            margin-right: 25px;

            &:hover {
                -webkit-animation: tada 2s linear infinite;
                animation: tada 2s linear infinite;
            }
        }
    }

    .external {
        &:hover {

        }
    }

    .video {
        height: 522.14px;
    }

    .accordion {
        button {
            font-family: sansation-bold;
            font-size: 20px
            font-weight: bold;
            letter-spacing: 4px;
            padding: 20px 30px;
            background-color: #8a2019;
            text-align: center;
            margin-top: 40px;

            box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
            outline: 1px solid;
            outline-color: rgba(255, 255, 255, 0.5);
            outline-offset: 0px;
            text-shadow: none;
            transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
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
        
    }

    .card-body {
        font-family: sansation-regular;
        font-size: 20px;
        color: #e3e1da;
        background-color: black;
        border: 1px solid white;
        margin-top: 20px;
    }
`;

export const Projects = () => (
    <Styles>
        <div className='main'>
        <Navi />
        <h2 className='intro'>
            Projects
        </h2>
        <Container className='container'>
            <Row className='row'>
                <Col className='column one'>
                    <h3 className='title'>S&#38;J Company</h3>
                    <Player poster={snj} src={snjVideo} className='video'/>
                    <Accordion style={{textAlign: 'center'}}>
                        <Accordion.Toggle eventKey="0" className='accordion' style={{color: '#e3e1da'}}>
                           Click for more information
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey='0'>
                            <Card.Body className='card-body'>
                                <p>This is an informational website for the SJ Architect Company</p>
                                <p><strong>Tech Stack:</strong> HTML, CSS, Javascript</p>
                                <p><strong>My Responsibilties: </strong> Entire Website</p>
                                <div className='links'>
                                    <a href='https://github.com/Codechiha/User-Interface-Project-Week' className='link' target="_blank" style={{color: '#c7c6c5'}}>{github}</a>
                                    <a href='https://serene-shaw-9adf0c.netlify.com/' className='link external' target="_blank" style={{color: '#c7c6c5'}}>{externalLink}</a>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                </Col>  
                <Col className='column two'>
                    <h3 className='title'>Refugee Awareness</h3>
                    <Player poster={refugeeHome} src={refugeeVideo} className='video'/>
                    <Accordion style={{textAlign: 'center'}}>
                        <Accordion.Toggle eventKey="0" className='accordion' style={{color: '#e3e1da'}}>
                           Click for more information
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey='0'>
                            <Card.Body className='card-body'>
                                <p>This website provides information about Refugees and allows users to share stories</p>
                                <p><strong>Tech Stack:</strong> React, JSX, Knex, SQL, SQLite3, various React Dependencies</p>
                                <p><strong>My Responsibilties: </strong>Entire Website, Front-end, Back-end</p>
                                <div className='links'>
                                    <a href='https://github.com/Codechiha/refugee-info' className='link' target="_blank" style={{color: '#c7c6c5'}}>{github}</a>
                                    <a href='https://silly-varahamihira-4fd65b.netlify.com/' className='link external' target="_blank" style={{color: '#c7c6c5'}}>{externalLink}</a>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>   
                </Col>
            </Row>
        </Container>
            {/* <Container fluid>
                `<Container>
                    <Row className='card'>
                        <Col className='description'>
                            <h3 className='title'>S&#38;J Company</h3>
                            <p>
                                Recreated the Client's design and incorporated Javascript click event handlers for buttons and menu options. This project was an opportunity to showcase the depth of my understanding of HTML and CSS, while the Javascript event handlers was a stretch goal.</p> 
                            <p>This project was built using: 
                                <strong>HTML/CSS/JS</strong>
                            </p>
                            <div className='links'>
                                <a href='https://github.com/Codechiha/User-Interface-Project-Week'>{github}</a>
                                <span>{' | '}</span>
                                <a href='https://serene-shaw-9adf0c.netlify.com/' target='_blank'>Website</a>
                            </div>
                        </Col>
                        <Col className='img'>
                            <Player
                                poster={snj}
                                src={snjVideo}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='card'>
                        <Col className='description'>
                            <h3 className='title' style={{lineHeight: '36.5px'}}>Refugee Awareness</h3>
                            <p>
                                This was a team project consisting of 4 team members. The roles included: front-end, back-end, User Interface, and scrum leader. My role was the backend, which I created using the React framework, JSX language, utilizing Knex.js library and SQLite 3 as my Database Manager. I created the Stories Database in order to persist the stories shared by the users. A Users Database was created to allow users to log-in to share stories. Password security was programmed using JSON Web Token and bcrypt React libraries to ensure our users' login information was encrypted while persisting in our Database.

                                This project was not only an opportunity for me to develop my back-end abilities with hashing and database management, but I am also very concerned about the ongoing refugee crises from the Middle East and from South America.

                                Recently I discovered the front-end stopped rendering, so I am currently developing the front-end.
                            </p>
                            <div className='links'>
                                <a href='https://github.com/Codechiha/refugee-info'>{github}</a>
                                <span>{' | '}</span>
                                <a href='https://silly-varahamihira-4fd65b.netlify.com/' target='_blank'>Website</a>
                            </div>
                        </Col>
                        <Col className='img'>
                            <Player 
                                fluid='false'
                                poster={refugeeHome}
                                src={refugeeVideo}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container> */}
        </div>
        
    </Styles>
)


