import React, { useEffect, useState } from 'react'
import Form from '../component/WhatchList/Form';
import List from '../component/WhatchList/List'


export default function ToDoList() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [err, setErr] = useState('');


    // get todos from local storage
    useEffect(() => {
        const getTodos = JSON.parse(localStorage.getItem('todos'))
        if (getTodos) {
            setTodos(getTodos)
        }
    }
        , [])

    //save todos in local storage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);


    function submitHandler(e) {
        e.preventDefault();
        if (todo.length < 3) {
            setErr("at least 3 word require")
            return false
        }
        setTodos([{ id: Date.now(), title: todo, done: false }, ...todos]);
        setErr(false);
        setTodo('');
    }

    function delHandler(todoID) {
        if (window.confirm('Are you sure?')) {
            const updateTodos = todos.filter(item => item.id !== todoID);
            setTodos(updateTodos);
        }
    }
    function doneHandler(todoID) {
       const index = todos.findIndex (item => item.id === todoID)
       const duplicateTodos = [...todos];
       duplicateTodos[index]={
           id:todos[index],
           title: todos[index].title,
           done: !todos[index].done,
       }
       setTodos(duplicateTodos)
       console.log(todos)
    }
    return <div>
        <Form todo={todo} change={(e) => setTodo(e.target.value)} submit={submitHandler} err={err} />
        <List del={delHandler} done={doneHandler} todos={todos} />
    </div>
}