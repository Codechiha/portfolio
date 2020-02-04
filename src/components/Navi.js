import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';

// This is the Top Navigation Bar

const Styles = styled.div`

    .navbar{
        flex-flow: row;
        justify-content: space-between;
        height: 2em;
        background-color: black;
    }

    .brand{
        color: white;
    }

    .nav {
        
    }

`;

export const Navi = () => (
    <Styles>
        <Navbar variant="dark" fixed='top' className='navbar'>
            <Navbar.Brand href="/" className='brand'>David's Profile</Navbar.Brand>
            <Nav className='nav' >
                <Nav.Link href="/resume" style={{color: 'white'}}>Skills</Nav.Link>
                <Nav.Link href="/projects" style={{color: 'white'}}>Projects</Nav.Link>
            </Nav>
        </Navbar>
    </Styles>
)