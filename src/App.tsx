import React, { Component } from 'react';
import './App.scss';
import Todo from './components/Todo'
import Form from './components/Form'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faTrashAlt)

class App extends Component {
  state = {
    todos: [
      {id: 0, item: 'Test this application', done: false},
    ]
  }

  //Delete a todo item 
  deleteTodo = (id:number) => {
      const todos = this.state.todos.filter(todo => {
        return todo.id !== id
      });
      this.setState({
        todos
      })
  }

  //Toggle boolean flag for Done state. This property be used to strike through todo items
  toggleDone = (id:number) => {
    const index = this.state.todos.map(e => e.id).indexOf(id);
    this.state.todos[index].done = !this.state.todos[index].done
    this.setState({
      todos: this.state.todos
    })
}

  //Given a new string, assign ID, Done, and Item property to create a new object in State.
  addItem = (item: {content: string}) => {
    let todo = {} as any;
    todo.id = Math.floor(Math.random() * (1000 - 2 + 1)) + 2;
    todo.item = item['content']
    todo.done = false
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <section className="todo-list">
      <Form addItem={this.addItem}/>
      <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} toggleDone ={this.toggleDone}/>
      </section>
    );
  }
}

export default App;
