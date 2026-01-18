import { MdDeleteOutline } from "react-icons/md";
import type { TodoType } from "../types/todo";
import { useDispatch } from "react-redux";
import { removeSingleTodo } from "../redux/todoSlice";

function TodoList({ todos }: any) {

  const dispatch = useDispatch()

  const { id, todo } = todos
  return (

    <div className="TodoList">
      {todo}
      <div className="İcon-area">
        <MdDeleteOutline className="icon"
          onClick={() => {
            dispatch(removeSingleTodo(id))
          }}
        />
      </div>
    </div>

  )
}

export default TodoList