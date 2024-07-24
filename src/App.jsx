import { useState } from 'react'
import './App.css'
import Inpt from './Components/Inpt';
function App() {

  const [taskList, setTaskList] = useState([]);


  return (
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="text-xl font-semibold">To Do Board Using React.JS</h1>
        <Inpt taskList={taskList} setTaskList={setTaskList} />
        <div>
          {taskList.map((task, index)=>
            <li key={index}>{task}</li>
          )}
        </div>
      </div>
  )
}

export default App
