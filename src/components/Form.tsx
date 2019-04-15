import React, { Component } from 'react';

class Form extends Component<{addItem: (item: {content: string}) => void;}> {

    state = {
        content: ''
    }
    
    //Updates state after receiving a new todo
    handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const target = e.target as HTMLTextAreaElement;
        this.setState({
            content: target.value
        })
    }
        
    //Add todos to state after entering them on Input box
    handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Add a todo..." type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        );
    }
}

export default Form;