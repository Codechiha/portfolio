import React from 'react';
import { Navi } from './Navi';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .main {
        min-height: 500px;
        border: 1px solid red;
    }

    .about{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

`
export const About = () => (
    <div>
        <Styles>
            <Navi />
            <Container fluid className='main'>
                <Row>
                    <Col className='about'>
                        <h3>David Situ</h3>
                        <p>Elevator Pitch</p>
                        <p>links to Resume, Github, Linkedin, Email</p>
                    </Col>
                    <Col className='pic'>
                        <h3>Professional Picture</h3>
                    </Col>
                </Row>
            </Container>
        </Styles>
    </div>
)