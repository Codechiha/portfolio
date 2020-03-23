import React from 'react';

//Components
import { Navi } from './Navi';

//Fonts and Images
import bg from '../assets/matrix-rain.jpg';

//Styling
import styled from 'styled-components';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// This portion is for the Projects I want to highlight
// 1. The Labs Project that needs debugging
// 2. An HTML/CSS Project
// 3. A React Frontend Project
// 4. A React Backend Project
// 5. A Python Project?

// Next Component should be a Contacts Section with Forms

const Styles = styled.div`
    .main {
        border: 1px solid red;
        // background-image: url(${bg});
        // background-position: center;
        // background-repeat: no-repeat;
        // background-size: cover;
    }

    .card {
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        min-height: 500px;
    }

    .title {
        font-weight: bold;
    }

    // .description {
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    // }
`;


export const Projects = () => (
    <Styles>
        <Navi />
        <Container fluid className='main'>
            <Container>
                <Row className='card'>
                    <Col className='description'>
                        <h3 className='title'>User Interface Design For the S&#38;J Company</h3>
                        <p>
                            Recreated the Client's desired design and functions for their company website using <strong>HTML/CSS/JS</strong>
                        </p>
                        <Button variant="primary" href='https://github.com/Codechiha/User-Interface-Project-Week'>Project</Button>
                    </Col>
                    <Col>
                        <img variant="top" src="holder.js/100px180" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='card'>
                    <Col className='description'>
                        <h3 className='title'>Front-end Interface For a Shared API to Create Notes</h3>
                        <p>
                            INclude a better description for this Lambda Notes Project, The Image should link to the netlify https://thirsty-lalande-ce5308.netlify.com/
                        </p>
                        <Button variant="primary">The Button Link should go to the github</Button>
                    </Col>
                    <Col>
                        <img variant="top" src="holder.js/100px180" />
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
                        <Button variant="primary">Go somewhere</Button>
                    </Col>
                    <Col>
                        <img variant="top" src="holder.js/100px180" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='card'>
                    <Col className='description'>
                        <h3 className='title'>Project 4</h3>
                        <p>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </p>
                        <Button variant="primary">Go somewhere</Button>
                    </Col>
                    <Col>
                        <img variant="top" src="holder.js/100px180" />
                    </Col>
                </Row>
            </Container>
        </Container>
    </Styles>
)


