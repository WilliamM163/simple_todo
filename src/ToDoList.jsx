import {useEffect, useState} from "react";

import styles from "./App.module.css";

import Tasks from './TasksClass.jsx';

function ToDoList() {
    const [tasks, setTasks] = useState([]);

    // On first load
    useEffect(() => {
        const tasksFromStorage = localStorage.getItem('tasks');
        if (tasksFromStorage) {
            setTasks(JSON.parse(tasksFromStorage));
        }
    }, []);

    const renderTasks = () => {
        if (tasks.length === 0) {
            return <p>Please add some tasks</p>
        }

        return tasks.map((task, index) => {
            return <p
                className={task.completed ? styles.completed : styles.uncompleted}
                key={index}
                onClick={() => Tasks.toggle(index, tasks, setTasks)}
            >{task.name}</p>
        });
    }

    return (
        <main className={styles.main}>
            <input
                type="text"
                className={styles.make_task}
                placeholder="+ New Task"
                onKeyDown={(event) => {Tasks.onEnter(event, tasks, setTasks)}}
            />
            <div className={styles.tasks}>
                {renderTasks(tasks)}
                <hr />
                <div className={styles.tasks_info}>
                    <p>{Tasks.numberOfTasks(tasks)}</p>
                    <a onClick={() => {Tasks.clearCompletedTasks(tasks, setTasks)}}>Clear Completed Tasks</a>
                </div>
            </div>
        </main>
    );
}

export default ToDoList;