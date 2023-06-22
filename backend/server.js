const express = require('express')
require('./db/conn');
const Todo = require('./models/todo')
const app = express();
const cors =  require('cors')


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

app.get('/all-todos', (req, res) => {
    Todo.find({})
      .then(results => {
        console.log(results);
        res.send(results);
      })
      .catch(err => {
        console.log(err);
      });
  });


app.post('/new', async(req,res)=>{
    try{
        const newtodo = new Todo({
        name: req.body.name
        });
        await newtodo.save();
        res.status(201).send('Todo Added')

    }
    catch(e){
        console.log(e)
    } 
})

app.delete('/:id', (req, res) => {
    const todoId = req.params.id;
  
    Todo.findByIdAndDelete(todoId)
      .then((result) => {
        if (result) {
          res.send('Todo deleted');
        } else {
          res.status(404).send('Todo not found');
        }
      })
      .catch((error) => {
        console.error('Error occurred while deleting todo:', error);
        res.status(500).send('An error occurred while deleting the todo');
      });
  });

app.listen(port);