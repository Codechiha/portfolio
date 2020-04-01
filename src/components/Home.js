import React from 'react';

//Components
import { Navi } from './Navi';

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
// Include an interactive background

const Styles = styled.div`

    .main {
        background-image: url(${me});
        background-position: center bottom;
        background-repeat: no-repeat;
        min-height: 570px;
        z-index: -1;
        border: 1px solid lightgray;
        border-radius: 1%;
        margin-top: 10px;
    }

    .skill1 {
        display: flex;
        color: black;
        flex-direction: column;
        min-height: 570px;
        justify-content: flex-start;
        padding-top: 200px;
        padding-left: 75px;
    }

    .skill2 {
        display: flex;
        color: black;
        flex-direction: column;
        min-height: 570px;
        justify-content: center;
        padding-left: 356px;
    }
`;

//Change font, add some js functions

export const Home = () => (
    <Styles>
    <div>
        <Navi />
        <Container className='main'>
        <Row>
            <Col className='skill1'>
                <a href='https://github.com/Codechiha' style={{color: 'black'}}><h4>Codechiha</h4></a>
                <p>Join me on my journey to becoming the best full stack web developer I can be</p>
            </Col>
            <Col className='skill2'>
                <h4>Full-Stack Web Developer</h4>
                <p>My studies with Lambda School includes Javascript, Python, and SQL languages</p>
            </Col>
        </Row>
        </Container>
    </div>
    </Styles>
)


