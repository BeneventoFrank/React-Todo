import React from 'react';
import './ListContainer.css';
import ToDoList from '../ToDoList/ToDoList';
import DoneList from '../DoneList/DoneList';


const ListContainer = props =>{
    return(
        <div className='list-container'>
            <div className='list-todo-list'>
                <ToDoList completeTaskHandler={props.completeTaskHandler} data={props.data}/>
            </div>
            <div className='list-done-list'>
                <DoneList data={props.data}/>
            </div>
        </div>
    )
}

export default ListContainer;