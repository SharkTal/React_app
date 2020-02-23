import React, {useState} from 'react';

const Todolist = () => { 
    const [todo, setTodo] = useState({desc:'', date:''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name] : event.target.value});
    };

    const addTodo = (event) => {
        
        setTodos([{desc: todo.desc, date : todo.date}, ...todos]);
    };

    return(
        <div>
            Desc: <input type="text" onChange={inputChanged} value={todo.desc} name="desc" />
            Date: <input type="date" value = {todo.date} name="date" onChange={inputChanged} />
            <button onClick={addTodo}>Add</button>
                <table>
                    <tbody>
                        {todos.map((item,index) => 
                            <tr key={index}>
                                <td>{item.desc}</td>
                                <td>{item.date}</td>
                            </tr>

                            )
                        }
                    </tbody>
                </table>
        </div>
    );
}

export default Todolist;