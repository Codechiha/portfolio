import React from 'react';

//Components
import Navi from './Navi';

//Fonts and Images
import me from '../assets/professional-picture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

//Styling
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />

const Styles = styled.div`

    h3 {
        margin-bottom: 40px;
    }

    a {
        color: black;
        &:hover {
            color: red;
        }
    }

    .row {
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        min-height: 600px;
        align-items: center;
        justify-content: space-between;
        border: 1px solid lightgray;
        border-radius: 1%;
    }

    .about{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .links {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
`
export const About = () => (
    <div>
        <Styles>
            <Navi />
            <Container className='main'>
                <Row className='row'>
                    <Col className='about'>
                        <h3>David Situ</h3>
                        <p>A survivor of the vigorous Full-Stack Web Development program at Lambda School. 
                            The intensive course teaches Front-end including HTML, CSS, Javascript, and React. 
                            Back-end includes Python, API, Hashing, Blockchain, Testing, and Computer Architecture. 
                            Also included in my toolbelt is a B.A in Psychology, 
                            which comes with abilities of the scientific method, observation, data analysis, and detailed communication.</p>
                        <div className='links'>
                            <a href='https://resume.creddle.io/resume/gqg7n9l0lsi'>Resume</a>
                            <span>{' | '}</span>
                            <a href='https://github.com/Codechiha'>{github}</a>
                            <span>{' | '}</span>
                            <a href='https://www.linkedin.com/in/david-situ-8514977a/'>{linkedin}</a>
                            <span>{' | '}</span>
                            <a href='mailto:davidsitu626@gmail.com?subject=We are interested in connecting'>{contact}</a>
                        </div>
                        
                    </Col>
                    <Col className='pic'>
                        <img src={me} style={{width: '100%', height: '400px'}} />
                    </Col>
                </Row>
            </Container>
        </Styles>
    </div>
)