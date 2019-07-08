import React, { Component } from 'react'
import {Figure, Table} from 'react-bootstrap'
import reactLogo from '../../assets/images/reactLogo.png'

class MyPage extends Component {
    constructor(props) {
        super();
        this.state = {
            reactLogo: ''
        }
    }
    render() {
        return (
            <div>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="reactLogo"
                        src={reactLogo}
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
                <Table striped bordered hover size="sm">
                    <tbody>
                        <tr>
                            <td rowSpan='2' colSpan='2'>1</td>
                            <td>ID</td>
                            <td>이름</td>
                        </tr>
                        <tr>
                            <td>hong</td>
                            <td>홍길동</td>
                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td colSpan='2'>0106828142</td>
                            <td>전화번호</td>
                        </tr>
                        <tr>
                            <td>주 소(도시)</td>
                            <td colSpan='2'>서 울</td>
                            <td>주 소(도시)</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default MyPage