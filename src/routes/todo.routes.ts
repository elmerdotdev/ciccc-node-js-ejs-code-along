import { Router, Request, Response } from 'express'
import { Todo, TodoBodyRequest } from '../types/todo'
import { v4 as uuidv4 } from 'uuid'

const todoRouter = Router()

// In-memory database
let todos: Todo[] = [
  { id: 'gj3oiflj2', todoText: 'Water garden', completed: true, user: "John"},
  { id: 'hgon3l93', todoText: 'Clean room', completed: false, user: "Jane" }
]

// Get all todos
todoRouter.get('/', (req: Request, res: Response) => {
  res.status(200).render('todos', { title: "To Dos", todos })
  //res.status(200).json(todos) // if you use fetch api
})

// Add todo
todoRouter.post('/add', (req: Request<{}, {}, TodoBodyRequest>, res: Response) => {
  const newTodo: Todo = {
    id: uuidv4(),
    todoText: req.body.todoText,
    completed: false,
    user: req.body.user
  }
  todos = [...todos, newTodo]
  res.status(201).render('todo_added', { title: 'To do added!', newTodo });
  // res.status(201).json(newTodo) // if you use fetch api
})

export default todoRouter