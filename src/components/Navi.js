import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />
// This is the Top Navigation Bar

const Styles = styled.div`

    a {
        font-size: 13px;
    }

    .navbar{
        flex-flow: row;
        justify-content: space-between;
        height: 4em;
        width: 100%;
        background-color: black;
        border: 1px solid yellow;
    }

    .brand{
        color: white;
    }

    .links {
        border: 1px solid white;
        width: 45%;
        display: flex;
        flex-direction: row;
    }

    .worded {
        border: 1px solid purple;
        margin-right: 10%;
        width: 55%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .social-media {
        border: 1px solid lightblue;
        width: 35%;
        display: flex;
        justify-content: space-between;
    }

`;

export const Navi = () => (
    <Styles>
        <div variant="dark" fixed='top' className='navbar'>
            <h1 href="/" className='brand'>David's Profile</h1>
            <div className='links'>
                <div className='worded'>
                    <a href="/about" style={{color: 'white'}}>About</a>
                    <a href="/resume" style={{color: 'white'}}>Skills</a>
                    <a href="/projects" style={{color: 'white'}}>Projects</a>
                </div>
                <div className='social-media'>
                    <a href='#'>{github}</a>
                    <a href='#'>{linkedin}</a>
                    <a href='#'>{contact}</a>
                </div>
            </div>
        </div>
    </Styles>
)