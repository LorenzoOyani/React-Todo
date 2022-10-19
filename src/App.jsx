import  { useState, useEffect} from 'react'
// import { propTypes } from  'prop-types'

import TodoList from './components/TodoList'
import Input from './components/Input'

import './App.css'

function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useLocaleStorage('todos', []);
  const [status, setStatus] = useState('all');
  const [filteredTodo, setFilteredTodo] = useState([])

  const [isEditing, setIsEditing] = useState(false);
  const [isEdit, setIsEdit] = useState(null);

useEffect(()=>{
  const filterHandler =()=>{
    switch(status) {
      case 'all':
      setFilteredTodo(todos.filter(todo => todo.completed === true));
      break;
      case 'uncompleted':
        setFilteredTodo(todos.filter(todo => todo.completed ===false ));
        break;
        default:
          setFilteredTodo(todos);
          break;
          
    }
  }
  filterHandler()
}, [status, todos]);


return (
<div className='todo-play-body'>
  <div className='todo-top-banner'>
    <h1>Todo List</h1>
  </div>
  <Input 
  todos ={todos}
  setTodos = {setTodos}
  input = {input}
  setInput = {setInput}
  setStatus = {setStatus}
  isEditing = {isEditing}
  setIsEditing = {setIsEditing}
  isEdit = {isEdit}
  setIsEdit = {setIsEdit}

  />

  <TodoList 
  todos = {todos}
  setTodos = {setTodos}
  input = {input}
  setInput = {setInput}
  isEdit = {isEdit}
  setIsEdit = {setIsEdit}
  setIsEditing = {setIsEditing}
  filteredTodo = {filteredTodo}
  />


</div>


)

}

function useLocaleStorage(key, initialValue) {

  const [storedValue, setStoredValue] = useState(()=>{
    if(typeof window === "undefined") {
      return initialValue;
    }
    try{
      const item = window.localStorage.getItem(key);
      return item? JSON.parse(item) : initialValue;
    } catch(error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value)=> {
    try{
      const valueToStore = 
      value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
  
      if(typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
  
  
      } 
    } catch ( error) {
      console.log(error);
    }
    
  } 

return [storedValue, setValue]
}


export default App
