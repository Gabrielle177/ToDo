import { useState } from 'react';
import './Home.css';
import Todo from '../assets/components/Todo';
import TodoForm from '../assets/components/TodoForm';
import Search from '../assets/components/Search';

function Home() {
    const [tasks, setTasks] = useState([
        {
            id:1,
            text:"Ir a academia",
            category:"Pessoal",
            isCompleted:false,
            dateStart: "03/08/2023"
        },
        {
            id:2,
            text:"Estudar React",
            category:"Estudo",
            isCompleted:false,
        },
        {
            id:3,
            text:"Terminar app de organização",
            category:"Trabalho",
            isCompleted:false,
        },
    ]);

    const [searchTask, setSearch] = useState("")

    function addTodo(text, category, dateStart, dateEnd) {
        const newTodo = [...tasks, { 
            id: Math.floor(Math.random() * 500),
            text,
            category,
            dateStart,
            dateEnd,
            isCompleted: false,
        }];
        setTasks(newTodo)
    }

    function removeTask(id){
        const newTasks = [...tasks]
        const filterTask = newTasks.filter(tasks => tasks.id !== id ? tasks : null)
        setTasks(filterTask);
    }

    function completeTask(id){
        const newTask = [...tasks]
        newTask.map((tasks) => tasks.id === id ? tasks.isCompleted = !tasks.isCompleted : tasks)
        setTasks(newTask);
    }

    return (
        <>
     <header>
        <div>       
            <ul>
                <li>Home</li>
                <li>Tarefas</li>
                <li>Projetos</li>
                <li>Sair</li>
            </ul>
        </div>

     </header>
     <main>
        <div className='content'>
            <h1 className='title'>Projetos</h1>
            
            {tasks.filter((tasks) => tasks.text.toLowerCase().includes(searchTask.toLowerCase()))
            .map((task) => (
               <Todo 
               key={task.id} 
               task={task}
               removeTask={removeTask}
               completeTask={completeTask}
               />
            ))}
            <div>
            <TodoForm addTodo={addTodo} />
            </div>
            <Search 
            searchTask={searchTask}
            setSearch={setSearch} />
           
        </div>
     </main>
     </>
    );
  }
  export default Home;