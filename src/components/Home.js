import React from 'react';

//Global Variables
import {
    phoneP,
    phoneL,
    tabletP,
    tabletL
} from '../global/global';

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
        z-index: -1;
        background-image: url(${me});
        background-position: center bottom;
        background-repeat: no-repeat;
        min-height: 570px;
        border: 1px solid lightgray;
        border-radius: 1%;
        
        @media ${tabletL} {
            background-position: top center;
            padding-top: 500px;
            z-index: -1;
        }
    }

    .description {
        @media ${tabletL} {
            display: flex;
            flex-direction: column;
        }
    }

    .desc1 {
        display: flex;
        color: black;
        flex-direction: column;
        min-height: 570px;
        justify-content: flex-start;
        padding-top: 200px;
        padding-left: 75px;

        @media ${tabletL} {
            // min-height: 250px;
            // padding-top: 20px;
            // padding-left: 20px;
            // width: 30%;
            align-items: flex-start;
            flex-direction: column;
            width: 45%;
            padding-top: 50px;
            min-height: 250px;
            border: 1px solid red;
        }
    }

    .desc2 {
        display: flex;
        color: black;
        flex-direction: column;
        min-height: 570px;
        justify-content: center;
        padding-left: 356px;

        @media ${tabletL} {
            flex-direction: row;
            min-height: 250px;
            padding-top: 20px;
            padding-left: 30px;
            border: 1px solid blue;
            // align-items: flex-end;
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
        // margin-right: 10px;
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
            <div className='main-img' />
            <Row className='description'>
                <Col className='desc1'>
                    <a href='https://github.com/Codechiha' style={{color: 'black'}}><h4>{'<Codechiha>'}</h4></a>
                    <p>Join me on my journey to becoming the best full stack web developer I can be</p>
                </Col>
                <Col className='desc2'>
                    <h4>Full-Stack Web Developer</h4>
                    <p>My studies with Lambda School includes Javascript, Python, and SQL languages</p>
                </Col>
            </Row>
            
        </Container>
        {/* <Container className='skills'>
            <Container className='section'>
                <h5>Front End</h5>
                    <p>HTML/CSS</p>
                    <p>Javascript</p>
                    <p>React</p>
            </Container>
            <Container className='section'>
                <h5>Back End Capabilities</h5>
                    <p>Python</p>
                    <p>SQL</p>
            </Container>
        </Container> */}
    </div>
    </Styles>
)


