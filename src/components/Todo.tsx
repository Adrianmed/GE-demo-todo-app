import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IProps  =  {
    todos: {id:number; item: string; done: boolean}[]; 
    deleteTodo: ((id:number) => void); 
    toggleDone: ((id:number) => void);
};

const Todo: React.SFC<IProps> = (props) => {
    const todoCollection = props.todos.length ? (
        props.todos.map(todoItem => {  
            return (
                <div className={todoItem.done ? "todo-strikethru" : "todo"}  key={todoItem.id}> 
                    <label onClick={() => props.toggleDone(todoItem.id)}>
                        <span>{todoItem.item}</span>
                    </label>
                    <label className="deleteIcon" onClick={() => props.deleteTodo(todoItem.id)}><FontAwesomeIcon icon="trash-alt" /></label>
                </div>
            )
        })
    ) : (
    <p></p>
    )
    return (
        <div>
        {todoCollection} 
        </div>
    )
}

export default Todo;