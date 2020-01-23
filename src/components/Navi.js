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
        <Navbar bg="dark" variant="dark" className='navbar'>
            <Navbar.Brand href="/" className='brand'>David's Profile</Navbar.Brand>
            <Nav className='nav' >
                <Nav.Link href="/" style={{color: 'blue'}}>Home</Nav.Link>
                <Nav.Link href="/about" style={{color: 'blue'}}>About</Nav.Link>
                <Nav.Link href="/pricing" style={{color: 'blue'}}>Pricing</Nav.Link>
            </Nav>
        </Navbar>
    </Styles>
)