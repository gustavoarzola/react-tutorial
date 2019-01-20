import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle() {
    return {
      backgroundColor: "#f4f4f4",
      width: "200px",
      color: "black",
      padding: "5px",
      border: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  }

  // clickTodoItemCheckbox = (e) => {
  //     console.log(this.props.todo)
  // }

  getChecked = e => {
    console.log(this.props.todo.completed ? "checked" : "");
    return this.props.todo.completed ? "checked" : "";
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            checked={this.getChecked()}
            onChange={this.props.clickTodoItemCheckbox.bind(this, id)}
          />{" "}
          &nbsp;
          {title}
          <button onClick={this.props.clickTodoItemDeleteButton.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  clickTodoItemCheckbox: PropTypes.func.isRequired,
  clickTodoItemDeleteButton: PropTypes.func.isRequired
};

export default TodoItem;
