import React, {useState} from 'react';

function Todolist() {
    const [desc, setDesc] = useState('');
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setDesc(event.target.value);
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos], desc);
    }

    return(
        <div>
            <input type="text" onChange={inputChanged} value={desc} />
            <button onClick={addTodo}>Add</button>
                <table>
                    <tbody>
                        {todos.map(todo => <tr><td>{todo}</td></tr>
                            )
                        }
                    </tbody>
                </table>
        </div>
    )
}

export default Todolist;