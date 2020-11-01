import React, {Component} from 'react';
import {todoList} from "../../Data/data";
import Todo from "../TodoItem/Todo";

class TodoList extends Component {
    render() {
        return (
            <div> {
                todoList.map((value => {
                    return ( <Todo todoItem={value} key={value.id}/>)
                }))
            }

            </div>
        );
    }
}

export default TodoList;
