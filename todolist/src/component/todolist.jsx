import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:3000/all-todos');
      setTodos(res.data);
    } catch (e) {
      console.error(e);
    }
  };


  const handleDelete = async (todoId) => {
    try {
      await axios.delete(`http://localhost:3000/${todoId}`);
      fetchTodos();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container className="tasklist">
      <h2 className="text-center">LIST</h2>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo._id}>
              <td>{todo.name}</td>
              <td className="td-button">
                <Button onClick={() => handleDelete(todo._id)}>DELETE</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TodoList;


