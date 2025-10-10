import { useState } from 'react'

import Todo from './components/Todo';

import "./App.css";
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([ /**os State tem o poder de renderizar os componentes e de rederizar */
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

  const addTodo = (text, category) => {/**Essa vai ser uma função que vai adicionar o todo na lista  */
      const newTodos= [
        ...todos, 
        {
        id: Math.floor(Math.random()*10000), /** Math.floor(Math.random()*10000): Função que vai gerar um numero aleatório para o id*/
        text, /**vem do componete do formulario */
        category,/**vem do componete do formulario */
        isCompleted: false, /** o atributo de completo já começa com falso */
      }];

      setTodos(newTodos); 
  }

  const removeTodo = (id) =>{ /* Aqui fica a função que vai remover os todos */
    const newTodos = [...todos] /* variavel com todos os todos*/

  }

  return (
   <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo)=>(
      <Todo key={todo.id} todo={todo} /> /* Aqui está dizendo que a propriedade todo tem o valor de todo que é um objeto
      key={todo.id}: Agora o react tem uma chave unica para cada componente*/
      ))}
    </div>
    <TodoForm addTodo = {addTodo}/>
   </div>
  )
}

export default App
