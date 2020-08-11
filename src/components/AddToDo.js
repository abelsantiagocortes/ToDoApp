import React, { Component } from 'react';

class AddToDo extends Component {

    state = {
        content: null,
        id: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state);
        this.setState(
            {
                content: ''
            }
        )
    }
    render() {
        return (
            <div className="input-field col s6">
            <input placeholder="New To Do" id="content" type="text" className="validate" onChange={this.handleChange} value={this.state.content}/>
                
            <a className="btn-floating btn-large waves-effect waves-light blue" onClick={this.handleSubmit} ><i className="material-icons">+</i></a>
            </div>
            
               
        )
    }
}

export default AddToDo;