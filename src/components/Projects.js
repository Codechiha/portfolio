import React from 'react';
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

//Components
import { Navi } from './Navi';

//Fonts and Images
import bg from '../assets/matrix-rain.jpg';
import refugeeHome from '../assets/refugeeSC.PNG';
import refugeeVideo from '../assets/refugee.mp4';
import snj from '../assets/snj.PNG';
import snjVideo from '../assets/snj.mp4';

//Styling
import styled from 'styled-components';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import "node_modules/video-react/dist/video-react.css";

//Fonts and Images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />

// This portion is for the Projects I want to highlight
// 1. The Labs Project that needs debugging
// 2. An HTML/CSS Project
// 3. A React Frontend Project
// 4. A React Backend Project
// 5. A Python Project?

// Next Component should be a Contacts Section with Forms

const Styles = styled.div`
    .main {
        // background-image: url(${bg});
        // background-position: center;
        // background-repeat: no-repeat;
        // background-size: cover;
        margin-top: 10px;
    }

    .card {
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        min-height: 700px;
    }

    .title {
        font-weight: bold;
    }    
    
    .img {
        display: flex;
        align-items: center;
    }

    .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .title {
        margin-bottom: 40px;
    }

    .links {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        a {
            color: black;
        }
    }
`;


export const Projects = () => (
    <Styles>
        <Navi />
        <Container fluid className='main'>
            <Container>
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
                        <h3 className='title'>Refugee Awareness</h3>
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
            <Container>
                <Row className='card'>
                    <Col className='description'>
                        <h3 className='title'>Project 3</h3>
                        <p>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </p>
                        <div className='links'>
                            <a href=''>{github}</a>
                            <span>{' | '}</span>
                            <a href='' target='_blank'>Website</a>
                        </div>
                    </Col>
                    <Col className='img'>
                        <img variant="top" src="holder.js/100px180" />
                    </Col>
                </Row>
            </Container>
        </Container>
    </Styles>
)


