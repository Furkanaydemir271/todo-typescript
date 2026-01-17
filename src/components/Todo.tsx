import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import type { TodoType } from '../types/todo'


function Todo() {

   

    const [todo, setTodo] = useState<string>("")

    const [todos, setTodos] = useState<TodoType[]>([])

    const addTodo = (todo: string) => {
          
        if (todo === "") {
            alert("Lütfen todo giriniz")
            return
        }
        setTodo("")
          
        setTodos(prev => {
            const updated = [...prev, { id: Date.now(), todo: todo }];
            console.log(updated)
            return updated
        })
        localStorage.set("todos",todos)
    }

    useEffect(()=>{
        
    },[todos])

    return (
        <div className='todo'>
            <input type="text"
            value={todo}
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
                placeholder='Todo Giriniz' />
            <div className='button-area'>
                <button
                    onClick={() => {
                        addTodo(todo)
                    }}
                >Ekle</button>
            </div>
            <div className='TodoList'>
                <TodoList todos={todos} />
            </div>
        </div>
    )
}

export default Todo