export interface Todo {
  id: string,
  todoText: string,
  completed: boolean,
  user: string
}

export interface TodoBodyRequest extends Omit<Todo, 'id' | 'completed'> {}