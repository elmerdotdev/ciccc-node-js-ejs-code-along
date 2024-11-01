const todoList = document.querySelector('.todo-list')

const getTodos = async() => {
  const res = await fetch('/todos')
  const data = await res.json()
  return data
}

const buildHtml = async () => {
  const data = await getTodos()
  let todoItems = ''
  todoList.innerHTML = ''
  data.forEach(todo => {
    todoItems += todo.todoText
  })
  todoList.innerHTML = todoItems
}

// buildHtml()