import { useState } from 'react'

import Todo from './components/Todo';

import "./App.css";
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar Funcionalidade X no Sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
       {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ])

  return (
   <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo)=>(
      <Todo todo={todo} /> /* Aqui está dizendo que a propriedade todo tem o valor de todo que é um objeto */
      ))}
    </div>
    <TodoForm/>
   </div>
  )
}

export default App
