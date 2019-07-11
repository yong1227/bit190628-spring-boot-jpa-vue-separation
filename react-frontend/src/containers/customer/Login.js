import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            controlId :'',
            password : ''
        }
    }



    render() {

        return (
            <div>
                <Form>
                    <Form.Group controlId="customerId">
                        <Form.Label>Customer ID</Form.Label>
                        <input 
                            type="text"
                            name='customerId'
                            onChange={this.idChange}
                        />
                        <Form.Control type="text" placeholder="Customer ID" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <input 
                            type="text"
                            name='password'
                            onChange={this.pwChange}
                        />
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                </Form>
                <Button variant="success" onClick={this.login}>전 송</Button>
                <Button variant="warning">취 소</Button>
            </div>
        );
    }

    idChange = (e) => {
        this.setState({customerId: e.target.value})
    }

    pwChange = (e) => {
        this.setState({password: e.target.value})
    }

    login = (e) => {
        e.preventDefault()
        this.setState({submitted: true})
        const{customerId,password} = this.state

        console.log(`customerId is ${customerId}`)
        console.log(`password is ${password}`)

        const data = {
            //DTO와 일치
            customerId : this.state.customerId,
            password : this.state.password
        }
        const headers = {
            'Content-type' : 'application/json',
            'Authorization': 'JWT fefege...'
        }
        alert('로그인 버튼 클릭!!' + data.customerId+', pass:'+data.password)
        axios.post(`http://localhost:9000/customers/login`,JSON.stringify(data),{headers: headers})
            .then(res=> alert('login 성공'))
            .catch(e=> alert('login axios 실패'))
    }
}
export default Login;