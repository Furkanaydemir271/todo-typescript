import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import type { TodoType } from '../types/todo'

interface TodoListProps {
    todos: TodoType[]
}


function TodoList({ todos }: TodoListProps) {


    return (
        <div style={{ width: "100%" }}>
            {
                todos.map((todo) => (
                    <div className='a'>
                        {todo.todo}
                        <div>
                            <IoIosRemoveCircle className='icons'/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList