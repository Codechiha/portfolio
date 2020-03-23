import React from 'react';
import styled from 'styled-components';
//This is just a filler background for now until i get a professionally digital photo
import brucelee from '../assets/red-bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Navi } from './Navi';

import { Container, Row, Col } from 'react-bootstrap';

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />

// This is the Home Page
// Include an interactive background

const Styles = styled.div`
    // .main {
    //     background-image: url(${brucelee});
    //     background-position: center;
    //     background-repeat: no-repeat;
    //     background-size: cover;
    // }

    .skill1 {
        display: flex;
        color: black;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-top: 50px;
        border: 1px solid red;
        min-height: 500px;
    }

    .skill2 {
        display: flex;
        color: black;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        border: 1px solid red;
        min-height: 500px;
    }
`;

//Change font, add some js functions

export const Home = () => (
    <Styles>
    <div className='main'>
        <Navi />
        <Container fluid className='main'>
        <Row >
            <Col className='skill1'>
                <h4>David Situ</h4>
                <p>Full Stack Web Developer</p>
            </Col>
            <Col className='skill2'>
                <h4>Why Does this Look all weird</h4>
                <p>Change the classNames for both Cols and move them. Then put a background image that is photoshopped of me.</p>
            </Col>
        </Row>
        </Container>
    </div>
    </Styles>
)


