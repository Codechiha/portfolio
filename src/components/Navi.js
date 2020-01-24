import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        flex-flow: row;
        justify-content: center;

    }

    .brand{
        color: red;
    }

    .nav {
        
    }

`;

export const Navi = () => (
    <Styles>
        <Navbar bg="dark" variant="dark" fixed='top' className='navbar'>
            <Navbar.Brand href="/" className='brand'>David's Profile</Navbar.Brand>
            <Nav className='nav' >
                <Nav.Link href="/about" style={{color: 'blue'}}>About Me</Nav.Link>
                <Nav.Link href="/resume" style={{color: 'blue'}}>Resume</Nav.Link>
                <Nav.Link href="/projects" style={{color: 'blue'}}>Projects</Nav.Link>
                <Nav.Link href="/blog" style={{color: 'blue'}}>Blog</Nav.Link>
            </Nav>
        </Navbar>
    </Styles>
)