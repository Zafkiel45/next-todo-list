'use client'
import { todoContext } from "./components/context"
import { InputTask } from "./components/input"
import { useState } from "react";
import { Tasks } from "./components/task";
import { Modal } from "./components/modal";


export default function Home() {

  const key = 'tasks';
  const [task, setTask] = useState([])
  const [name, setName] = useState('')
  const [idx, setIdx] = useState(null);
  const [descrebe, setDescrebe] = useState('')
  const [sideBar, setSideBar] = useState({
    position:'right-[-200%]',
    display: 'hidden',
  })

  return (
    <todoContext.Provider value={{key, task, setTask, setName, name, setSideBar, sideBar, descrebe, setDescrebe, idx, setIdx}}>
      <div className="flex flex-col gap-4 desktop:w-4/5 w-[90%] overflow-hidden h-[95vh] py-5 rounded-lg shadow-md bg-zinc-800">
        <Modal/>
        <div className="flex text-white justify-center w-full font-bold items-center pt-2 flex-col">
          <span className="mobileMini:text-lg desktopMini:text-2xl">Lista de Tarefas</span>
          <InputTask/>   
        </div>
        <hr className="border-zinc-600" />
        <div className="h-auto overflow-y-scroll overflow-x-hidden  w-full py-2 flex justify-center">
          <Tasks/>       
        </div>
      </div>
    </todoContext.Provider>
  )
}
