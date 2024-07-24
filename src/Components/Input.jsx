import { useState } from "react"

const Input = ( {taskList, setTaskList} ) =>{

    const [ input, setInput ] = useState("")

    const handleAddTask = () =>{
        e.preventDefault()
        setTaskList([...taskList, input])
        setInput("")
    }

    return(
        <>
            <form action="">
                <input 
                    type="text"
                    placeholder="Add a task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleAddTask}>Add</button>
            </form>
        </>
    )
}

export default Input