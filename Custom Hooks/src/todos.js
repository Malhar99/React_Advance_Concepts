import React from "react";
import { Table , Spinner } from 'reactstrap';
import "./App.css";
import { useFetch } from "./useFetch";

function Todos() {
  const { loading, data, error } = useFetch(
    "https://jsonplaceholder.cypress.io/todos/"
  );
  return (
    <div>
      {loading ? (
        <div>
          <Spinner className="Spinner" color="primary" />
        </div>
      ) : (
        error === '' ? 
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </Table> : <div>{error}</div>
      )}
    </div>
  );
}

export default Todos;
