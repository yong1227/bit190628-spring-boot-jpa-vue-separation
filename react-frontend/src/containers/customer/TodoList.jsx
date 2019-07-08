import React, {Component} from 'react'

class TodoList extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <ul>
                {this.props.items.map(item=>(
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}
export default TodoList;