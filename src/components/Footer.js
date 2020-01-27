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
                <Nav.Link href="https://github.com/Codechiha" style={{color: 'blue'}}>Github</Nav.Link>
                <Nav.Link href="https://www.facebook.com/situ1" style={{color: 'blue'}}>Facebook</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/david-situ-8514977a/" style={{color: 'blue'}}>LinkedIn</Nav.Link>
                <Nav.Link href="https://www.instagram.com/situske626/" style={{color: 'blue'}}>Instagram</Nav.Link>
            </Nav>
        </Navbar>
    </Styles>
)