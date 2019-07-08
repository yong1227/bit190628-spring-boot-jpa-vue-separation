import React ,{Component} from 'react'

class LightSwitch extends Component{

    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            power: false        
        }
    }

    handleClick(){
        this.setState({
            power: !this.state.power
        })
    }
    render(){
        return(
            <div>
                <p>SWITCH {this.state.power? 'ON' : 'OFF'}</p>
                <button onClick = {this.handleClick}>Switch</button>
            </div>
        );
    }
}
export default LightSwitch