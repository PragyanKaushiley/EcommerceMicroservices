import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import './Alert.scss'

function AlertTag(props: any) {
    const [show, setShow] = useState(true);

    return (
        <Container className='AlertDiv'>
            <Alert show={show && props.alert.isError} onClose={() => { debugger; setShow(false) }}
                variant={props.alert.alert.variant}
                dismissible={props.alert.alert.dismissible}>
                <Alert.Heading>{props.alert.alert.heading}</Alert.Heading>
                <p>
                    {props.alert.alert.desc}
                </p>
            </Alert>
        </Container>
    );
}

export default AlertTag;