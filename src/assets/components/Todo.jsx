import './Todo.css'
import check from '../check.png';
import deletetask from '../delete.png';

function Todo ({task, removeTask, completeTask}){   
    

return(
    <>
     <div className='todo-task-all'>
                    <div className='todo-task'
                    style={{textDecoration: task.isCompleted ? "line-through" : ""}}
                    >
                        <div className='text'>{task.text}</div>
                        <div className='category'>({task.category})</div>
                        <div className='date'>Início:{task.dateStart}</div>
                        <div className='date'>Término:{task.dateEnd}</div>
                    <div className='btns-action'>
                        <button onClick={() => completeTask(task.id)}><img src={check} alt='check'/></button>
                        <button onClick={() => removeTask(task.id)}><img src={deletetask} alt='delete'/></button>
                    </div>
                    </div>
                    
                </div>
    </>
)
}
export default Todo;