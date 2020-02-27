import React, {useState} from 'react';
import TodoTable from './TodoTable';

const Todolist = () => { 
    const [todo, setTodo] = useState({desc:'', date:''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name] : event.target.value});
    };

    const addTodo = (event) => {
        
        setTodos([{desc: todo.desc, date : todo.date}, ...todos]);
    };

    const deleteItem = (row) => {
        setTodos(todos.filter((_, index) => row !== index));
    };

    const changeDesc = (event) => {
        setTodo({...todo, [event.target.name] : event.target.value });
        addTodo(event);
    }

    return(
        <div>
            Desc: <input type="text" onChange={inputChanged} value={todo.desc} name="desc" />
            Date: <input type="date" value = {todo.date} name="date" onChange={inputChanged} />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} deleteItem={deleteItem}/>
        </div>
    );
}

export default Todolist;