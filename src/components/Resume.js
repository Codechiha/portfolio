import React from 'react';

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
import me from '../assets/pro-pic-pencils.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Styling
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const contact = <FontAwesomeIcon icon={faEnvelope} />

// This is the Home Page
const Styles = styled.div`

    h5 {font-size: 26px; font-weight: bold; font-family: sansation-bold;}
    h3 {font-size: 55px; margin-bottom: 20px;}
    p {margin: 0; font-size: 19px;}
    li {font-family: sansation-regular; font-size: 17px;}

    .main {
        border: 1px solid black;
        box-shadow: 3px 3px 0 0 darkgray;
        padding: 35px;
        margin-bottom: 20px;
    }
    .row {}
    .col1 {}
    .col2 {}

    .header {padding: 10px;}
    .section-headers {
        font-size: 24px; 
        background-color: #26447f; 
        color: white; 
        height: 37px;
        letter-spacing: 2px;
        text-align: center;
        padding: 9px;
    }

    .section-sub-headers {
        font-size: 19px; 
        font-weight: bold; 
        margin-top: 20px;
    }

    .contact {margin: 22px 0; line-height: 4;}
    .skills {}
    .title-sections {display: flex; flex-direction: row; justify-content: space-between; margin-top: 16px;}
    .titles {}
    .sub-titles {}
    .dates {}
    .body {}


`

export const Resume = () => (
    <Styles>
        <div>
            <Navi />
            <Container className='main'>
                <Row className='row'>
                    <Col className='col1' lg={4}>
                        <div className='header'>
                            <h3>David Situ</h3>
                            <h5>Full Stack Web Developer</h5>
                        </div>
                        <div className='contact'>
                            <h3 className='section-headers'>Contact</h3>
                            <a>DavidSitu626@gmail.com</a>
                            <p>(626) 314-9921</p>
                            <a>San Gabriel, California</a>
                        </div>
                        <div className='technical-skills'>
                            <h3 className='section-headers'>Technical Skills</h3>
                            <h6 className='section-sub-headers'>Languages</h6>
                            <ul>
                                <li className='skills'>HTML</li>
                                <li className='skills'>CSS</li>
                                <li className='skills'>Javascript</li>
                                <li className='skills'>Python</li>
                                <li className='skills'>SQL</li>
                            </ul>
                            <h6 className='section-sub-headers'>Frameworks and Libraries</h6>
                            <ul>
                                <li className='skills'>React</li>
                                <li className='skills'>Node</li>
                                <li className='skills'>Knex</li>
                                <li className='skills'>React-Bootstrap</li>
                            </ul>
                            <h6 className='section-sub-headers'>Databases</h6>
                            <ul>
                                <li className='skills'>SQLite</li>
                                <li className='skills'>PostGres</li>
                            </ul>
                            <h6 className='section-sub-headers'>Software Tools</h6>
                            <ul>
                                <li className='skills'>VS Code</li>
                                <li className='skills'>Git Bash</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className='col2'>
                        <div className='projects'>
                            <h3 className='section-headers'>Projects</h3>
                            <div className ='title-sections'>
                                <a><h5 className='titles'>Refugee Awareness</h5></a>
                                <p>Jan. 2019 - Feb. 2019</p>
                            </div>
                            <p>
                                This is a group project website that educates users about refugees and allows users to share refugee stories 
                            </p>
                            <ul>
                                <li>Built backend using React, JSX and knex</li>
                                <li>Rebuilt the frontend in March 2020 using React and JSX</li>
                            </ul>
                            <div className ='title-sections'>
                                <a><h5 className='titles'>S and J Architecture</h5></a>
                                <p>Nov. 2018 - Nov 2018</p>
                            </div>
                            <p>
                                This is a personal project website that aimed to imitate the design images of S and J Architecture
                            </p>
                            <ul>
                                <li>Content and designs are rendered using HTML/CSS</li>
                                <li>Button and Menu event handlers are built using Javascript</li>
                            </ul>
                            {/* <div className ='title-sections'>
                                <a><h5 className='titles'>Refugee Awareness</h5></a>
                                <p>Jan. 2019 - Feb. 2019</p>
                            </div>
                            <p></p>
                            <ul>
                                <li></li>
                                <li></li>
                            </ul> */}
                        </div>
                        <div className='employment'>
                            <h3 className='section-headers'>Employment</h3>
                            <div className ='title-sections'>
                                <div className='employment-titles'>
                                    <a><h5 className='titles'>Wynn Nail Spa</h5></a>
                                    <p className='sub-titles'>Customer / Schedule Manager</p>
                                </div>
                                <div className='employment-titles'>
                                    <p>Hollywood, CA</p>
                                    <p>Sept. 2017 - July 2018</p>
                                </div>  
                            </div>
                            <ul>
                                <li>
                                    Assigned customers to nail technicians according to services 
                                </li>
                                <li>
                                    Managed payments and tips
                                </li>
                                <li>
                                    Organized calendars to accommodate 50 - 100 customers per day
                                </li>
                            </ul>
                            <div className ='title-sections'>
                                <div className='employment-titles'>
                                    <a><h5 className='titles'>Emerald Health Services</h5></a>
                                    <p className='sub-titles'>Social Worker Assistant</p>
                                </div>
                                <div className='employment-titles'>
                                    <p>City of Industry, CA</p>
                                    <p>July 2016 - Mar. 2017</p>
                                </div>  
                            </div>
                            <ul>
                                <li>
                                    Assisted in surveying the psycho-social statuses of 20 elderly men and women per day
                                </li>
                                <li>
                                    Spoke primarily in Cantonese and Mandarin
                                </li>
                                <li>
                                    Supported the clients in any language barrier tasks requested, such as: paying bills, making phone calls, signing up for healthcare
                                </li> 
                            </ul>
                        </div>
                        <div className='education'>
                            <h3 className='section-headers'>Education</h3>
                            <div className='title-sections'>
                                <a><h5 className='titles'>Lambda School</h5></a>
                                <p>Oct. 2018 - Current</p>
                            </div>
                            <p>Completion of Full-Stack Web Development 2020</p>
                            <div className='title-sections'>
                                <a><h5 className='titles'>CSU, Los Angeles</h5></a>
                                <p>Sept. 2014 - June 2016</p>
                            </div>
                            <p>B.A. Psychology 2016</p>
                            <p>Honors: Dean's List and Summ Cum Laude</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    </Styles>
)