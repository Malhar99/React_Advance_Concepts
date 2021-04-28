import React, { useState, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import "./App.css";

function Todos() {
  const [todos, setTodos] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.cypress.io/todos/")
      .then((response) => response.json())
      .then((result) => setTodos(result))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      {todos === "" ? (
        <div className="App-header">
          <Spinner animation="border" variant="primary" size={30} />
        </div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item,key) => (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Todos;
