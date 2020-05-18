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
import logo from '../assets/david-situ-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//Styling
import styled from 'styled-components';
import { Dropdown, DropdownButton, DropdownItem, ButtonGroup } from 'react-bootstrap';

const bars = <FontAwesomeIcon icon={faBars} className='fa-2x'/>

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
    }


    .brand {
        color: white;

        .dropdown-toggle::after { 
            content: none; 
        }
    }


    .worded {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        a {
            margin-right: 40px;

            &:hover {
                text-decoration: none;
                border-bottom: 1px solid #8a2019;
            }
        }
    }

    .social-media {
        width: 35%;
        display: flex;
        justify-content: space-between;
    }

    .dropdown.menu.show {
        color: white;
        align-items: center;
        background-color: black;
    }

`;

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
                <div fixed='top' className='navbar'>  
                    <NavLink exact to="/" className='brand'><img src={logo} style={{width: '195px'}}/></NavLink>
                    {this.state.M 
                        ? 
                        (<DropdownButton title={bars} variant='dark' as={ButtonGroup} >
                            <Dropdown.Item><NavLink exact to="/" style={{fontFamily: 'sansation-bold'}}>Home</NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to="/projects" style={{fontFamily: 'sansation-bold'}}>Projects</NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to="/resume" style={{fontFamily: 'sansation-bold'}}>Resume</NavLink></Dropdown.Item>
                        </DropdownButton>) 
                        : 
                        (<div className='worded'>
                            <NavLink exact to="/" style={{color: 'white', fontFamily: 'sansation-bold'}}>Home</NavLink>
                            <NavLink to="/projects" style={{color: 'white', fontFamily: 'sansation-bold'}}>Projects</NavLink>
                            <NavLink to="/resume" style={{color: 'white', fontFamily: 'sansation-bold'}}>R&#233;sum&#233;</NavLink>
                        </div>)
                    }
                </div>
            </Styles>
        )
    }
}

export default Navi;