import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
//Also just a filler
import brucelee from './assets/matrix-rain.jpg';
import styled from 'styled-components';

// This portion is for the Projects I want to highlight
// 1. The Labs Project that needs debugging
// 2. An HTML/CSS Project
// 3. A React Frontend Project
// 4. A React Backend Project
// 5. A Python Project?

// Next Component should be a Contacts Section with Forms

const Styles = styled.div`
    .main {
        margin-top: 2em;
        border: 1px solid red;
        margin-bottom: 4em;
        background-image: url(${brucelee});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .card {
        margin-bottom: 20px;
    }

    .title {
        font-weight: bold;
    }

    .top-row {
        border: 1px solid blue;
        padding-left: 80px;
    }

    .bottom-row {
        border: 1px solid black;
        padding-left: 80px;
    }
`;


export const Cards = () => (
    <Styles>
    <Container className='main'>
        <Row className='top-row'>
            <Col>
                <Card style={{ width: '13em'}} className='card'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title className='title'>User Interface Design For the S&#38;J Company</Card.Title>
                        <Card.Text>
                            Recreated the Client's desired design and functions for their company website using <strong>HTML/CSS/JS</strong>
                        </Card.Text>
                        <Button variant="primary" href='https://github.com/Codechiha/User-Interface-Project-Week'>Project</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '13em' }} className='card'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title className='title'>Front-end Interface For a Shared API to Create Notes</Card.Title>
                        <Card.Text>
                            INclude a better description for this Lambda Notes Project, The Image should link to the netlify https://thirsty-lalande-ce5308.netlify.com/
                        </Card.Text>
                        <Button variant="primary">The Button Link should go to the github</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className='bottom-row'>
            <Col>
                <Card style={{ width: '13em' }} className='card'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title className='title'>Project 3</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '13em' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title className='title'>Project 4</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </Styles>
)


