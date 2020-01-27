import React from 'react';
import { Container } from 'react-bootstrap';

// This Component is unnecessary but could be a good technique to Style the Container

export const Layout = (props) => (
    <Container>
        {props.children}
        {console.log(props.children)}
    </Container>
)