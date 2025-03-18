class Tasks {
    static numberOfTasks(tasks) {
        if (tasks.length === 1) {
            return '1 task';
        }
        return `${tasks.length} tasks`;
    }

    static onEnter(event, tasks, setTasks) {
        if (event.key === 'Enter') {
            const name = event.target.value;
            event.target.value = '';

            // Adding Task
            const newTasksList = [{name, completed: false}, ...tasks];
            setTasks(newTasksList);
            this.saveToStorage(newTasksList);
        }
    }

    static toggle(index, tasks, setTasks) {
        const newTasksList = [...tasks];
        newTasksList[index].completed = !newTasksList[index].completed;
        setTasks(newTasksList);
        this.saveToStorage(newTasksList);
    }

    static clearCompletedTasks(tasks, setTasks) {
        const newTasksList = [...tasks].filter((task) => !task.completed);
        setTasks(newTasksList);
        this.saveToStorage(newTasksList);
    }

    static saveToStorage(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

export default Tasks;