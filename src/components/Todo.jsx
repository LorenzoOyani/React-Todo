
import {FaCheck, FaEdit, FaTrash } from 'react-icons/fa';

const Todo = ({
    text,
    todos,
    todo,
    input,
    setInput,
    setTodos,
    editId,
    setIsEdit,
    setIsEditing

})=>{
    const deleteHandler= ()=>{
        setTodos(todos.filter((element)=> element.id !== todo.id));
    };

    const completedHandler = ()=>{
        setTodos(
            todos.map((item)=> {
                if(item.id ===todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    }
                }
                return item;
            })
        )
    };

    const editHandler = ()=>{
        setIsEditing(true);
        const newId = todos.filter((item)=> item.id === todo.id)[0].id;
        setIsEdit(newId);
        const newInput = todos.filter((item)=> item.id === todo.id)[0].text;
        setInput(newInput);
    };

    return (
        <div className='todo'>
              <li className = {`todo-item ${todo.completed ? completed : ""}`}>
                {text}
              </li>
              <button onClick = {completedHandler} className = 'complete-btn'>
                <FaCheck />
              </button>
              <button onClick = {editHandler} className= 'edit-btn'>
                <FaEdit />
              </button>
              <button onClick={deleteHandler} className = 'trash-btn'>
                <FaTrash />

              </button>

        </div>
    )

}

export default Todo