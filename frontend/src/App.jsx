import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Componenttodo } from './Component/Componenttodo'
import { Todo } from './Component/Todo'
function App() {
   const [todos , setTodos] = useState([])
  fetch ('http://localhost:3000/todos')
     .then(async function(res){
      const json = await res.json()
      // console.log(json);
      setTodos(json.todos)
      // console.log(json.todos)
     
     
     })

  return (
    <div>
      <Componenttodo></Componenttodo>
      <Todo todo = {todos}> </Todo>
       
     
       
      
    
    </div>
  )
}

export default App
