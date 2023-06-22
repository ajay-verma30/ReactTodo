import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const TodoForm = () => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      name: taskName
    };

    axios.post('http://localhost:3000/new', task)
      .then((response) => {
        console.log('Task added successfully');
        setTaskName('');
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <h1 className="text-center">ADD TODO</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Task Title</Form.Label>
        <br />
        <Form.Group className="form-group">
          <Form.Control
            type="text"
            placeholder="Enter task details here"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <br />
          <Button type="submit" className="btn-success">
            Add Task
          </Button>
        </Form.Group>
      </Form>
      <hr />
    </Container>
  );
};

export default TodoForm;
