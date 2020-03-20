import React, {useState } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const Todolist = () => {
    const [todo, setTodo] = useState({ desc: '', date: new Date() });
    const [todos, setTodos] = useState([]);


    const handleDateChange = val => {
        setTodo({ ...todo, date: val.toString() })
    };
    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([{ desc: todo.desc, date: todo.date }, ...todos]);
    };

    const deleteItem = (row) => {
        console.log(row);
        setTodos(todos.filter((_, index) => row !== index));
    };



    const columns = [
        {
            Header: 'Description',
            accessor: 'desc',
        },
        {
            Header: 'Date',
            accessor: 'date',
        },
        {
            Cell: row => <Tooltip><Button onClick={() => deleteItem(row.index)} color="secondary" ><DeleteIcon /></Button></Tooltip>
        }

    ]


    return (
        <div className="inputHolder">
            <TextField style={{ marginRight: 10 }} label="Description" value={todo.desc} onChange={inputChanged} name="desc" />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    autoOk
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={todo.date}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
            <Tooltip title="Add todo">
                <IconButton color="primary" onClick={addTodo}><AddCircleIcon fontSize="large" /></IconButton>
            </Tooltip>
            <ReactTable data={todos} columns={columns} defaultPageSize={10} filterable={true}></ReactTable>
        </div>
    );
}

export default Todolist;