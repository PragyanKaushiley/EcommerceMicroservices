import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function AlertTag(props) {
    return (
        <Container>
            <Alert variant={props.type} dismissible={props.dismissible}>
                <Alert.Heading>{props.heading}</Alert.Heading>
                <p>
                    {props.Desc}
                </p>
            </Alert>
        </Container>
    );
}

export default AlertTag;