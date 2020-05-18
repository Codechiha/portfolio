import React from 'react';
import {NavLink} from 'react-router-dom';

//Styling
import styled from 'styled-components';

//Global Variables
import {
    XS,
    S,
    M,
    L,
    XL
} from '../global/global';

//Components
import Navi from './Navi';

//Fonts and Images
import logo from '../assets/david-situ.png';
import typing from '../assets/black-keyboard.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// This is the Home Page

const github = <FontAwesomeIcon icon={faGithub} className='fa-3x'/>
const linkedin = <FontAwesomeIcon icon={faLinkedin} className='fa-3x'/>
const contact = <FontAwesomeIcon icon={faEnvelope} className='fa-3x'/>

const Styles = styled.div`

    h2 {
        font-family: sansation-light;
    }

    p {
        font-family: sansation-light;
        color: #e3e1da;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 6px;
    }

    .button {
        font-family: sansation-light;
        padding: 20px 30px;
        font-size: 20px;
        font-weight: bold;
        margin: 20px 55px;
        border: 1px solid lightgray;
        background-color: #8a2019;
        letter-spacing: 4px;

        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
        outline: 1px solid;
        outline-color: rgba(255, 255, 255, 0.5);
        outline-offset: 0px;
        text-shadow: none;
        transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
        position: relative;

        &:hover {
            background-color: black;
            text-decoration: none;
            border: 1px solid lightgray;
            outline-color: rgba(255, 255, 255, 0);
            outline-offset: 15px;
            text-shadow: 2px 2px 2px #427388;
        }
    }

//===================== Responsive Error at 768 - 800px, Error is different when Enlarging Window and Decreasing Window Size

    .main {

        @media ${XS}{
            background-image: url(${typing});
            height: 100%;
            background-position: center
        }

        @media ${S}, ${M}, ${L} {
            height: 100vh;
            background-image: url(${typing});
            background-position: center
        }
    }

    .logo {

        @media ${XS} {
            width: 100%
        }

        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-top: 50px;
        margin-bottom: 60px;
    }

    .intro {
        color: #e3e1da;
        font-weight: bold;
        font-size: 59px;
        justify-content: center;
        text-align: center;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        margin-right: 67px;
        margin-left: 67px;
        margin-bottom: 40px;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .intro-p {
        margin-bottom: 40px;
    }

    .next {
        font-size: 18px;
        font-weight: bold;
        color: lightgray;
        letter-spacing: 2px;
        text-align: center;
    }

//====================== Animation for Social Media Icons ============================
      
    @keyframes tada {
        0% {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
        
        10%, 20% {
            -webkit-transform: scale(.9) rotate(-8deg);
            -ms-transform: scale(.9) rotate(-8deg);
            transform: scale(.9) rotate(-8deg);
        }
        
        30%, 50%, 70% {
            -webkit-transform: scale(1.3) rotate(8deg);
            -ms-transform: scale(1.3) rotate(8deg);
            transform: scale(1.3) rotate(8deg);
        }
        
        40%, 60% {
            -webkit-transform: scale(1.3) rotate(-8deg);
            -ms-transform: scale(1.3) rotate(-8deg);
            transform: scale(1.3) rotate(-8deg);
        }
        
        80% {
            -webkit-transform: scale(1) rotate(0);
            -ms-transform: scale(1) rotate(0);
            transform: scale(1) rotate(0);
        }
    }

    .links {
        display: flex;
        justify-content: center;
        margin-top: 80px;
        
        a {
            margin-right: 25px;
            margin-left: 25px;

            &:hover {
                -webkit-animation: tada 2s linear infinite;
                animation: tada 2s linear infinite;
            }
        }
    }
`;

export const Home = () => (
    <Styles>
        <div className='main'>
            <Navi />
            <img className='logo' src={logo} />
            <h2 className='intro'>
                Full Stack Web Developer
            </h2>
            <p className='intro-p'>Bringing your ideas to reality with my keyboard</p>
            <div className='next'>
                <div className='buttons'>
                    <button className='button'>
                        <NavLink to="/projects" style={{color: '#e3e1da'}}>Projects</NavLink>
                    </button>
                    <button className='button'>
                        <a href='mailto:davidsitu626@gmail.com?subject=We are interested in connecting' style={{color: '#e3e1da'}}>Contact</a>
                    </button>
                </div>
                <div className='links'>
                    <a href='https://github.com/Codechiha' className='link' target="_blank" style={{color: '#c7c6c5'}}>{github}</a>
                    <a href='https://www.linkedin.com/in/david-situ-8514977a/' className='link' target="_blank" style={{color: '#c7c6c5'}}>{linkedin}</a>
                </div>
            </div>
        </div>
    </Styles>
)
