import React, { useState } from 'react';
import TodoTable from './TodoTable';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import DateFnsAdapter from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const Todolist = () => {
    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const addTodo = (event) => {

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
            Cell: row => <Tooltip><Button onClick={() => deleteItem(row.index)}  color="secondary" ><DeleteIcon/></Button></Tooltip> 
        }

    ]

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = date => {
        setSelectedDate(date);
      };
    return (
        <div className="inputHolder">
            <TextField style={{marginRight:10}} label="Description" value={todo.desc} onChange={inputChanged} name="desc"/>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    formate="dd/MM/yyyy"
                    margin="normal"
                    id="data-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{'aria-lable':'change date',}}
                    />
            </MuiPickersUtilsProvider>
            <Tooltip title="Add todo">
            <IconButton  color="primary" onClick={addTodo}><AddCircleIcon fontSize="large"/></IconButton>
            </Tooltip>
            <ReactTable data={todos} columns={columns} defaultPageSize={10} filterable={true}></ReactTable>
        </div>
    );
}

export default Todolist;