import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        clickTodoItemCheckbox={this.props.clickTodoItemCheckbox}
        clickTodoItemDeleteButton={this.props.clickTodoItemDeleteButton}
      />
    ));
  }
}

Todos.propType = {
  todos: PropTypes.array.isRequired,
  clickTodoItemCheckbox: PropTypes.func.isRequired,
  clickTodoItemDeleteButton: PropTypes.func.isRequired
};

export default Todos;
