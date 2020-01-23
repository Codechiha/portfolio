import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
    <Container>
        {props.children}
        {console.log(props.children)}
    </Container>
)