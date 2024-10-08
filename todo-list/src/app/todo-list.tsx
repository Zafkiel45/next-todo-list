'use client';

import { todoContext } from "./components/context";
import { TasksContext } from "./components/utility/tasksContext";
import { useState } from "react";
import { Modal } from "./(components)/modal";
import { AllElements } from "./components/utility/fatherMode";
import { CloseTasksButton } from "./components/(main_estruture)/closeTasksButton";
import { MainContainerInputs } from "./components/(main_estruture)/mainContainerInputs";
import { MainContainerTasks } from "./components/(main_estruture)/mainContainerTasks";
// hooks
import { useAtom } from "jotai";
// atoms
import { globalToggleSidebarAtoms } from "./(atoms)/(global)/global-atoms";

export const TodoListMainComponent = () => {

    const key = 'tasks';
    const [task, setTask] = useState([]);
    const [name, setName] = useState('');
    const [title, setTitle] = useState(null);
    const [blur, setBlur] = useState(false);
    const [rename, setRename] = useState('');
    const [currentTag, setCurrentTag] = useState('');
    const [descrebe, setDescrebe] = useState('');
    const [indexed, setIndexed] = useState(null);
    const [activeSearch, setActiveSearch] = useState<boolean>(false);
    const [activeFilter, setActiveFilter] = useState<boolean>(false);
    const [visibility, setVisibility] = useState<boolean>(false);
    const [ElementDescription, setElementDescription] = useState('')

    const [globalToggleSidebarState, setGlobalToggleSidebarState] = useAtom(globalToggleSidebarAtoms);

    const [sideBar, setSideBar] = useState({
      position:'right-[-200%]',
      display: 'hidden',
    });
    
    const toggleSideBarFunction = ():void => {
      setGlobalToggleSidebarState('left-[-100%]')
    }
    const toggleSideBarFunctionReverse = ():void => {
      setGlobalToggleSidebarState('left-0')
    }

    return (
        <AllElements>
          <todoContext.Provider value={{
            blur, 
            setBlur, 
            toggleSideBarFunction, 
            key, 
            task, 
            setTask, 
            setName, 
            name, 
            setSideBar, 
            sideBar, 
            descrebe, 
            setDescrebe, 
            title, 
            setTitle,
            indexed,
            setIndexed,
            rename, 
            setRename,
            setElementDescription,
            ElementDescription,
          }}>
            <div className={`flex h-full`}>
              <CloseTasksButton toggleSideBarFunctionReverse={toggleSideBarFunctionReverse} />
              <MainContainerInputs toggleSideBar={globalToggleSidebarState} />
              <TasksContext.Provider value={{
                activeFilter,
                activeSearch, 
                currentTag,
                visibility,
                setActiveFilter, 
                setActiveSearch,
                setCurrentTag,
                setVisibility
              }}>
                    <Modal/>
                    <MainContainerTasks blur={blur} />
              </TasksContext.Provider>
            </div>
          </todoContext.Provider>
        </AllElements>
      )
}