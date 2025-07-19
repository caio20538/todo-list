import React, { FormEvent, useContext, useState } from "react";
import style from "./style.module.scss";
import { TaskContext } from "../Context/TaskContext";

// interface Task{
//     id:number;
//     title:String;
//     done:boolean;
// }

export const Tasks: React.FC = () => {

    const[taskTitle, setTaskTitle] = useState("");
    //const [tasks, setTasks] = useState([] as Task[]);

    const {tasks, setTasks} = useContext(TaskContext);

    console.log(tasks)
    /*
        [
            {
                id: number,
                title: 'tarefa1',
                done: boolean
            }
        ]
    */

    //função que o usuário quer add tarefas
    function handleSubmitAddTask(event: FormEvent): void{
        event.preventDefault();
        
        if(taskTitle.length < 3){
            alert("Não é possível adicionar uma tarefa com menos de 3 letras");
            return;
        }

        const newTasks = [
            ...tasks, //tudo que o array já tinha 
            {id: new Date().getTime(), title: taskTitle, done: false}//tarefa nova
        ]
        //adicionar tarefa de forma assincrona
        
        setTasks(newTasks);
        
        localStorage.setItem('tasks', JSON.stringify(newTasks));// salva no local storage

        setTaskTitle("");
    }

    function handleToggleTasksStatus(taskId: number){
        const newTaks = tasks.map((task) =>{
            if(taskId === task.id){
                return{
                    ...task,
                    done: !task.done
                }
            }

            return task;
        })

        setTasks(newTaks);
    }

    function handleRemoveTask(taskId: number){
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    }

    //quando recarrega esse componente dispara essa função para readicionar as tarefas salvas no localstorage na variável
    // useEffect(() =>{
    //     const tasksOnLocalStorage = localStorage.getItem('tasks');

    //     if(tasksOnLocalStorage){
    //         setTasks(JSON.parse(tasksOnLocalStorage));
    //     }
    // }, []);

    return(
        <section className={style.container}>
            <form onSubmit={handleSubmitAddTask}>
                <div>
                    <label htmlFor="task-title">Adicionar Tarefa</label>
                    <input type="text" value={taskTitle}
                    onChange={(event) => setTaskTitle(event.target.value) /**Control input */} 
                    id="task-title" placeholder="Título da tarefa" />
                </div>

                <button type="submit">Adicionar tarefa</button>
            </form>

            <ul>
                {tasks.map(task => {
                    return(
                        //deve se colocar no primeiro elemento do map serve para atualizar
                        <li key={task.id}>
                            <input
                            type="checkbox" 
                            id={`task-${task.id}`} 
                            onChange={() => handleToggleTasksStatus(task.id)}/>

                            <label className={task.done ? style.done : ""} 
                             htmlFor={`task-${task.id}`}>{task.title}</label>

                             <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
//48:40