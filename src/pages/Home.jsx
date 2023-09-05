import { useState } from 'react';
import './Home.css';
import Todo from '../assets/components/Todo';
import TodoForm from '../assets/components/TodoForm';
import Search from '../assets/components/Search';
import checklist from '../assets/checklist.svg';

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
        <div className='container-title'>
            <div className='title'>       
                <h1>
                <img src={checklist} alt='icon title'/> To-do
                <span className='point'>.</span> </h1>
            </div>
        </div>
     </header>
     <main>
        <div className='content'>
            <div className='box'> 
                <div className='title'></div>
            <div className='search'>           
                <Search 
                searchTask={searchTask}
                setSearch={setSearch} />
            </div>
            <div className='all-todos'>
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
            </div>
                
            </div>
            <div className='createTask'>
            <TodoForm addTodo={addTodo} />
            </div>
            </div>
          
           
        </div>
     </main>
     </>
    );
  }
  export default Home;