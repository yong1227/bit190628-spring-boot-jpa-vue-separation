import React, {Component} from 'react'
import TodoList from './TodoList.jsx'

class TodoApp extends Component{

    constructor(props){
        super(props)
        this.state = {items: [], text: ''};
        this.handleChange1 = this.handleChange3.bind(this);
        this.handleSubmit2 = this.handleSubmit4.bind(this);
    }
    render(){
        return(
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit2}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input id="new-todo" onChange={this.handleChange1} value={this.state.text} />
                    <button> Add #{this.state.items.length + 1}</button>
                </form>
            </div>
        );
    }

    handleChange3(e){
        this.setState({text: e.target.value});
    }

    handleSubmit4(e){
        e.preventDefault();
        if(!this.state.text.length){
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}
export default TodoApp