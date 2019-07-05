import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
class Join extends Component {

    constructor(props){
        super();
        this.state =  {
            controlId: '',
            password: '',
            name: '',
            phone: '',
            city: ''
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="customerId">
                        <Form.Label>CustomerId</Form.Label>
                        <Form.Control type="text" placeholder="Enter CustomerId" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group controlId="name">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" placeholder="name" />
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.Label>phone</Form.Label>
                        <Form.Control type="text" placeholder="phone" />
                    </Form.Group>

                    <Form.Group controlId="city">
                        <Form.Label>city</Form.Label>
                        <Form.Control type="text" placeholder="city" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
export default Join;