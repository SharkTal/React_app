import React, {useState} from 'react';
import TodoTable from './TodoTable';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
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
        console.log(row);
        setTodos(todos.filter((_, index) => row !== index));
    };



    const columns =[
        {
            Header:'Description',
            accessor:'desc',
        },
        {
            Header:'Date',
            accessor:'date',
        },
        {
            Cell: row => <button onClick={()=>deleteItem(row.index)}>Delete</button>
        }
      
    ]
    return(
        <div className="inputHolder">
            Desc: <input type="text" onChange={inputChanged} value={todo.desc} name="desc" />
            Date: <input type="date" value = {todo.date} name="date" onChange={inputChanged} />
            <button onClick={addTodo}>Add</button>
          
            <ReactTable data ={todos} columns={columns} defaultPageSize={10} filterable={true}></ReactTable>
        </div>
    );
}

export default Todolist;