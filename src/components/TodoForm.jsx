
import {useState} from "react";
import { useTodo } from "../Context/TodoContext";
import { Button } from "@material-tailwind/react";


function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }
    

    return (
        <form onSubmit={add}  className="flex">
            <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />
            <Button  type="submit" className="rounded-lg px-3 py-1 bg-blue-200 text-white shrink-0">
            ➕
           </Button>
        </form>
        );
      }
      
      export default TodoForm;