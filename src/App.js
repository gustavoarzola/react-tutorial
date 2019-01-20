import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Todos from "./components/Todos";
import AddTodoItem from "./components/AddTodoItemForm";
import Header from "./components/layout/Header";
import uuid from "uuid";
import About from "./components/layout/About";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";

class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuid.v4(),
      //   title: "aprender react",
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: "aprender jwt",
      //   completed: true
      // },
      // {
      //   id: uuid.v4(),
      //   title: "arreglar mail de homelab",
      //   completed: false
      // }
    ]
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then(res => this.setState({ todos: res.data }));
  }

  clickTodoItemCheckbox = id => {
    console.log("llegaste csm, tremenda vuelta por la chucha!");
    console.log("id: " + id);

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          console.log(todo.completed);
        }
        return todo;
      })
    });
  };

  clickTodoItemDeleteButton = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              if (todo.id !== id) return todo;
              //always return a value
              else return null;
            })
          ]
        });
      });
  };

  addTodoItem = title => {
    console.log("gonna add: " + title);

    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false
      })
      .then(response =>
        this.setState({ todos: [...this.state.todos, response.data] })
      );
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <div>
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodoItem addTodoItem={this.addTodoItem} />
                  <Todos
                    todos={this.state.todos}
                    clickTodoItemCheckbox={this.clickTodoItemCheckbox}
                    clickTodoItemDeleteButton={this.clickTodoItemDeleteButton}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
