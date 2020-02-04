import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

// This Component is the Footer Bar

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
            David Situ Copyright @2020
        </Navbar>
    </Styles>
)