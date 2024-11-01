"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const todoRouter = (0, express_1.Router)();
// In-memory database
let todos = [
    { id: 'gj3oiflj2', todoText: 'Water garden', completed: true, user: "John" },
    { id: 'hgon3l93', todoText: 'Clean room', completed: false, user: "Jane" }
];
// Get all todos
todoRouter.get('/', (req, res) => {
    res.status(200).render('todos', { title: "To Dos", todos });
    //res.status(200).json(todos) // if you use fetch api
});
// Add todo
todoRouter.post('/add', (req, res) => {
    const newTodo = {
        id: (0, uuid_1.v4)(),
        todoText: req.body.todoText,
        completed: false,
        user: req.body.user
    };
    todos = [...todos, newTodo];
    res.status(201).render('todo_added', { title: 'To do added!', newTodo });
    // res.status(201).json(newTodo) // if you use fetch api
});
exports.default = todoRouter;
