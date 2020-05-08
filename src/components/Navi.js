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
import logo from '../assets/dslogowhite2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

//Styling
import styled from 'styled-components';
import { Dropdown, DropdownButton, DropdownItem, ButtonGroup } from 'react-bootstrap';

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />

const Styles = styled.div`

    a {
        color: black;
        &:hover {
            color: red;
        }
    }

    .navbar{
        flex-flow: row;
        justify-content: space-between;
        height: 4em;
        width: 100%;
        background-color: rgba(0,0,0,0.001);
        margin-bottom: 20px;
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

    .dropdown {
        color: white;
        align-items: center;
    }

`;

//Currently state is reading the window size change
//So include a column menu that is onHide or something that is activated with onClick on the meu

class Navi extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            M: false,
        }
        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener('resize', this.updatePredicate);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ 
            M: window.innerWidth < 992 });
    }

    render(){
        return(
            <Styles>
                <div variant="dark" fixed='top' className='navbar'>
                    <img src={logo} style={{width: '150px'}}/>  
                    {/* <NavLink exact to="/" className='brand'><img src={logo} style={{width: '150px'}}/></NavLink> */}
                        {this.state.M 
                            ? 
                            (<DropdownButton drop='left' title="Menu" variant='dark' as={ButtonGroup}>
                                {/* <Dropdown.Item><NavLink to="/about">About</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/projects">Projects</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/resume">Resume</NavLink></Dropdown.Item> */}
                                <Dropdown.Item href='https://github.com/Codechiha' target="_blank">{github}</Dropdown.Item>
                                <Dropdown.Item href='https://www.linkedin.com/in/david-situ-8514977a/' target="_blank">{linkedin}</Dropdown.Item>
                                <Dropdown.Item href='mailto:davidsitu626@gmail.com?subject=We are interested in connecting'>{contact}</Dropdown.Item>
                            </DropdownButton>) 
                            : 
                            (<div className='links'>
                                <div className='worded'>
                                    {/* <NavLink to="/about" style={{color: 'white'}}>About</NavLink>
                                    <NavLink to="/projects" style={{color: 'white'}}>Projects</NavLink>
                                    <NavLink to="/resume" style={{color: 'white'}}>Resume</NavLink> */}
                                </div>
                                <div className='social-media'>
                                    <a href='https://github.com/Codechiha' target="_blank" style={{color: 'white'}}>{github}</a>
                                    <a href='https://www.linkedin.com/in/david-situ-8514977a/' target="_blank" style={{color: 'white'}}>{linkedin}</a>
                                    <a href='mailto:davidsitu626@gmail.com?subject=We are interested in connecting' style={{color: 'white'}}>{contact}</a> 
                                </div>
                            </div>)
                        }
                </div>
                
                {console.log(document.body.clientWidth, 'width')}
            </Styles>
        )
    }
}

export default Navi;