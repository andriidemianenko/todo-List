import React from 'react'
import { connect } from 'react-redux'

class AddToDoField extends React.Component {
    addToDo = () => {
        this.props.onAddToDo(this.inputField.value)
        this.inputField.value = ''
    }
    deleteToDo = (id) => {
        return () => {
            this.props.onDeleteToDo(id)
        }
    }
    checkToDo = (index) => {
        return () => {
            this.props.onCheckToDo(index)
        }
    }
    filterOutput = (todo) => {
        let displayFilter = this.props.displayFilter
        if (displayFilter === 'DISPLAY_ALL') {
            return todo
        } else if (displayFilter === 'DISPLAY_DONE') {
            return todo.completed === true
        } else if (displayFilter === 'DISPLAY_ACTIVE') {
            return todo.completed === false
        }
    }
    render() {
        return <div className="add-todo-field">
             <div className="input-group mb-3">
                <input type="text" className="form-control"
                    placeholder="Add the task..."
                    aria-describedby="addTodo"
                    ref={input => this.inputField = input} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                        type="button" id="addTodo"
                        onClick={this.addToDo}>
                        Button
                    </button>
                </div>
            </div>
            <div>
                <ul className="list-group">
                    {this.props.todos.filter(this.filterOutput).map((todo, index) => {
                        //debugger
                        return <li key={todo.id} style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }}
                            className="list-group-item"
                        >
                            <input type="checkbox"
                                onChange={this.checkToDo(index)}
                                className="todo-input"
                            />
                            {todo.name}
                            <button
                                type="button"
                                onClick={this.deleteToDo(todo.id)}
                                className="btn btn-outline-danger">
                                Delete
                                </button>
                        </li>
                    })}
                </ul>
            </div>
        </div >
    }
}

export default connect(
    state => ({
        todos: state.todos,
        displayFilter: state.displayFilter
    }),
    dispatch => ({
        onAddToDo: (name) => {
            const payload = {
                name,
                id: Date.now().toString(),
                completed: false
            }
            dispatch({ type: 'ADD_TODO', payload })
        },
        onDeleteToDo: (id) => {
            dispatch({ type: 'DELETE_TODO', id })
        },
        onCheckToDo: (index) => {
            dispatch({ type: 'CHECK_TODO', index })
        }
    })
)(AddToDoField)