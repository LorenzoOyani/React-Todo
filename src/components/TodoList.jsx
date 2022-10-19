
import Todo from './Todo'

const TodoList = ({
    todos,
    setTodos,
    input,
    setInput,
    isEdit,
    setIsEdit,
    setIsEditing,
    filteredTodo
})=>{
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodo.map((todo)=> ( 
                
                <Todo 
                text = {todo.text}
                key = {todo.id}
                todos = {todos}
                setTodos = {setTodos}
                todo = {todo}
                editId = {isEdit}
                input = {input}
                setInput ={setInput}
                setIsEdit = {setIsEdit}
                setIsEditing = {setIsEditing}
                />
                
                ))}
                
                

            </ul>

        </div>
    )
}

export default TodoList;

