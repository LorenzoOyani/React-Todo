import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';


const Input = (props)=>{

    const inputHandler = (e) => {
        props.setInput(e.target.value);
    }

    const submitHandler = (e)=>{
        e.prevebtDefault();
        if(!props.input) return;
        else if (props.input > 0 && props.isEditing == true) {
            props.setTodos(
                props.todos.map((item)=>{
                    if(item.id === props.isEdit) {
                        return {...item, text: props.input}
                    }
                    return item;
                })
            );
            props.setIsEditing(false);
            props.setInput('');
        } else{
            props.setTodos([

                ...props.todos,
                { text: props.input, completed: false, id: Math.random() * 1000},
            ]);
            props.setInput('')
        }
      
    };

    const statusHandler = (e)=>{
        props.setStatus(e.target.value);
    }

    return (
        <form className='react-todo-form'>
            <div className='react-todo-input'>
                <input
                 type="text"
                value={props.input}
                onChange = {inputHandler}
                className = 'todo-input'
                />  
                <button onClick = {submitHandler} type = 'submit'>
                    <FaPlusSquare />
                </button>

            </div>

            <div className='select-todo'>
        <select
        className='filter-todo options'
        onChange = {statusHandler} 
        name="todos">

            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">uncompleted</option>

        </select>
            </div>


        </form>
    )



}

export default Input;