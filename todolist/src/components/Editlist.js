import React, {uesState} from 'react';
import TodoTable from './TodoTable';
import Todolist from './Todolist';

const Editlist = (props) =>{



    return(
        <div>
            Desc: <input type="text" onChange={inputChanged} value={todo.desc} name="desc" />
        </div>
    )
}

export default Editlist;
