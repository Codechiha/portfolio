import React from 'react';
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import brucelee from './assets/profile-gray.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />

// This is the Home Page
// Include an interactive background

const Styles = styled.div`

    profile-img {
        border: 1px solid white;
    }

    .mission {
        display: flex;
        color: white;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid red;
        margin-top: 3em;
        min-height: 568px;

        h1 {
            font-size: 50px;
        }
        
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
        justify-content: space-between;

        border: 1px solid white;
    }
`;

//Change font, add some js functions

export const Home = () => (
    <Styles>
    {/* <Container className='main'> */}

        <div className='mission'>
            <h1>David Situ</h1>
            <p>Full Stack Web Developer</p>
            {/* <p>Build beautiful websites</p>            */}
            {/* <Button className='projects-button'><Nav.Link href="/projects" className='projects-link'>Projects</Nav.Link></Button> */}
            {/* <div className='social-links'>
                <a href='#'>{github}</a>
                <a href='#'>{linkedin}</a>
                <a href='#'>{contact}</a>
            </div> */}
        </div>

    {/* </Container> */}
    </Styles>
)


