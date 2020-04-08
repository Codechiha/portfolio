import React from 'react';

import {
    XS,
    S,
    M,
    L,
    XL
} from '../global/global';

//Components
import { NavLink } from 'react-router-dom';

//Fonts and Images
import logo from '../assets/dslogowhite.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

//Styling
import styled from 'styled-components';

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />

const Styles = styled.div`

    .navbar{
        flex-flow: row;
        justify-content: space-between;
        height: 4em;
        width: 100%;
        background-color: black;
        margin-bottom: 100px; 
    }


    .brand{
        color: white;
    }

    .links {
        width: 45%;
        display: flex;
        flex-direction: row;


    }

    .worded {
        margin-right: 10%;
        width: 55%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .social-media {
        width: 35%;
        display: flex;
        justify-content: space-between;
    }

`;

export const Navi = () => (
    <Styles>
        <div variant="dark" fixed='top' className='navbar'>
            <NavLink exact to="/" className='brand'><img src={logo} style={{width: '150px'}}/></NavLink>
            <div className='links'>
                <div className='worded'>
                    <NavLink to="/about" style={{color: 'white'}}>About</NavLink>
                    <a href='https://resume.creddle.io/resume/gqg7n9l0lsi' target="_blank" style={{color: 'white'}}>Resume</a>
                    <NavLink to="/projects" style={{color: 'white'}}>Projects</NavLink>
                </div>
                <div className='social-media'>
                    <a href='https://github.com/Codechiha' target="_blank" style={{color: 'white'}}>{github}</a>
                    <a href='https://www.linkedin.com/in/david-situ-8514977a/' target="_blank" style={{color: 'white'}}>{linkedin}</a>
                    <a href='mailto:davidsitu626@gmail.com?subject=We are interested in connecting' style={{color: 'white'}}>{contact}</a>
                </div>
            </div>
        </div>
    </Styles>
)