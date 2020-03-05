import React from 'react';
import Todolist from './Todolist';
export default function TodoTable(props) {
    return (
        <div>
            <table>
                <tbody>
                    {
                        props.todos.map((item, index) =>
                            <tr key={index}>
                                <td>{item.desc}</td>
                                <td>{item.date}</td>
                                <td><button onClick={() => props.deleteItem(index)} >Delete</button></td>
                                <td><button onClick={() => props.changeDesc(index)}>Change Desc</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>


        </div>
    )
}