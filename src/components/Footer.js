import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        flex-flow: row;
        justify-content: space-evenly;
    }

    .nav {
        
    }

`;

export const Footer = () => (
    <Styles>
        <Navbar bg="dark" variant="dark" fixed='bottom' className='navbar'>
            <Nav className='nav' >
                <Nav.Link href="/" style={{color: 'blue'}}>Github</Nav.Link>
                <Nav.Link href="/" style={{color: 'blue'}}>Facebook</Nav.Link>
                <Nav.Link href="/" style={{color: 'blue'}}>LinkedIn</Nav.Link>
                <Nav.Link href="/" style={{color: 'blue'}}>Instagram</Nav.Link>
            </Nav>
        </Navbar>
    </Styles>
)