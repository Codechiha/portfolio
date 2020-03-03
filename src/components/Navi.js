import React from 'react';
import styled from 'styled-components';

// This is the Top Navigation Bar

const Styles = styled.div`

    .navbar{
        flex-flow: row;
        justify-content: space-between;
        height: 2em;
        width: 100%;
        background-color: black;
        border: 1px solid yellow;
    }

    .brand{
        color: white;
    }

    .nav {
        
    }

`;

export const Navi = () => (
    <Styles>
        <div variant="dark" fixed='top' className='navbar'>
            <h1 href="/" className='brand'>David's Profile</h1>
            <div className='nav' >
                <a href="/resume" style={{color: 'white'}}>Skills</a>
                <a href="/projects" style={{color: 'white'}}>Projects</a>
            </div>
        </div>
    </Styles>
)