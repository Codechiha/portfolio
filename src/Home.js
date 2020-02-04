import React from 'react';
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import brucelee from './assets/profile-bgless.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const coffee = <FontAwesomeIcon icon={faCoffee} />
const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />

// This is the Home Page
// Include an interactive background

const Styles = styled.div`
    .main {
        border: 1px solid red;
        margin-top: 4em;

    }

    profile-img {
        border: 1px solid white;
    }

    .mission {
        color: white;
        flex-flow: column;
        border: 1px solid black;
        
        p {
            border: 1px solid black;
            margin: 2em auto;
            font-size: 20px;
        }

        .projects-link {
            color: white;
        }
    }

    .projects-button {
        margin-bottom: 20px;
    }

    .social-links {
        flex-flow: row;
        justify-content: space-
    }
`;

//Change font, add some js functions

export const Home = () => (
    <Styles>
    <Container className='main'>
        <Row >
            <Col 
                className='profile-img'><Image src={brucelee} rounded fluid/>
            </Col>
            <Col className='mission'>
                <h1>David Situ</h1>
                <h4>Full Stack Web Developer</h4>
                <p>Build beautiful websites</p>           
                <Button className='projects-button'><Nav.Link href="/projects" className='projects-link'>Projects</Nav.Link></Button>
                <div className='social-links'><a href='#'>{github}   |</a><a href='#'>   {linkedin}   |</a><a href='#'>   {contact}</a></div>
            </Col>
        </Row>
    </Container>
    </Styles>
)


