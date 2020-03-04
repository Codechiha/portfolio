import React, {Component} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

class Contact extends Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col className='contact-desc'>
                        <h3>
                            Contact
                        </h3>
                        <p>
                            For your convenience, fill in the form to the right or click on my email address below to send me your interest
                        </p>
                    </Col>
                    <Col>
                        {/* add forms and button to send email */}
                    </Col>
                </Row>
                <div className='social-media'>

                </div>
            </Container>
        )
    }
}

export default Contact