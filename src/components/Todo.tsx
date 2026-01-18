import  {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { addTodo } from '../redux/todoSlice'
import TodoList from './TodoList'

function Todo() {
   
   const [todo,setTodo] = useState("")

    const todos = useSelector((state:RootState)=>state.todo)
    const dispatch = useDispatch()
     
    return (
        <div className='todo'>
            <input type="text"
               value={todo}
               onChange={(e)=>{
                setTodo(e.target.value)
               }}
                placeholder='Todo Giriniz' />
            <div className='button-area'>
                <button
                onClick={()=>{
                    dispatch(addTodo(todo))
                }}
                >Todo Ekle</button>
            </div>
            <div>
                {
                    todos.map((todo)=>(
                      <TodoList key={todo.id} todos={todo}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo