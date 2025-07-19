import React, { createContext, useEffect, useState } from "react";



interface TasksProviderProps{
    children: React.ReactNode
}

interface TaskContextData{
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export interface Task{
    id:number;
    title:String;
    done:boolean;
}

export const TaskContext = createContext({} as TaskContextData);

export const TasksProvider: React.FC<TasksProviderProps> = ({children}) => {
    const [tasks, setTasks] = useState([] as Task[]);

    useEffect(() =>{
            const tasksOnLocalStorage = localStorage.getItem('tasks');
    
            if(tasksOnLocalStorage){
                setTasks(JSON.parse(tasksOnLocalStorage));
            }
        }, []);
    //pode compartilhar função tbm
    return(
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    );
}