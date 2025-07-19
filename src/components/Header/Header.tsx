import React, { useContext } from "react";
import styles from './header.module.scss'
import { StatsCard } from "../StatsCard/StatsCard";
import { TaskContext } from "../Context/TaskContext";

export const Header: React.FC = () =>{

    const {tasks} = useContext(TaskContext);
    
    const totalTasks = tasks.length;

    const totalPending = tasks.reduce((total, task) => {
       return !task.done ? total+1 : total;
    }, 0);

    const totalDone = totalTasks - totalPending;

    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>MyTodo</h1>

                    <span>Bem-vindo, caio</span>
                </div>

                <div>                         
                    <StatsCard title="Total de tarefas" number={totalTasks}/>
                    <StatsCard title="Tarefas pendentes" number={totalPending}/>
                    <StatsCard title="Tarefas concluídas" number={totalDone}/>
                </div>
            </div>
        </header>
    );
}