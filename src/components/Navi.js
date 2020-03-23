import React from 'react';

//Components
import { NavLink } from 'react-router-dom';

//Fonts and Images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

//Styling
import styled from 'styled-components';

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />

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
            <NavLink exact to="/" className='brand'>David's Profile</NavLink>
            <div className='links'>
                <div className='worded'>
                    <NavLink to="/about" style={{color: 'white'}}>About</NavLink>
                    <a href='https://resume.creddle.io/resume/gqg7n9l0lsi' style={{color: 'white'}}>Resume</a>
                    <NavLink to="/projects" style={{color: 'white'}}>Projects</NavLink>
                </div>
                <div className='social-media'>
                    <a href='https://github.com/Codechiha'>{github}</a>
                    <a href='https://www.linkedin.com/in/david-situ-8514977a/'>{linkedin}</a>
                    <a href='mailto:davidsitu626@gmail.com?subject=We are interested in connecting'>{contact}</a>
                </div>
            </div>
        </div>
    </Styles>
)