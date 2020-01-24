import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import brucelee from './assets/profile-bgless.png';

const Styles = styled.div`
    .main {
        border: 1px solid red;
        margin-top: 4em;

    }
`;


export const Home = () => (
    <Styles>
    <Container className='main'>
        <Row >
            <Col 
                className='img'><Image src={brucelee} rounded fluid/>
            </Col>
            <Col className='mission'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
            </Col>
        </Row>
    </Container>
    </Styles>
)


